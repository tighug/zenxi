<template>
  <v-toolbar color="blue-grey darken-4" dense>
    <v-icon :color="color" large left>
      {{ icon }}
    </v-icon>
    <v-toolbar-title>
      <slot />
    </v-toolbar-title>

    <v-spacer />

    <slot name="append"></slot>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "mdi-help"
    },
    color: {
      type: String,
      default: "white"
    }
  }
};
</script>
