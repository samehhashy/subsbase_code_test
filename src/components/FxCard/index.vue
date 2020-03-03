<template>
  <v-card class="mx-auto" outlined hover>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="6">
          <div class="text-center right-bordered">
            <h1 class="my-2">{{ get('From_Currency Code') }}</h1>
            <h3 class="headline indigo--text">1</h3>
          </div>
        </v-col>

        <v-col cols="6">
          <div class="text-center">
            <h1 class="my-2">{{ get('To_Currency Code') }}</h1>
            <h3 :title="get('Exchange Rate')" class="headline indigo--text">{{get('Exchange Rate') | numToFixed(4)}}</h3>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { getBySubstr } from '@/utils/helpers'

export default {
  name: 'FxCard',

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    get (str) {
      return getBySubstr(this.item, str)
    }
  }
}
</script>
