<template>
  <v-card>
    <app-card-title icon="mdi-account" color="orange">
      Account
    </app-card-title>

    <account-card-content :accounts="accounts" />
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import AppCardTitle from "~/components/molecules/AppCardTitle";
import AccountCardContent from "~/components/organisms/block/AccountCardContent";

export default {
  components: {
    AppCardTitle,
    AccountCardContent
  },
  computed: {
    ...mapGetters("block", ["accounts"])
  }
};
</script>
