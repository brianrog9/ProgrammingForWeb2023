<script setup>
import { RouterLink } from "vue-router";
defineProps(["id", "name", "image"]);
</script>

<template>
    <div class="game-card">
        <img class="game-image" :src="image" :alt="name" />
        <div class="footer">
            <RouterLink :to="'/game/'+id">{{ name }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.game-card {
    max-width: 300px;
    border: 1px solid black;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
}
.footer {
    border-top: 1px solid black;
    padding-top: 10px;
    text-align: center;
}

img {
    max-width: 290px;
    padding: 10px;
}
</style>