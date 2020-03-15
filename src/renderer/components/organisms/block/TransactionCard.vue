<template>
  <v-card>
    <app-card-title icon="mdi-swap-horizontal" color="red">
      Transaction
    </app-card-title>

    <transaction-card-content :transactions="transactions" />
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import AppCardTitle from "~/components/molecules/AppCardTitle";
import TransactionCardContent from "~/components/organisms/block/TransactionCardContent";

export default {
  components: {
    AppCardTitle,
    TransactionCardContent
  },
  computed: {
    ...mapGetters("block", ["transactions"])
  }
};
</script>
