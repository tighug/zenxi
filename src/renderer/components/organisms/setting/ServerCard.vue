<template>
  <v-card>
    <app-card-title icon="mdi-server" color="cyan">
      Server
      <template v-slot:append>
        <server-card-dialog />
      </template>
    </app-card-title>

    <v-card-text>
      <server-card-content :server="server" :valid="valid" />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import AppCardTitle from "~/components/molecules/AppCardTitle";
import ServerCardContent from "~/components/organisms/setting/ServerCardContent";
import ServerCardDialog from "~/components/organisms/setting/ServerCardDialog";

export default {
  components: {
    AppCardTitle,
    ServerCardContent,
    ServerCardDialog
  },
  computed: {
    ...mapGetters("setting", ["server", "valid"])
  }
};
</script>
