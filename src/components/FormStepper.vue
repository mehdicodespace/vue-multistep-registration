<script setup>
import icons from '@/assets/icons.svg'

defineProps({
  steps: { type: Array, required: true },
  activeStep: { type: Number, required: true }
})

defineEmits(['select-step'])

const stepIcons = { username: 'user', email: 'mail', review: 'review' }
</script>

<template>
  <nav aria-label="Registration steps">
    <ol class="ml-2 flex flex-col gap-10 relative text-gray-200 border-s border-gray-600">
      <li v-for="(step, index) in steps" :key="step.key" class="ms-8">
        <button
          type="button"
          class="cursor-pointer text-left rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          :aria-current="index === Math.min(activeStep, steps.length - 1) ? 'step' : undefined"
          @click="$emit('select-step', index)"
        >
          <span
            aria-hidden="true"
            class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4"
            :class="index < activeStep ? 'bg-green-400 text-green-700' : index === activeStep ? 'bg-sky-700 text-white' : 'bg-gray-700 text-white'"
          >
            <svg class="w-4 h-4">
              <use :href="`${icons}#${index < activeStep ? 'check' : stepIcons[step.key]}`" />
            </svg>
          </span>
          <span class="block font-medium leading-tight">{{ step.title }}</span>
          <span class="block text-sm">{{ step.subtitle }}</span>
        </button>
      </li>
    </ol>
  </nav>
</template>
