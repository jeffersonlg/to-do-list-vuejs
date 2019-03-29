<template>
  <v-app>
    <v-layout justify-center>
        <AddActivity/>
    </v-layout>
    <v-layout row wrap style="margin: auto;">
            <Activity v-for="(item, idx) in ativity" :key="idx"
            :name="item.name"
            :date="item.date"
            :priority="item.priority"
            >
            </Activity>
    </v-layout>
  </v-app>
</template>
<script>
import AddActivity from './AddActivity'
import Activity from './Activity'
import _ from 'lodash'
export default {
    name: 'ActivityLayout',
    components: {
        AddActivity,
        Activity
    },
    computed: {
      ativity() {
        return  _.orderBy(this.$store.state.activityData,['priority'])
      }

    },
    mounted() {
        this.getActivitys()
    },
    methods: {
      getActivitys() {
        this.$store.dispatch('getActivity')
      }
    },
}
</script>