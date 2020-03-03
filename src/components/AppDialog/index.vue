<template>
  <v-dialog v-model="isActive" max-width="600px">
    <v-card>
      <v-container>
        <v-card-title>
          <span class="headline text-uppercase font-weight-bold">Add {{ type }}</span>
        </v-card-title>

        <v-card-text>
          <v-form @submit.prevent="addItem">
            <span
              class="red--text"
              v-if="hasError"
            >An Error has occurred, Please try again and make sure the data is correct</span>
            <slot :form="form" />
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="hide">Cancel</v-btn>
          <v-btn color="blue darken-1" text :loading="loading" @click="addItem">Add</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AppDialog',

  data () {
    return {
      isActive: false,
      type: '',
      form: {},
      loading: false,
      hasError: false
    }
  },

  computed: {
    stockIntraday () {
      return {
        url: 'query',
        params: {
          symbol: this.form.symbol,
          interval: '1min',
          function: 'TIME_SERIES_INTRADAY'
        }
      }
    },

    fxExchangeRate () {
      return {
        url: 'query',
        params: {
          from_currency: this.form.currency1,
          to_currency: this.form.currency2,
          function: 'CURRENCY_EXCHANGE_RATE'
        }
      }
    }
  },

  methods: {
    show (type) {
      this.reset()
      type && (this.type = type)
      this.isActive = true
    },

    hide () {
      this.isActive = false
    },

    reset () {
      this.type = ''
      this.form = {}
    },

    addItem () {
      this.loading = true
      const req = this.type === 'fx' ? this.fxExchangeRate : this.stockIntraday
      this.axios(req)
        .then(res => {
          this.hasError = false
          const data =
            this.type === 'fx'
              ? res.data['Realtime Currency Exchange Rate']
              : this.getLastStockTick(res.data)
          this.$emit('add-item', { data, type: this.type })
          this.loading = false
          this.hide()
        })
        .catch(() => {
          this.hasError = true
          this.loading = false
        })
    },

    getLastStockTick (data) {
      const timeSeries =
        data[`Time Series (${this.stockIntraday.params.interval})`]
      const firstKey = Object.keys(timeSeries)[0]
      const lastTick = timeSeries[firstKey]
      lastTick.symbol = this.form.symbol
      return lastTick
    }
  }
}
</script>
