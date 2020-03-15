<template>
  <v-list color="transparent">
    <v-list-item v-for="(item, i) in items" :key="i">
      <v-list-item-title>{{ item.title }} </v-list-item-title>
      <v-list-item-icon>
        <v-icon v-if="item.valid" color="green">mdi-check</v-icon>
        <v-icon v-else color="red">mdi-alert</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle class="text-right">
        {{ item.value }}
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    server: {
      type: Object,
      required: true
    },

    valid: {
      type: Object,
      required: true
    }
  },

  computed: {
    items() {
      return [
        {
          title: "Blockchain",
          value: this.server.blockchain,
          valid: this.valid.blockchain
        }
      ];
    }
  }
};
</script>
