<template>
  <div class="compare">
    <a href="#" @click.prevent="reset">New comparison</a>
    <choice ref="choiceLeft"
      v-bind:defaultText="'Broccoli'"
      v-bind:defaultAdvantage="'healthy'">
    </choice>
    <choice ref="choiceRight"
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
  },
  methods: {
    reset () {
      this.$refs.choiceLeft.reset()
      this.$refs.choiceRight.reset()
    }
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
  color: rgb(132, 203, 171);
  text-decoration: none;
  font-weight: 800;
}

</style>
