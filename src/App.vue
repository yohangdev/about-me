<template>
  <div id="app">
    <router-view/>

    <div class="flex items-center w-full justify-around flex-wrap bg-white p-1 md:invisible shadow-md" style="position: fixed; bottom: 0">
      <div class="text-center px-4 py-1">
        <router-link class="no-underline text-grey-dark" to="/">
          <i class="far fa-heart text-lg mb-2"></i>
          <p class="text-xs">Home</p>
        </router-link>
      </div>
      <div class="text-center px-4 py-1">
        <router-link class="no-underline text-grey-dark" to="/notifications">
          <i class="far fa-bell text-lg mb-2"></i>
          <p class="text-xs">Notifications</p>
        </router-link>
      </div>
      <div class="text-center px-4 py-1">
        <router-link class="no-underline text-grey-dark" to="/messages">
          <i class="far fa-envelope text-lg mb-2"></i>
          <p class="text-xs">Messages</p>
        </router-link>
      </div>
      <div class="text-center px-4 py-1">
        <router-link class="no-underline text-grey-dark" to="/profile">
          <i class="far fa-user text-lg mb-2"></i>
          <p class="text-xs">Profile</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
  body {
    background-color: #F2F5F7;
    padding-bottom: 60px;
  }

  a.router-link-exact-active {
    color: config('colors.blue-dark');
  }
</style>