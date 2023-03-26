<script setup>
import { reactive } from 'vue';
import ItemRow from "./components/ItemRow.vue";
  const boardgames = [
              {
                gameName: "Gloomhaven",
                image: "img/gloomhaven.jpg",
                releaseDate: "2017",
                players: "1 - 4",
                description: "Vanquish monsters with strategic cardplay. Fulfill your quest to leave your legacy",
                id: 1
            },
            {
                gameName: "Pandemic",
                image: "img/pandemic.jpg",
                releaseDate: "2008",
                players: "1-4",
                description: "Your team of experts must prevent the world from succumbing to a viral pandemic.",
                id: 2
            },
            {
                gameName: "Root",
                image: "img/root.jpg",
                releaseDate: "2018",
                players: "2-4",
                description: "Decide the fate of the forest as woodland factions fight for contrasting goals.",
                id: 3
            },
            {
                gameName: "Spirit Island",
                image: "img/spiritisland.png",
                releaseDate: "2017",
                players: "1-4",
                description: "Island Spirits join forces using elemental powers to defend their home from invaders.",
                id: 4
            },
            {
                gameName: "Too Many Bones",
                image: "img/toomanybones.jpg",
                releaseDate: "2017",
                players: "1-4",
                description: "Toss gobs of unique dice in an epic adventure en route to a final boss showdown.",
                id: 5
            }
  ];
  const newConsoleObj = {
     image: "",
     gameName: "",
     players: "",
     releaseDate: "", 
     description: ""
  }
  const state = reactive({boardgames, newConsoleObj});
  function addNewBoardgame() {
    state.boardgames.push({
      image: state.newConsoleObj.image,
      gameName: state.newConsoleObj.gameName,
      players: state.newConsoleObj.players,
      releaseDate: state.newConsoleObj.releaseDate,
      description: state.newConsoleObj.description,
      id: state.boardgames.length + 1,
    });
    state.newConsoleObj.image = "";
    state.newConsoleObj.gameName = "";
    state.newConsoleObj.players = "";
    state.newConsoleObj.releaseDate = "";
    state.newConsoleObj.description = "";
  }
  function handleDelete(itemToDelete) {
    state.boardgames = state.boardgames.filter ((itemToCheck) => {
      return itemToCheck !== itemToDelete;
    });
  }
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
            <ItemRow v-for="(boardgame, index) in state.boardgames" v-bind:key="index" v-bind:item="boardgame" v-bind:index="index" v-on:delete-item="handleDelete"/>
        </tbody>
      </table>
      <form v-on:submit.prevent="addNewBoardgame">
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

h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size:44px;
    color:#314044;
}

table {
    min-width: 600px;
    border-collapse: collapse;
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
