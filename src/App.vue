<template>
  <div id="app">
    <div class="bg-blue-darker">
      <div class="container mx-auto px-4">
        <div
          class="relative bg-white mx-auto max-w-sm shadow-md rounded-lg overflow-hidden"
          style="top: 50px"
        >
          <div class="sm:flex sm:items-center px-6 py-4">
            <img
              class="block h-24 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
              src="https://avatars3.githubusercontent.com/u/618412?s=460&v=4"
              alt
            >
            <div class="text-center sm:text-left sm:flex-grow">
              <div class="mb-5">
                <p class="text-xl leading-normal">Yoga Hanggara</p>
                <p
                  class="text-sm leading-normal text-grey-dark"
                >Backend Engineer at Jabar Digital Service<br />Certified Scrum Master (ISM I)</p>
              </div>
              
              <div class="mb-2">
                <a href="#" class="bg-grey-light hover:bg-grey py-2 px-4 text-grey-darker text-sm no-underline rounded-full">
                  <i class="fas fa-envelope"></i> Contact me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <router-view/>
  </div>
</template>