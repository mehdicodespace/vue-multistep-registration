<script>
export default {
  name: "FormStepper",
  props: {
    steps: {
      type: Array,
    },
    activeStep: {
      type: Number,
      required: true
    }
  },
  emits: ['update:active-step'],
}
</script>
<!--@click="$emit('update:active-step',++activeStep)"-->
<template>
  <ol
      class="ml-2 flex flex-col gap-10 relative text-gray-200 border-s border-gray-600">
    <li
        v-for="(step,index) in steps"
        class="cursor-pointer ms-8"
        @click="$emit('update:active-step',index)"
    >
        <span
            class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4"
            :class="[
                index > activeStep && 'bg-gray-700 text-white',
                index === activeStep && 'bg-sky-700 text-white',
                index < activeStep && 'bg-green-400 text-green-700'
            ]"
        >
            <svg v-if="step.key === 'username' && index >= activeStep" class="w-3.5 h-3.5">
              <use href="@/assets/icons.svg#user"></use>
            </svg>
            <svg v-if="step.key === 'email' && index >= activeStep" class="w-4.5 h-4.5">
              <use href="@/assets/icons.svg#mail"></use>
            </svg>
            <svg v-if="step.key === 'review' && index >= activeStep" class="w-3.5 h-3.5">
              <use href="@/assets/icons.svg#review"></use>
            </svg>

            <svg v-if="index < activeStep" class="w-3.5 h-3.5">
              <use href="@/assets/icons.svg#check"></use>
            </svg>
        </span>
      <h3 class="font-medium leading-tight">{{ step.title }}</h3>
      <p class="text-sm">{{ step.subtitle }}</p>
    </li>
  </ol>
</template>

<style scoped lang="scss">

</style>