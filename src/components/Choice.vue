<template>
  <div class="choice">
    <input
      class="choice-name"
      :placeholder="defaultText"
      v-model="text"
      type="text"
      @keyup="save">
    <p class="is">is</p>
    <transition-group name="adv-list">
      <input
        v-focus
        class="advantage"
        type="text"
        v-for="advantage of advantages"
        v-model="advantage.text"
        :ref="'a' + advantage.id"
        :key="advantage.id"
        :placeholder="advantage.placeholder"
        @keyup.enter="addEmptyAdvantage(advantage)"
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
      text: '',
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
    addEmptyAdvantage (actual) {
      if (actual.id === this.advantages.length - 1) {
        if (actual.text !== '') {
          this.advantages.push({
            id: this.advantages.length,
            text: ''
          })
        }
      } else {
        this.$refs['a' + (actual.id + 1)][0].focus()
      }
    },

    save () {
      localStorage.setItem(this.defaultText, JSON.stringify({
        text: this.text,
        advantages: this.advantages
      }))
      this.$parent.$emit('edited')
    },

    reset () {
      this.advantages = [
        {
          id: 0,
          text: '',
          placeholder: this.defaultAdvantage
        }
      ]
      this.text = ''
      this.save()
    },

    isEmpty () {
      return this.advantages.every((item) => item.text === '') &&
        this.text === ''
    }

  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      let savedData = JSON.parse(localStorage.getItem(this.defaultText))
      if (savedData != null) {
        this.advantages = savedData.advantages
        this.text = savedData.text
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
