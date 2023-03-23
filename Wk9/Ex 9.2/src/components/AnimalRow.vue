<script setup>
    const props = defineProps(["camelid"]);
</script>

<template>
 <div>
    <h5>{{props.camelid.commonName}}</h5>
    <h4>{{ props.camelid.binomialName }}</h4>
    <img v-bind:src="props.camelid.image" v-bind:alt="props.camelid.commonName"/>
    <p>{{ props.camelid.order }}</p>
    <p>{{ props.camelid.family }}</p>
    <p>{{ props.camelid.genus }}</p>
    <p>{{ props.camelid.species }}</p>
 </div>
</template>

<style scoped>
    img {
    min-width: 300px;
    max-width: 300px;
    padding-top: 20px;
    }

    h5{
    font-size: 30px;
    color:rgb(52, 236, 107);
    padding-top: 100px;
    }

    h4 {
        font-size:12px;
    }

</style>