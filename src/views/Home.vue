<template>
  <div>
    <v-container>
      <v-card tile class="mx-auto" outlined>
        <v-tabs
          v-model="activeTab"
          background-color="deep-purple accent-4"
          centered
          dark
          icons-and-text
        >
          <v-tab :href="`#${tab.name}`" v-for="(tab, i) in tabs" :key="i">
            {{ tab.name }}
            <v-icon>mdi-{{ tab.icon }}</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="activeTab">
          <v-tab-item v-for="(tab, i) in tabs" :key="i" :value="tab.name">
            <keep-alive>
              <component :is="tab.name" @add="showDialog" />
            </keep-alive>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>

    <app-dialog ref="addItemDialog" @add-item="handleAddItem">
      <template v-slot="{ form }">
        <template v-if="activeTab === 'stocks'">
          <v-text-field autofocus v-model="form.symbol" label="Stock Symbol" required />
        </template>
        <template v-else>
          <v-row>
            <v-col>
              <v-text-field autofocus v-model="form.currency1" label="From" required />
            </v-col>
            <v-col>
              <v-text-field v-model="form.currency2" label="To" required />
            </v-col>
          </v-row>
        </template>
      </template>
    </app-dialog>
  </div>
</template>

<script>
import AppDialog from '@/components/AppDialog'
import StocksTab from '@/components/tabs/Stocks'
import FxTab from '@/components/tabs/Fx'

export default {
  name: 'Home',

  components: {
    AppDialog,
    stocks: StocksTab,
    fx: FxTab
  },

  data () {
    return {
      tabs: [
        { name: 'stocks', icon: 'finance' },
        { name: 'fx', icon: 'currency-usd' }
      ],
      activeTab: null
    }
  },

  methods: {
    showDialog (type) {
      this.$refs.addItemDialog.show(type)
    },

    handleAddItem (payload) {
      this.$store.dispatch('AppendItem', payload)
    }
  }
}
</script>
