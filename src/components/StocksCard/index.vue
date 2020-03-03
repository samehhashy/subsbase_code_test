<template>
  <v-card class="mx-auto" outlined hover>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="6">
          <div class="text-center right-bordered">
            <h1
              class="my-2 red--text"
              :class="{'green--text': higherClose}"
            >{{listItems.close | numToFixed }}</h1>
            <h3 class="headline indigo--text">{{item.symbol}}</h3>
          </div>
        </v-col>

        <v-col cols="6">
          <v-list dense>
            <v-list-item v-for="(item, i) in detailsItems" :key="i">
              <v-list-item-content>
                <v-list-item-title :title="listItems[item]">
                  <span class="indigo--text">{{ item | uppercaseFirst }}:</span>
                  {{ listItems[item] | numToFixed }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { getBySubstr } from '@/utils/helpers'

export default {
  name: 'StocksCard',

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      detailsItems: ['open', 'high', 'low', 'volume']
    }
  },

  computed: {
    listItems () {
      return {
        close: this.get('close'),
        open: this.get('open'),
        high: this.get('high'),
        low: this.get('low'),
        volume: this.get('volume')
      }
    },

    higherClose () {
      return this.listItems.close > this.listItems.open
    }
  },

  methods: {
    get (str) {
      return getBySubstr(this.item, str)
    }
  }
}
</script>
