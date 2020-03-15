<template>
  <div>
    <v-app-bar app color="blue-grey darken-4" dense dark>
      <v-toolbar-title>Setting</v-toolbar-title>
    </v-app-bar>

    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6">
          <server-card />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ServerCard from "~/components/organisms/setting/ServerCard";

export default {
  components: {
    ServerCard
  },

  async asyncData({ store }) {
    await store.dispatch("setting/checkBlockchainServer");
  }
};
</script>
