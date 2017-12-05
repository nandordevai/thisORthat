<template>
  <div class="choice">
    <input class="choice-name" :placeholder="defaultText" type="text">
    <p class="is">is</p>
    <advantage
      v-for="advantage of advantages"
      v-bind:text="advantage.text"
      v-bind:key="advantage.id"
      v-on:advantagechanged="addEmpyAdvantage">
    </advantage>
  </div>
</template>

<script>
import Advantage from '@/components/Advantage'

export default {
  props: ['defaultText', 'defaultAdvantage'],
  name: 'Choice',
  data () {
    return {
      advantages: [
        {
          id: 0,
          text: this.defaultAdvantage
        }
      ]
    }
  },
  components: {
    Advantage
  },
  methods: {
    addEmpyAdvantage: function () {
      // console.log(this.advantages)
      // run when the user begins to type to the last empty advantage field
      if (this.advantages.slice(-1)[0].length === 1) {
        this.advantages.push({
          id: this.advantages.length,
          text: ''
        })
      }
    },

    // run when the user deletes an advantage and clicks to another field
    removeEmptyAdvantages: function () {
      //
    }
  }
}
</script>

<style scoped>

.choice {
  box-sizing: content-box;
  float: left;
  width: 40%;
  margin: 5%;
  margin-top: 2%;
  padding: 0;
}

.choice-name {
  width: 100%;
  font-size: 2rem;
  border: 0;
  border-bottom: 1px solid rgb(132, 203, 171);
}

.is {
  font-size: 1.5rem;
  text-align: left;
}

input:focus {
  outline: none;
}

</style>
