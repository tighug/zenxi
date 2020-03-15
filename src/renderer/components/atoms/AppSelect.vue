<template>
  <v-select
    :value="value"
    :items="items"
    :label="label"
    :rules="[v => !!v || `${label} is required`]"
    @change="change"
    outlined
    dense
  />
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    items: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: null
    }
  },
  methods: {
    change(val) {
      this.$emit("change", val);
    }
  }
};
</script>
