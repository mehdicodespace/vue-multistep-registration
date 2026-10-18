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
    <ol class="flex md:flex-col md:gap-10 relative md:ml-2 md:border-s md:border-gray-600">
      <li v-for="(step, index) in steps" :key="step.key" class="relative flex-1 min-w-0 md:ms-8">
        <span
          v-if="index < steps.length - 1"
          aria-hidden="true"
          class="absolute top-4 left-1/2 h-0.5 w-full md:hidden"
          :class="index < activeStep ? 'bg-sky-600' : 'bg-gray-200'"
        />
        <button
          type="button"
          class="relative flex min-h-11 w-full cursor-pointer flex-col items-center gap-2 rounded-sm text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 md:block md:text-left md:focus-visible:outline-white"
          :aria-current="index === Math.min(activeStep, steps.length - 1) ? 'step' : undefined"
          @click="$emit('select-step', index)"
        >
          <span
            aria-hidden="true"
            class="relative flex items-center justify-center w-8 h-8 rounded-full md:absolute md:-start-12"
            :class="index < activeStep ? 'bg-sky-700 text-white md:bg-green-400 md:text-green-700' : index === activeStep ? 'bg-sky-700 text-white ring-4 ring-sky-50 md:ring-0' : 'bg-gray-100 text-gray-500 md:bg-gray-700 md:text-white'"
          >
            <svg v-if="index < activeStep" class="w-4 h-4"><use :href="`${icons}#check`" /></svg>
            <span v-else class="text-xs font-semibold md:hidden">{{ index + 1 }}</span>
            <svg v-if="index >= activeStep" class="hidden md:block w-4 h-4"><use :href="`${icons}#${stepIcons[step.key]}`" /></svg>
          </span>
          <span class="text-xs font-medium leading-tight md:hidden" :class="index <= activeStep ? 'text-sky-800' : 'text-gray-500'">{{ step.key === 'username' ? 'Username' : step.key === 'email' ? 'Email' : 'Review' }}</span>
          <span class="hidden md:block font-medium leading-tight text-gray-200">{{ step.title }}</span>
          <span class="hidden md:block text-sm text-gray-200">{{ step.subtitle }}</span>
        </button>
      </li>
    </ol>
  </nav>
</template>
