<template>
  <div>
    <v-app-bar app color="blue-grey darken-4" dense dark>
      <v-toolbar-title>Blockchain</v-toolbar-title>
    </v-app-bar>

    <v-container fluid>
      <widget-group v-model="selected" />

      <v-divider class="my-3" />

      <v-row>
        <v-col v-if="selected === 0" cols="12" md="6">
          <status-card />
        </v-col>
        <v-col v-if="selected === 1" cols="12">
          <block-card />
        </v-col>
        <v-col v-if="selected === 2" cols="12">
          <transaction-card />
        </v-col>
        <v-col cols="12">
          <account-card v-if="selected === 3" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WidgetGroup from "~/components/organisms/block/WidgetGroup";
import StatusCard from "~/components/organisms/block/StatusCard";
import BlockCard from "~/components/organisms/block/BlockCard";
import TransactionCard from "~/components/organisms/block/TransactionCard";
import AccountCard from "~/components/organisms/block/AccountCard";

export default {
  components: {
    WidgetGroup,
    StatusCard,
    BlockCard,
    TransactionCard,
    AccountCard
  },
  data: () => ({
    selected: 0
  }),
  async asyncData({ store }) {
    await store.dispatch("block/fetchStatus");
  },
  computed: {
    ...mapGetters("block", ["blocks", "transactions", "accounts"])
  }
};
</script>

<style>
.over-flow {
  max-height: 500px;
  overflow-y: scroll;
}
.over-flow::-webkit-scrollbar {
  width: 10px;
}
.over-flow::-webkit-scrollbar-track {
  background: transparent;
}
.over-flow::-webkit-scrollbar-thumb {
  background: #37474f;
  border-radius: 10px;
}
</style>
