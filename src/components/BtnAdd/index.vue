<template>
  <div class="d-flex justify-end mb-6">
    <v-btn @click="$emit('click:add', type)" fab dark color="indigo">
      <v-icon size="30" dark>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'BtnAdd',

  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
