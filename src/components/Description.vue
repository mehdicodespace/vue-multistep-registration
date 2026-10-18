<template>
  <div>
    <label for="description" class="text-gray-600 text-sm mb-2 block">Description:</label>
    <input id="description" aria-describedby="description-feedback" v-model="text" @input="checkBalance"
           class="text-gray-800 bg-white border w-full text-sm pl-4 pr-8 py-2.5 rounded-md border-gray-300 outline-blue-500"/>
    <p id="description-feedback" role="status" class="text-sm mt-2 text-sky-700">{{ message }}</p>
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
  beforeUnmount() {
    clearTimeout(this.typingTimer)
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