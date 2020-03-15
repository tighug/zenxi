<template>
  <v-list color="transparent">
    <v-list-item v-for="(item, i) in items" :key="i">
      <v-list-item-icon>
        <v-icon :color="item.color">
          {{ item.icon }}
        </v-icon>
      </v-list-item-icon>

      <v-list-item-title>{{ item.title }}</v-list-item-title>

      <template v-if="item.title === 'RPC Server'">
        <v-list-item-subtitle class="text-right">
          <v-icon v-if="status.isListening" color="green">mdi-check</v-icon>
          <v-icon v-else color="red darken-1">mdi-alert</v-icon>
          {{ item.value }}
        </v-list-item-subtitle>
      </template>
      <template v-else>
        <v-list-item-subtitle class="text-right">
          {{ item.value }}
        </v-list-item-subtitle>
      </template>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    status: {
      type: Object,
      required: true
    }
  },
  computed: {
    items() {
      return [
        {
          title: "RPC Server",
          icon: "mdi-web",
          color: "blue darken-1",
          value: this.status.provider.host
        },
        {
          title: "Network ID",
          icon: "mdi-identifier",
          color: "teal",
          value: this.status.networkId
        },
        {
          title: "Peer Count",
          icon: "mdi-laptop",
          color: "pink darken-1",
          value: this.status.peerCount
        },
        {
          title: "Gas Price",
          icon: "mdi-coin",
          color: "yellow darken-1",
          value: this.status.gasPrice
        },
        {
          title: "Gas Limit",
          icon: "mdi-fire",
          color: "deep-orange",
          value: this.status.gasLimit
        }
      ];
    }
  }
};
</script>
