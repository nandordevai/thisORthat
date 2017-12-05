<template>
  <div class="compare">
    <choice
      v-bind:defaultText="'Broccoli'"
      v-bind:defaultAdvantage="'healthy'">
    </choice>
    <choice
      v-bind:defaultText="'Nutella'"
      v-bind:defaultAdvantage="'delicious'">
    </choice>
  </div>
</template>

<script>
import Choice from '@/components/Choice'

export default {
  name: 'Compare',
  data () {
    return {}
  },
  components: {
    Choice
  }
}
</script>

<style scoped>
</style>
