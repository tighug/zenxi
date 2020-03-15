<template>
  <div>
    <v-btn @click="$emit('zoomOut')" color="secondory" fab x-small dark>
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <v-btn @click="$emit('zoomIn')" color="secondory" fab x-small dark>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>
