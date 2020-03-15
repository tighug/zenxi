<template>
  <v-card>
    <app-card-title icon="mdi-cube-outline" color="cyan">Block</app-card-title>

    <block-card-content :blocks="blocks" />
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import AppCardTitle from "~/components/molecules/AppCardTitle";
import BlockCardContent from "~/components/organisms/block/BlockCardContent";

export default {
  components: {
    AppCardTitle,
    BlockCardContent
  },
  computed: {
    ...mapGetters("block", ["blocks"])
  }
};
</script>
