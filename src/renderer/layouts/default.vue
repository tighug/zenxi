<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :mini-variant="mini"
      value="true"
      color="blue-grey darken-4"
      permanent
      app
    >
      <v-list dense>
        <v-list-item-group color="teal">
          <v-list-item to="/" link nuxt>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/block" link nuxt>
            <v-list-item-action>
              <v-icon>mdi-cube-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Blockchain</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/setting" link nuxt>
            <v-list-item-action>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Setting</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div>
          <v-list flat dense>
            <v-list-item-group>
              <v-list-item @click="mini = !mini">
                <v-list-item-action>
                  <v-icon v-if="mini">
                    mdi-chevron-double-right
                  </v-icon>
                  <v-icon v-else>
                    mdi-chevron-double-left
                  </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Hide Sidebar</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </template>
    </v-navigation-drawer>

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line
    source: String
  },
  data: () => ({
    drawer: true,
    mini: true
  })
};
</script>

<style scoped>
#inspire {
  background: #242424;
}
</style>
