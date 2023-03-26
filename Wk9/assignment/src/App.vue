<script setup>
import { reactive } from 'vue';
  const boardgames = [
              {
                gameName: "Gloomhaven",
                image: "img/gloomhaven.jpg",
                releaseDate: "2017",
                players: "1 - 4",
                description: "Vanquish monsters with strategic cardplay. Fulfill your quest to leave your legacy"
            },
            {
                gameName: "Pandemic",
                image: "img/pandemic.jpg",
                releaseDate: "2008",
                players: "1-4",
                description: "Your team of experts must prevent the world from succumbing to a viral pandemic."
            },
            {
                gameName: "Root",
                image: "img/root.jpg",
                releaseDate: "2018",
                players: "2-4",
                description: "Decide the fate of the forest as woodland factions fight for contrasting goals."
            },
            {
                gameName: "Spirit Island",
                image: "img/spiritisland.png",
                releaseDate: "2017",
                players: "1-4",
                description: "Island Spirits join forces using elemental powers to defend their home from invaders."
            },
            {
                gameName: "Too Many Bones",
                image: "img/toomanybones.jpg",
                releaseDate: "2017",
                players: "1-4",
                description: "Toss gobs of unique dice in an epic adventure en route to a final boss showdown."
            }
  ];
  const newConsoleObj = {
     image: "",
     gameName: "",
      players: "",
      releaseDate: "", 
      description: ""
      }
  const state = reactive({boardgames, newConsoleObj})
</script>

<template>
 <div class="collection-wrapper">
  <h1>Boardgame Collection</h1>
  <table>
        <thead>
          <th></th>
          <th>Name</th>
          <th>Released</th>
          <th>Players</th>
          <th>Quick View</th>
          <th class="cell actions">actions</th>
        </thead>
        <tbody>
          <tr class="active-row" v-for="(boardgame, idx) in state.boardgames" v-bind:key="idx" v-bind:class="{even: idx % 2 !== 1}">
            <td><img v-bind:title="boardgame.gameName" v-bind:src="boardgame.image" v-bind:alt="boardgame.releaseDate + ' ' + boardgame.players"></td>
            <td>{{boardgame.gameName}}</td>
            <td>{{boardgame.players}}</td>
            <td>{{boardgame.releaseDate}}</td>
            <td>{{boardgame.description}}</td>
            <td><div class="cell actions">
              <button type="button" v-on:click="deleteItem(boardgame)">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <form v-on:submit.prevent="submitHandler">
        <fieldset>
            <!--Adds a boardgame -->
            <legend>Add a boardgame</legend>
            <div>
                <label for="image">Image</label>                        
                <input id="image" type="text" v-model="newConsoleObj.image">
            </div>
            <div>
                <label for="gameName">Game Name</label>                        
                <input id="gameName" type="text" v-model="newConsoleObj.gameName">
            </div>
            <div>
                <label for="players">Number of Players</label>                        
                <input id="players" type="text" v-model="newConsoleObj.players">
            </div>
            <div>
                <label for="releaseDate">Release Date</label>                        
                <input id="releaseDate" type="text" v-model="newConsoleObj.releaseDate">
            </div>
            <div>
                <label for="description">Description</label>                        
                <input id="description" type="text" v-model="newConsoleObj.description">
            </div>
            <button class="submitButton" type="submit">submit</button>
        </fieldset>
    </form>
 </div>
</template>

<style scoped>
html {
    background-color: #aac5f2;
}

.even {
    background: #8198b9;
}

h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size:44px;
    color:#314044;
}

img {
    max-width: 400px;
    padding: 10px;
}

table {
    min-width: 600px;
    border-collapse: collapse;
}

td {
    text-align: center;
    font-size: 25px;
    padding: 0px 80px 0px 80px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

th {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 24px;
    color:#314044;
}

form, fieldset{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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
