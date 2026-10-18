<template>
  <div>
    <div class="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto min-h-screen p-4">
      <div class="grid w-full min-w-0 md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div
            class="max-md:order-1 flex flex-col py-16 justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
          <div>
            <h2 class="text-white text-lg">Create Your Account</h2>
            <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
          </div>
          <FormStepper :active-step="activeStep" :steps="steps" @select-step="goToStep"/>
        </div>

        <form novalidate @submit.prevent="nextStep"
              class="md:col-span-2 min-w-0 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto">
          <div class="mb-6">
            <h1 v-if="activeStep <= 2" class="text-gray-800 text-xl font-bold">{{ activeStep === 2 ? 'Review your information' : 'Create an account' }}</h1>
            <h1 v-else class="text-gray-800 text-xl font-bold">Description checker</h1>
          </div>
          <div class="space-y-6">
            <div v-if="activeStep === 0">
              <label for="username" class="text-gray-600 text-sm mb-2 block">
                Username:
              </label>
              <div class="relative flex items-center">
                <input
                    id="username"
                    name="username" type="text" autocomplete="username" :aria-invalid="errors.username" :aria-describedby="errors.username ? 'username-error' : undefined" v-model="user.username" @input="validateUsername"
                    class="text-gray-800 bg-white border w-full text-sm pl-4 pr-8 py-2.5 rounded-md"
                    :class="errors.username ? 'border-red-500 outline-red-500' : 'border-gray-300 outline-blue-500'"
                    placeholder="Enter username"/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"></path>
                </svg>
              </div>
              <p id="username-error" role="alert" v-if="errors.username" class="text-red-500 text-sm mt-1">Invalid Username.</p>

            </div>

            <div v-else-if="activeStep === 1">
              <label for="email" class="text-gray-600 text-sm mb-2 block">Email:</label>
              <div class="relative flex items-center">
                <input
                    id="email"
                    name="email" type="email" autocomplete="email" :aria-invalid="errors.email" :aria-describedby="errors.email ? 'email-error' : undefined" v-model="user.email" @input="validateEmail"
                    class="text-gray-800 bg-white border w-full text-sm pl-4 pr-8 py-2.5 rounded-md"
                    :class="errors.email ? 'border-red-500 outline-red-500' : 'border-gray-300 outline-blue-500'"
                    placeholder="Enter email"/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" stroke-miterlimit="10" stroke-width="40"
                          d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                          data-original="#000000"></path>
                    <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"></path>
                  </g>
                </svg>
              </div>
              <p id="email-error" role="alert" v-if="errors.email" class="text-red-500 text-sm mt-1">Invalid email address.</p>
            </div>

            <div v-else-if="activeStep === 2" class="flex min-w-0 flex-col gap-2 text-base [overflow-wrap:anywhere]">
              <p><span class="font-semibold">Step:</span> review</p>
              <p><span class="font-semibold">Username:</span> {{ user.username }}</p>
              <p><span class="font-semibold">Email:</span> {{ user.email }}</p>
            </div>

            <Description v-else/>
          </div>

          <div class="flex flex-col gap-3 mt-6 sm:flex-row-reverse sm:gap-4">
            <button
                v-show="activeStep < 2"
                :disabled="!nextButtonEnable"
                id="btn-next"
                type="submit"
                class="min-h-11 w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                :class="!nextButtonEnable ? 'cursor-default bg-gray-300' : 'cursor-pointer bg-sky-700 hover:bg-sky-900'"
            >
              Next Step
            </button>

            <button
                v-show="activeStep === 2"
                type="submit"
                class="cursor-pointer bg-sky-700 hover:bg-sky-900 min-h-11 w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Check Description
            </button>

            <button
                v-show="activeStep > 0"
                :disabled="activeStep === 0"
                @click="--activeStep"
                id="btn-prev"
                type="button"
                class="min-h-11 w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                :class="activeStep === 0 ? 'cursor-default bg-gray-300' : 'cursor-pointer bg-gray-700 hover:bg-gray-800'"
            >
              Prev Step
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import FormStepper from "@/components/FormStepper.vue";
import Description from "@/components/Description.vue";

export default {
  components: {FormStepper, Description},
  data() {
    return {
      steps: [
        {
          title: 'Personal Info',
          subtitle: 'Username',
          key: 'username'
        },
        {
          title: 'Account Info',
          subtitle: 'Email',
          key: 'email',
        },
        {
          title: 'Review',
          subtitle: 'Review submitted details',
          key: 'review'
        }
      ],
      user: {
        email: '',
        username: '',
      },
      errors: {
        username: false,
        email: false
      },
      activeStep: 0,
    }
  },
  computed: {
    nextButtonEnable() {
      return this.activeStep < 2
    }
  },
  methods: {
    goToStep(step) {
      if (!Number.isInteger(step) || step < 0 || step > 2) return
      if (step > this.activeStep) {
        this.validateUsername()
        if (this.errors.username) {
          this.activeStep = 0
          return
        }
        if (step > 1) {
          this.validateEmail()
          if (this.errors.email) {
            this.activeStep = 1
            return
          }
        }
      }
      this.activeStep = step
    },
    nextStep() {
      switch (this.activeStep) {
        case 0: {
          this.validateUsername()
          if (this.errors.username) return
          ++this.activeStep;
          break;
        }
        case 1: {
          this.validateEmail()
          if (this.errors.email) return
          ++this.activeStep;
          break;
        }
        case 2: {
          ++this.activeStep;
          break;
        }
      }
    },
    validateUsername() {
      const username = this.user.username;
      const usernameRegex = /^[a-zA-Z0-9_]+$/
      this.errors.username = !username || !usernameRegex.test(username) || username.length < 4 || username.length > 30
    },
    validateEmail() {
      const email = this.user.email
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      this.errors.email = !emailRegex.test(email)
    }
  }
}
</script>
