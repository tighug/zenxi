<template>
  <v-item-group v-model="_value" mandatory>
    <v-row dense>
      <v-col cols="12" sm="6" md="3">
        <v-item v-slot:default="{ active, toggle }">
          <app-widget
            :value="isListening ? 'OK' : 'Error'"
            :active="active"
            @click="toggle"
            title="Status"
            icon="mdi-play"
            icon-color="green"
          />
        </v-item>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-item v-slot:default="{ active, toggle }">
          <app-widget
            :value="blockCount"
            :active="active"
            @click="toggle"
            title="Block"
            icon="mdi-cube-outline"
            icon-color="cyan"
          />
        </v-item>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-item v-slot:default="{ active, toggle }">
          <app-widget
            :value="transactionCount"
            :active="active"
            @click="toggle"
            title="Transaction"
            icon="mdi-swap-horizontal"
            icon-color="red"
          />
        </v-item>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-item v-slot:default="{ active, toggle }">
          <app-widget
            :value="accountCount"
            :active="active"
            @click="toggle"
            title="Account"
            icon="mdi-account"
            icon-color="orange"
          />
        </v-item>
      </v-col>
    </v-row>
  </v-item-group>
</template>

<script>
import { mapGetters } from "vuex";
import AppWidget from "~/components/molecules/AppWidget";

export default {
  components: {
    AppWidget
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters("block", [
      "isListening",
      "blockCount",
      "transactionCount",
      "accountCount"
    ]),
    _value: {
      get() {
        return this.value;
      },
      set(val) {
        if (val === this.value) return;

        this.$emit("change", val);
      }
    }
  }
};
</script>
