<script setup>
import {RouterLink} from "vue-router";
import MusicList from "../data/music-list.json";

</script>

<template>
    <div class="song-container">
        <div class="song-list-item" v-for="(song, index) in MusicList" :key="index">
            <RouterLink :to="'/song/' + song.slug">{{ song.title }}</RouterLink>
        </div>
    </div>

</template>

<style>
 .song-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        font-family: Arial, Helvetica, sans-serif;
    }
    .song-list-item {
        width: auto;
        padding: 20px;
        margin: 20px;
        border: 3px solid black;
        border-radius: 4px;
        background: orange;
    }
    .song-list-item:hover {
        background: rgb(144, 243, 243);
    }
    .song-list-item a {
        color: rgb(0, 0, 0);
        text-decoration: none;
        font-weight: bold;
    }
    .song-list-item:hover a {
        color: orange;
    }
</style>