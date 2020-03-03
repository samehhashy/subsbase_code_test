<template>
  <v-container>
    <btn-add type="stocks" @click:add="$emit('add', $event)" />

    <v-row>
      <v-col cols="6" sm="4" v-for="(item, i) in stocks" :key="i">
        <stocks-card :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StocksCard from '@/components/StocksCard'
import { mapGetters } from 'vuex'

export default {
  name: 'StocksTab',

  components: {
    StocksCard
  },

  computed: {
    ...mapGetters(['stocks'])
  }
}
</script>
