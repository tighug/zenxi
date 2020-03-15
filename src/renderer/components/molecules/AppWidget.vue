<template>
  <v-card :color="cardColor" @click="clickCard">
    <v-row align="center">
      <v-col cols="3" class="ml-4">
        <v-icon :color="iconColor" x-large>
          {{ icon }}
        </v-icon>
      </v-col>
      <v-col cols="8">
        <p class="body-1 my-0 mr-4 text-right">
          {{ title }}
        </p>
        <p class="display-1 my-0 mr-4 text-right">
          {{ value }}
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    icon: {
      type: String,
      default: "mdi-help"
    },
    iconColor: {
      type: String,
      default: "white"
    },
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "title"
    }
  },
  data: () => ({
    activeColor: "cyan darken-4",
    inActiveColor: "blue-grey darken-4"
  }),
  computed: {
    cardColor() {
      return this.active ? this.activeColor : this.inActiveColor;
    }
  },
  methods: {
    clickCard() {
      this.$emit("click");
    }
  }
};
</script>
