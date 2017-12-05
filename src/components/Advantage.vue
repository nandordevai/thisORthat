<template>
  <input
    class="advantage"
    v-bind:text="text"
    :placeholder="text"
    type="text"
    v-on:keyup="advantageChanged">
</template>

<script>
export default {
  name: 'Advantage',
  props: ['text'],
  data () {
    return {}
  },
  methods: {
    advantageChanged: function () {
      this.$emit('advantagechanged')
    }
  }
}
</script>

<style scoped>

.advantage {
  width: 100%;
  font-size: 1.5rem;
  border: 0;
  border-bottom: 1px dotted rgb(132, 203, 171);
  margin-bottom: 1rem;
}

input:focus {
  outline: none;
}

</style>
