<template>
  <v-layout>
    <v-flex xs12 xs5>
      <v-card class="card">
        <v-img class="white--text" height="100px" :src="src">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{name}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">End Date: {{date}}</span>
          </div>
        </v-card-title>
         <v-card-title>
          <div>
             <span>Priority: {{priority}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "Activity",
  props: {
    name: String,
    src: String,
    priority: String,
    date: String,
  }
};
</script>
<style scoped>
  .card {
    margin: 20px;
  }
</style>
