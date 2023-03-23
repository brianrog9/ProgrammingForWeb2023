<script setup>
import AnimalRow from './components/AnimalRow.vue';
 const camelids = [
      {
        commonName: "Llama",
        binomialName: "Lama glama",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Lama",
        species: "L. glama",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg",
        id: 0
        },
      {
        commonName: "Alpaca",
        binomialName: "Vicugna pacos",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Vicugna",
        species: "V. pacos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg",
        id: 1
      },
    ]
</script>

<template>
<!--html--> 
 <h1>Camelids</h1>
 <AnimalRow v-for="camelid in camelids" v-bind:key="camelid.id" v-bind:camelid="camelid" />
</template>

<style>
 h1 {
    font-size: 36px;
    color:aliceblue;
    }
</style>
