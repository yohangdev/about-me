<template>
  <div id="app">
    <router-view/>

    <div class="flex items-center w-full justify-around flex-wrap bg-white p-2 md:invisible" style="position: fixed; bottom: 0">
      <div class="text-center px-4 py-1">
        <router-link class="no-underline text-grey-dark" to="/">
          <i class="far fa-heart text-2xl mb-1"></i>
          <p class="text-sm">Home</p>
        </router-link>
      </div>
      <div class="text-center px-4 py-1">
        <router-link class="no-underline text-grey-dark" to="/about">
          <i class="far fa-bell text-2xl mb-1"></i>
          <p class="text-sm">Notifications</p>
        </router-link>
      </div>
      <div class="text-center px-4 py-1">
        <router-link class="no-underline text-grey-dark" to="/about">
          <i class="far fa-envelope text-2xl mb-1"></i>
          <p class="text-sm">Messages</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
  body {
    background-color: #F2F5F7;
    padding-bottom: 100px;
  }
</style>