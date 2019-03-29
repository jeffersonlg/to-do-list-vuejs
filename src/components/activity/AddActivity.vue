<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Add</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Add Activity</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
                    <v-flex xs12 sm6 md12>
                    <v-text-field label="Name*" v-model="itens.name" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="itens.date"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="itens.date"
                            label="End date "
                            prepend-icon="event"
                            readonly
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker 
                          v-model="itens.date" 
                          no-title 
                          scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                          <v-btn flat color="primary" @click="dateSave(itens.date)">OK</v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                    <v-autocomplete
                        :items="[1, 2, 3, 4, 5]"
                        label="Priority"
                        v-model="itens.priority"
                    ></v-autocomplete>
                    </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "AddActivity",
  components: {
  },
  data: () => ({
    dialog: false,
    menu: false,
    itens: {
      name: '',
      priority: '',
      date: null,
    }
  }),
  watch: {
  },
  methods: {
    dateSave (date) {
      this.$refs.menu.save(date)
    },
    save() {
      this.$store.dispatch('addActivity', this.itens)
      this.dialog = false
    }
  }
};
</script>

