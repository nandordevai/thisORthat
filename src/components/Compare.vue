<template>
  <div class="compare">
    <a href="#">New comparison</a>
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

a {
  text-align: center;
  float: none;
  display: block;
  margin: 0;
  margin-top: 2rem;
}

</style>
