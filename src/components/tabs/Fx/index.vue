<template>
  <v-container>
    <btn-add type="fx" @click:add="$emit('add', $event)" />

    <v-row>
      <v-col cols="6" sm="4" v-for="(item, i) in fx" :key="i">
        <fx-card :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FxCard from '@/components/FxCard'
import { mapGetters } from 'vuex'

export default {
  name: 'FxTab',

  components: {
    FxCard
  },

  computed: {
    ...mapGetters(['fx'])
  }
}
</script>
