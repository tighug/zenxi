<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(tx, i) in transactions" :key="i">
      <v-expansion-panel-header>
        <v-row no-gutters>
          <v-col cols="1" class="red--text title">
            {{ tx.blockNumber }}
          </v-col>
          <v-col>
            <app-labeled-text :value="tx.from" label="From" />
          </v-col>
          <v-col>
            <app-labeled-text :value="tx.to" label="To" />
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="px-4">
        <v-row dense>
          <v-col cols="12" lg="6">
            <app-labeled-text :value="tx.hash" label="Tx Hash" />
          </v-col>
          <v-col cols="12" lg="6">
            <app-labeled-text :value="tx.blockHash" label="Block Hash" />
          </v-col>
          <v-col cols="12" md="6">
            <app-labeled-text :value="tx.gasPrice" label="Gas Price" />
          </v-col>
          <v-col cols="12" md="6">
            <app-labeled-text :value="tx.gas" label="Gas" />
          </v-col>
          <v-col cols="12" md="6">
            <app-labeled-text :value="tx.nonce" label="Nonce" />
          </v-col>
          <v-col cols="12" md="6">
            <app-labeled-text :value="tx.value" label="Value" />
          </v-col>
          <v-col cols="12" md="6">
            <app-labeled-text :value="tx.transactionIndex" label="Tx Index" />
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import AppLabeledText from "~/components/molecules/AppLabeledText";

export default {
  components: {
    AppLabeledText
  },
  props: {
    transactions: {
      type: Array,
      required: true
    }
  }
};
</script>
