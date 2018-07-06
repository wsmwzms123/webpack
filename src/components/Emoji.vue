<template>
  <div class="emoji">
    <div v-html="emoji"></div>
    <button @click="fetchEmoji"> Lucky! </button>
    <MagicBtn/>
  </div>
</template>

<script>
import axios from 'axios'
import MagicBtn from '@/components/MagicBtn.vue'
export default {
  name: 'app',
  data () {
    return {
      emoji: ''
    }
  },
  created () {
    this.fetchEmoji()
  },
  methods: {
    fetchEmoji () {
      try {
        axios.get('https://ranmoji.herokuapp.com/emojis/api/v.1.0/')
          /* eslint-disable no-return-assign */
          .then(res => this.emoji = res.data.emoji)
      } catch (err) {
        throw new Error(err)
      }
    }
  },
  components: {
    MagicBtn
  }
}
</script>

<style scoped>
  .emoji {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: 100px;
    justify-content: center;
    text-align: center;
  }
</style>
