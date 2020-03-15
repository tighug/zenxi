<template>
  <v-text-field
    :value="value"
    :type="type"
    :label="label"
    :rules="[v => !!v || `${label} is required`]"
    :suffix="suffix"
    @input="input"
    outlined
    dense
  />
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    type: {
      type: String,
      default: "number"
    },
    label: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    }
  },
  methods: {
    input(val) {
      this.$emit("input", val);
    }
  }
};
</script>
