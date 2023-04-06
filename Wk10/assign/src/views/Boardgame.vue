<script setup>
import { useRoute, RouterLink } from 'vue-router';
import boardgame from "../data/boardgame.json";
const route = useRoute();
console.log(route.params);
const game = boardgame.find((game) => {
    return game.id === route.params.id;
});
</script>
<template>
    <div class="game-detail">
        <h1>{{ game.gameName }}</h1>
        <img 
        :src="game.image" 
        :alt="game.gameName" 
        class="game-image" />
        <div>
            <p>{{game.gameName}}</p>
        </div>
        <div>
            <h3>Players</h3>
            <p>{{game.players}}</p>
        </div>
        <div>
            <h3>Release Date</h3>
            <p>{{game.releaseDate}}</p>
        </div>
        <div>
            <h3>Description</h3>
            <p>{{game.description}}</p>
        </div>  
    </div>
</template>
<style scoped>
.game-detail {
    font-family: Arial, Helvetica, sans-serif;
    width: 600px;
    margin: 0 auto;
    text-align: center;
}

img {
  max-width: 500px;
}
</style>