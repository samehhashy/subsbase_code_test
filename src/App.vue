<template>
  <v-app>
    <TheHeader />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader'

export default {
  name: 'App',

  components: {
    TheHeader
  }
}
</script>
