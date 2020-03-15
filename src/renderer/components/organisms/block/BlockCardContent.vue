<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(b, i) in blocks" :key="i">
      <v-expansion-panel-header>
        <v-row no-gutters>
          <v-col cols="1" class="cyan--text title">{{ b.number }}</v-col>
          <v-col>
            <app-labeled-text :value="b.timestamp" label="Mined On" />
          </v-col>
          <v-col>
            <app-labeled-text :value="b.gasUsed" label="Gas Used" />
          </v-col>
          <v-col>
            <app-labeled-text :value="b.transactions.length" label="TX Count" />
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="px-4">
        <v-row dense>
          <v-col cols="12" lg="6">
            <app-labeled-text :value="b.hash" label="Hash" />
          </v-col>
          <v-col cols="12" lg="6">
            <app-labeled-text :value="b.parentHash" label="Parent Hash" />
          </v-col>
          <v-col cols="12" lg="6">
            <app-labeled-text :value="b.nonce" label="Nonce" />
          </v-col>
          <v-col cols="12" lg="6">
            <app-labeled-text
              :value="b.transactionsRoot"
              label="Transactions Root"
            />
          </v-col>
          <v-col cols="12" lg="6">
            <app-labeled-text :value="b.stateRoot" label="State Root" />
          </v-col>
          <v-col cols="12" lg="6">
            <app-labeled-text :value="b.miner" label="Miner" />
          </v-col>
          <v-col cols="12" md="6">
            <app-labeled-text :value="b.difficulty" label="Difficulty" />
          </v-col>
          <v-col cols="12" md="6">
            <app-labeled-text
              :value="b.totalDifficulty"
              label="Total Difficulty"
            />
          </v-col>
          <v-col cols="12" md="6">
            <app-labeled-text :value="b.size" label="Size" />
          </v-col>
          <v-col cols="12" md="6">
            <app-labeled-text :value="b.gasLimit" label="Gas Limit" />
          </v-col>
          <v-col cols="12" md="6">
            <app-labeled-text :value="b.extraData" label="Extra Data" />
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
    blocks: {
      type: Array,
      required: true
    }
  }
};
</script>
