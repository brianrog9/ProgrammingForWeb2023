<script setup>
import { RouterLink } from "vue-router";
import Boardgame from "../data/boardgame.json";
import Boardcard from "../components/BoardCard.vue";
</script>

<template>
<div class="game-container">
    <Boardcard class="gamecard" v-for="(game, index) in Boardgame" :key="index" 
    :id="game.id" 
    :name="game.gameName" 
    :image="game.image"/>

</div>
</template>
<style scoped>
    .game-container {
        width: 640px;
        margin: 10px auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        font-family: Arial, Helvetica, sans-serif;
    }


</style>
