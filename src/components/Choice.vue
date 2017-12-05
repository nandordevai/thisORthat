<template>
  <div class="choice">
    <input class="choice-name" :placeholder="defaultText" type="text">
    <p class="is">is</p>
    <transition-group name="adv-list">
      <input
        class="advantage"
        type="text"
        v-for="advantage of advantages"
        v-model="advantage.text"
        :key="advantage.id"
        :placeholder="advantage.placeholder"
        @keyup.enter="addEmptyAdvantage"
        @keyup="save">
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ['defaultText', 'defaultAdvantage'],
  name: 'Choice',
  data () {
    return {
      advantages: [
        {
          id: 0,
          text: '',
          placeholder: this.defaultAdvantage
        }
      ]
    }
  },
  methods: {
    addEmptyAdvantage () {
      // TODO: focus new input field
      this.advantages.push({
        id: this.advantages.length,
        text: ''
      })
    },

    save () {
      localStorage.setItem(this.defaultText, JSON.stringify(this.advantages))
    },

    reset () {
      this.advantages = [
        {
          id: 0,
          text: '',
          placeholder: this.defaultAdvantage
        }
      ]
    }

  },
  mounted () {
    this.$nextTick(() => {
      let savedData = JSON.parse(localStorage.getItem(this.defaultText))
      if (savedData != null) {
        this.advantages = savedData
      }
    })
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

.advantage {
  width: 100%;
  font-size: 1.5rem;
  border: 0;
  border-bottom: 1px dotted rgb(132, 203, 171);
  margin-bottom: 1rem;
  display: inline-block;
}

.adv-list-enter-active, .adv-list-leave-active {
  transition: all 0.15s;
}

.adv-list-enter {
  opacity: 0;
  transform: translateY(-10px);
}

</style>
