<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3 class="px-2">
            <v-card>
                <v-card-title primary-title>
                    <div>
                        <span class="headline">Log In</span><br>
                    </div>
                </v-card-title>
                <v-container fluid>
                    <v-form>
                        <v-text-field
                            label="E-mail"
                            type="email"
                            v-model="email"
                        />
                        <v-text-field
                            label="Pssword"
                            type="password"
                            v-model="password"
                            @keyup.enter="login"
                        />
                        <v-alert
                            :value="true"
                            type="error"
                            icon="warning"
                            v-if="error"
                            outline
                        >
                        Invalid user or password, please try again!
                        </v-alert>
                    </v-form>
                        <v-btn 
                            color=""
                            @click="login" 
                            :loading="loading"
                        >
                        Log In
                        </v-btn>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'CardLogin',
    data() {
        return {
            email: '',
            password: '',
        }
    },
     methods: {
        login() {
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password,
            })
        }
     },
     computed: mapState(['loading', 'error'])
}
</script>
<style scoped>
</style>

