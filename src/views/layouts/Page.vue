<template>
  <div>
    <div class="bg-blue-darker">
      <div class="container mx-auto px-4">
        <div
          class="relative bg-white mx-auto max-w-sm shadow-md rounded-lg overflow-hidden"
          style="top: 20px"
        >
          <div class="flex px-6 py-4">
            <img
              class="block h-10 rounded-full mx-auto mr-4"
              src="https://avatars3.githubusercontent.com/u/618412?s=460&v=4"
              alt
            >
            <div class="text-left flex-grow">
              <p class="text-sm leading-normal">Yoga Hanggara</p>
              <p class="text-sm text-grey-darker">Backend Engineer</p>
            </div>

            <div class="text-right flex-grow py-3">
              <a href="#" class="bg-grey-light hover:bg-grey p-2 text-grey-darker text-sm no-underline rounded-full">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto mt-8 px-4 mb-4">
      <div class="bg-white mx-auto max-w-sm shadow-md rounded-lg py-3 overflow-hidden mb-8">
        <router-link
          to="/"
          class="no-underline text-sm text-grey-darker px-4 py-2"
        ><i class="fas fa-home"></i> Home</router-link>
      </div>
    </div>

    <slot></slot>
  </div>
</template>
