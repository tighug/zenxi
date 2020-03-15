<template>
  <v-dialog v-model="dialog" max-width="400">
    <template v-slot:activator="{ on }">
      <v-btn color="green darken-1" outlined v-on="on">
        <v-icon left>mdi-pencil</v-icon>
        edit
      </v-btn>
    </template>

    <v-card>
      <v-card-title>Server</v-card-title>

      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            v-model="blockchain"
            :rules="[v => !!v || 'RPC Server is required']"
            label="RPC Server"
            outlined
            dense
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn text @click="dialog = false">cancel</v-btn>
        <v-btn :disabled="!valid" color="green darken-1" outlined @click="save">
          save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    dialog: false,
    valid: false,
    blockchain: "http://localhost:7545"
  }),

  methods: {
    ...mapActions("setting", ["setServer"]),

    async save() {
      const server = {
        blockchain: this.blockchain
      };

      await this.setServer(server);

      this.dialog = false;
    }
  }
};
</script>
