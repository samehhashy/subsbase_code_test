import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: {
      stocks: [
        {
          // initial item
          '1. open': '210.9800',
          '2. high': '210.9800',
          '3. low': '210.9800',
          '4. close': '210.9800',
          '5. volume': '0',
          symbol: 'BABA'
        }
      ],
      fx: [
        {
          // initial item
          '1. From_Currency Code': 'USD',
          '2. From_Currency Name': 'United States Dollar',
          '3. To_Currency Code': 'EGP',
          '4. To_Currency Name': 'Egyptian Pound',
          '5. Exchange Rate': '15.64000000',
          '6. Last Refreshed': '2020-03-03 00:17:15',
          '7. Time Zone': 'UTC',
          '8. Bid Price': '15.61000000',
          '9. Ask Price': '15.67000000'
        }
      ]
    }
  },
  mutations: {
    APPPEND_ITEM (state, { type, data }) {
      state.items[type].push(data)
    }
  },

  actions: {
    AppendItem ({ commit }, payload) {
      commit('APPPEND_ITEM', payload)
    }
  },

  getters: {
    stocks: state => state.items.stocks,
    fx: state => state.items.fx
  }

})
