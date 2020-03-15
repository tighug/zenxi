<template>
  <div>
    <v-row class="overline orange--text" dense>
      {{ label }}
    </v-row>
    <v-row class="body-2" dense>
      {{ value }}
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "label"
    },
    value: {
      type: [Number, String],
      default: "?"
    }
  }
};
</script>
