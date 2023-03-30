<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav>
  <RouterView />
</template>

<style>

  html {
      background: rgb(27, 27, 27);
  }
  nav {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 900;
      font-size: 50px;
      display: block;
      text-align: center;
      color: white;
  }
  a {
      text-decoration: none;
  }

  nav a.router-link-active {
    text-decoration: none;
    color: rgb(144, 243, 243);
  }

</style>
