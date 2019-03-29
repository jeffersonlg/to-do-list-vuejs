import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        isAuthenticated: false,
        error: false,
        loading: false,
        activityData: []
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setActivity(state, payload) {
            state.activityData = payload
        }
    },
    actions: {
        login({ commit }, { email, password}) {
            commit('setError', false);
            commit('setLoading', true);
            firebase.auth().signInWithEmailAndPassword(email, password).then(
                user => {
                    commit('setUser', user),
                    commit('setLoading', false),
                    commit('setIsAuthenticated', true)
                    router.push('home') 
                })
                .catch(() => {
                    commit('setError', true);
                    commit('setLoading', false);
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
        },

        addActivity({ state }, payload) {
            firebase.database()
            .ref('activity')
            .child(state.user.user.uid)
            .push(payload)
        },

        getActivity({ state, commit }) {
            return firebase
            .database()
            .ref('activity/' + state.user.user.uid)
            .once('value', data => {
                commit('setActivity', data.val())
            })
        },

        logout({ commit }) {
            firebase.auth().signOut().then(
                () => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
        },

    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    }
    
})
