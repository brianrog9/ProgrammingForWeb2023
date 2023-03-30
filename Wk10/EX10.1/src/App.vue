<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/alpaca">Alpaca</RouterLink> |
    <RouterLink to="/llama">Llama</RouterLink>
  </nav>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style>
  html {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    background:#313131;
  }
  body, #app {
    margin: 0;
  }
  nav {
    width: 100%;
    height: 45px;
    text-align: center;
  }
  nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
    color: antiquewhite;
    font-weight: 900;
    font-size: 20px;
    line-height: 5;
    text-decoration: none;
  }
  nav a.router-link-active {
    text-decoration: underline;
    color: orange;
  }
  .container {
    max-width: 1200px; 
    width: 100%; 
    margin: 0 auto;
  }
  .container img {
    display: block;
    max-width: 1000px;
    width: 100%;
    margin: 20px auto 20px;
  }
  .container h1 {
    margin-top: 150px;
    text-align: center;
    font-size: 30px;
    color: orange;
  }
  .container p {
    width: 1000px;
    margin:auto;
    color:antiquewhite;
    line-height: 1.4;
  }

  .container h3 {
    margin-top: 30px;
    font-size: 20px;
    color: orange;
    margin-left:100px;
  }

</style>
