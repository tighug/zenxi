<template>
  <div>
    <div v-for="(acc, i) in accounts" :key="i">
      <v-divider v-if="i !== 0" />
      <v-row class="px-6 py-3" dense>
        <v-col cols="1" class="orange--text title">
          {{ i }}
        </v-col>
        <v-col cols="3">
          <app-labeled-text :value="acc.balance" label="Balance(Eth)" />
        </v-col>
        <v-col cols="3">
          <app-labeled-text :value="acc.txCount" label="TX Count" />
        </v-col>
        <v-col cols="5">
          <app-labeled-text :value="acc.address" label="Address" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import AppLabeledText from "~/components/molecules/AppLabeledText";

export default {
  components: {
    AppLabeledText
  },
  props: {
    accounts: {
      type: Array,
      required: true
    }
  }
};
</script>
