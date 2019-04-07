<template>
  <div class="home">
    <div class="container mx-auto mt-24 px-4 mb-4">
      
      <div class="mx-auto max-w-sm mb-8">
        <div class="flex">

          <div class="flex-1 text-center">
            <a href="https://linkedin.com/in/yoga-hanggara" target="_blank" class="no-underline text-grey-darker hover:text-grey-darkest text-4xl">
              <i class="fab fa-linkedin"></i>
            </a>
            <div class="text-grey-darker text-sm mt-1">
              LinkedIn
            </div>
          </div>

          <div class="flex-1 text-center">
            <a href="https://medium.com/@yohang88" target="_blank" class="no-underline text-grey-darker hover:text-grey-darkest text-4xl">
              <i class="fab fa-medium"></i>
            </a>
            <div class="text-grey-darker text-sm mt-1">
              Medium
            </div>
          </div>

          <div class="flex-1 text-center">
            <a href="https://github.com/yohang88" target="_blank" class="no-underline text-grey-darker hover:text-grey-darkest text-4xl">
              <i class="fab fa-github"></i>
            </a>
            <div class="text-grey-darker text-sm mt-1">
              Github
            </div>
          </div>

          <div class="flex-1 text-center">
            <a href="https://facebook.com/yohang" target="_blank" class="no-underline text-grey-darker hover:text-grey-darkest text-4xl">
              <i class="fab fa-facebook"></i>
            </a>
            <div class="text-grey-darker text-sm mt-1">
              Facebook
            </div>
          </div>

          <div class="flex-1 text-center">
            <a href="https://facebook.com/yohang" target="_blank" class="no-underline text-grey-darker hover:text-grey-darkest text-4xl">
              <i class="fab fa-twitter"></i>
            </a>
            <div class="text-grey-darker text-sm mt-1">
              Twitter
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap -mx-2">
        
        <div class="w-full sm:w-1/2 lg:w-1/4 px-2 mb-6">
          <div class="max-w rounded overflow-hidden shadow-md">
            <div class="bg-blue-dark px-6 pt-10 pb-4 text-white text-base">
              
              <div class="text-center mb-4" style="font-size: 4rem">
                <router-link to="/skills" class="no-underline text-blue-light">
                  <i class="fas fa-rocket"></i>
                </router-link>
              </div>

              <router-link to="/skills" class="no-underline text-white">Skills</router-link>
            </div>
            <div class="px-6 py-4">
              <p class="text-grey-darker text-sm leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/4 px-2 mb-6">
          <div class="max-w rounded overflow-hidden shadow-md">
            <div class="bg-indigo-dark px-6 pt-10 pb-4 text-white text-base">
              
              <div class="text-center mb-4" style="font-size: 4rem">
                <router-link to="/experiences" class="no-underline text-indigo-light">
                  <i class="fas fa-tasks"></i>
                </router-link>
              </div>

              <router-link to="/experiences" class="no-underline text-white">Experiences</router-link>
            </div>
            <div class="px-6 py-4">
              <p class="text-grey-darker text-sm leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/4 px-2 mb-6">
          <div class="max-w rounded overflow-hidden shadow-md">
            <div class="bg-teal-dark px-6 pt-10 pb-4 text-white text-base">
              
              <div class="text-center mb-4" style="font-size: 4rem">
                <router-link to="/achievements" class="no-underline text-teal-light">
                  <i class="fas fa-university"></i>
                </router-link>
              </div>

              <router-link to="/achievements" class="no-underline text-white">Achievements</router-link>
            </div>
            <div class="px-6 py-4">
              <p class="text-grey-darker text-sm leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/4 px-2 mb-6">
          <div class="max-w rounded overflow-hidden shadow-md">
            <div class="bg-orange-dark px-6 pt-10 pb-4 text-white text-base">
              
              <div class="text-center mb-4" style="font-size: 4rem">
                <router-link to="/extras" class="no-underline text-orange-light">
                  <i class="fas fa-spa"></i>
                </router-link>
              </div>

              <router-link to="/extras" class="no-underline text-white">Extras</router-link>
            </div>       
            <div class="px-6 py-4">
              <p class="text-grey-darker text-sm leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
