import Vue from 'vue'

Vue.filter('numToFixed', function (value, length = 1) {
  return Number(value).toFixed(length)
})

Vue.filter('uppercaseFirst', function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1)
})
