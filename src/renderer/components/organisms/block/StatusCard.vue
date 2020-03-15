<template>
  <v-card>
    <app-card-title icon="mdi-play" color="green">
      Status
    </app-card-title>

    <v-card-text>
      <status-card-content :status="status" />
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import AppCardTitle from "~/components/molecules/AppCardTitle";
import StatusCardContent from "~/components/organisms/block/StatusCardContent";

export default {
  components: {
    AppCardTitle,
    StatusCardContent
  },

  computed: {
    ...mapGetters("block", ["status"])
  }
};
</script>
