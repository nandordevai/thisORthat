<template>
  <div class="compare">
    <choice ref="choiceLeft"
      v-bind:defaultText="'Broccoli'"
      v-bind:defaultAdvantage="'healthy'">
    </choice>
    <choice ref="choiceRight"
      v-bind:defaultText="'Nutella'"
      v-bind:defaultAdvantage="'delicious'">
    </choice>
    <div class="reset">
      <a v-show="hasAdvantages" href="#" @click.prevent="reset">New comparison</a>
    </div>
  </div>
</template>

<script>
import Choice from '@/components/Choice'

export default {
  name: 'Compare',
  data () {
    return {
      hasAdvantages: false
    }
  },
  components: {
    Choice
  },
  methods: {
    reset () {
      this.$refs.choiceLeft.reset()
      this.$refs.choiceRight.reset()
      this.hasAdvantages = false
    },
    isEmpty () {
      try {
        return this.$refs.choiceRight.isEmpty() && this.$refs.choiceLeft.isEmpty()
      } catch (e) {
        return true
      }
    }
  },
  created () {
    this.$on('edited', () => {
      this.hasAdvantages = !this.isEmpty()
    })
  }
}
</script>

<style scoped>

.reset {
  display: inline-block;
  width: 100%;
  text-align: center;
  float: none;
}

a {
  margin: 0;
  margin-top: 2rem;
  color: rgb(132, 203, 171);
  text-decoration: none;
  clear: both;
  font-weight: 800;
}

</style>
