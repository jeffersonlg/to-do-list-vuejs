<template>
  <v-toolbar fixed>
    <v-toolbar-title v-if="isAuthenticated">
    <v-avatar>
      <v-icon dark>account_circle</v-icon>
    </v-avatar>
      {{user.user.email}}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
    </v-toolbar-items>
    <v-btn 
      v-if="isAuthenticated" 
      outline 
      color="white"
      @click="logout" 
      data-cy="logout">
      Logout
    </v-btn>
  </v-toolbar>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: mapState({
    user: 'user',
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
  }),
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>
<style scoped>
</style>


