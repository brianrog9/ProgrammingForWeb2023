let gamelist = [{title: "Pandemic", type: "Boardgame", rating: "5", numberOfplayers: "2-4", description: "Co-op boardgame racing to cure a worldwide pandemic"},
                {title: "Pokemon", type: "Video Game", rating: "3", numberOfplayers: "1", description: "Catch 'em all"},
                {title: "Clue", type: "Boardgame", rating: "4", numberOfplayers: "2-4", description: "Find out who the murderer is"}
                ];
console.log(gamelist);

let numberentry = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about that game!");
console.log("You picked game " + numberentry);

if (numberentry ==="1"){
    window.alert("You picked " + gamelist[0].title + " which is a " + gamelist[0].type + " for " + gamelist[0].numberOfplayers + " rated " + gamelist[0].rating + " out of 5 " + gamelist[0].description)
};

if (numberentry ==="2"){
    window.alert("You picked " + gamelist[1].title + " which is a " + gamelist[1].type + " for " + gamelist[1].numberOfplayers + " rated " + gamelist[1].rating + " out of 5 " + gamelist[1].description)
};

if (numberentry ==="3"){
    window.alert("You picked " + gamelist[2].title + " which is a " + gamelist[2].type + " for " + gamelist[2].numberOfplayers + " rated " + gamelist[2].rating + " out of 5 " + gamelist[2].description)
};