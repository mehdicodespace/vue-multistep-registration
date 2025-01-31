<template>
  <div>
    <div class="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto min-h-screen p-4">
      <div class="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
        <div
            class="max-md:order-1 flex flex-col py-16 justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
          <div>
            <h4 class="text-white text-lg">Create Your Account</h4>
            <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
          </div>
          <form-stepper v-model:activeStep="activeStep" :steps="steps"/>
        </div>

        <form @submit="nextStep" class="md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto">
          <div class="mb-6">
            <h3 class="text-gray-800 text-xl font-bold">Create an account</h3>
          </div>
          <div class="space-y-6">
            <div v-if="activeStep === 0">
              <label class="text-gray-600 text-sm mb-2 block">Username</label>
              <div class="relative flex items-center">
                <input name="name" type="text" v-model="user.username" required
                       class="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                       placeholder="Enter username"/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"></path>
                </svg>
              </div>
            </div>

            <div v-else-if="activeStep === 1">
              <label class="text-gray-600 text-sm mb-2 block">Email</label>
              <div class="relative flex items-center">
                <input name="email" type="email" required
                       class="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500" placeholder="Enter email"/>
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
            </div>


          </div>

          <div class="flex flex-row-reverse gap-4 mt-6">
            <button
                v-if="activeStep !== 2"
                @click="nextStep"
                type="submit"
                    class="cursor-pointer w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white bg-sky-700 hover:bg-sky-900 focus:outline-none">
              Next Step
            </button>

            <button
                v-if="activeStep === 1"
                @click="activeStep = 0"
                type="button"
                class="cursor-pointer w-full py-2.5 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
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

export default {
  components: {FormStepper},
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
      user:{
        email:'',
        username:'',
      },
      icon: 'user',
      activeStep: 0,
    }
  },
  computed: {

  },
  methods:{
    nextStep(){
      switch(this.activeStep){
        case 0:{

        }
      }
    }
  }
}
</script>

<style scoped>
</style>
