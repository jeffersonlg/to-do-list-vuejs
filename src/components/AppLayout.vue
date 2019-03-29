<template>
    <v-layout>
        <v-flex xs12 sm8 offset-sm2>
            <v-app dark>
                <Header></Header>
                <v-content class="container">
                    <router-view/>
                </v-content>
            </v-app>
        </v-flex>
    </v-layout>
</template>
<script>
import Header from './Header'
export default {
    name: 'App-Layout',
    components: {
        Header
    }
}
</script>
<style  scoped>
    .container {
        margin-top: 80px;
    }
</style>

