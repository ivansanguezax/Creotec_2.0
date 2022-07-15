<template>
  <v-btn absolute color="primary" bottom right icon @click="changeThemeColor">
      <v-icon color="primary" icon>{{
        $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
      }}</v-icon>
  </v-btn>
</template>

<script>
export default {
    methods: {
    changeThemeColor() {
      if (this.$vuetify.theme.dark === true) {
        this.$vuetify.theme.dark = false
      } else {
        this.$vuetify.theme.dark = true
      }
    },
  }
}
</script>

<style>

</style>