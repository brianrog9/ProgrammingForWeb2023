<script setup>
    const props = defineProps (["item", "index"]);
</script>

<template>
<tr class="activerow" v-bind:class="{activeRow: true, odd: index % 2 !== 1, owned: item.description}">
    <td><img v-bind:title="item.gameName" v-bind:src="item.image" v-bind:alt="item.releaseDate + ' ' + item.players"></td>
    <td>{{item.gameName}}</td>
    <td>{{item.players}}</td>
    <td>{{item.releaseDate}}</td>
    <td>{{item.description}}</td>
    <td>
        <div class="cell actions">
        <button type="button" v-on:click="$emit('deleteItem', item)">Delete</button>
        </div>
    </td>
 </tr>
</template>

<style scoped>
.odd {
    background: #8198b9;
}


img {
    max-width: 400px;
    padding: 10px;
}


td {
    text-align: center;
    font-size: 25px;
    padding: 0px 80px 0px 80px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}


label {
    padding:0px 30px 0px 30px;
}

label {
    text-align: center;
}

button {
    background-color: #314044;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border: none;
    color: white;
    padding: 15px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    cursor:pointer;
  }


  .submitButton{
    margin-left: 95px;
  }
</style>