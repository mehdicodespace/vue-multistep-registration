<template>
  <div>
    <input id="description" v-model="text" @input="checkBalance" class="w-full border p-2 rounded"/>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      message: '',
      typingTimer: null,
    }
  },
  methods: {
    isBalanced(input) {
      const stack = []
      const pairs = {')': '(', ']': '[', '}': '{'}
      for (const char of input) {
        if (['(', '[', '{'].includes(char)) {
          stack.push(char)
        } else if ([')', ']', '}'].includes(char)) {
          if (stack.length === 0 || stack.pop() !== pairs[char]) {
            return false
          }
        }
      }
      return stack.length === 0
    },
    checkBalance() {
      clearTimeout(this.typingTimer)
      this.typingTimer = setTimeout(() => {
        this.message = this.isBalanced(this.text)
            ? 'The text is balanced.'
            : 'The text is not balanced.'
      }, 100)
    }
  }
}
</script>