const {createApp} = Vue;

createApp({
    data() {
        return {
            newConsoleObj: {
                image: "",
                gameName: "",
                players: "",
                releaseDate: "", 
                description: ""
            },

            boardgames: [
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
       ]
        
    }
},
methods: {
    submitHandler () {
        console.log("submitted");
        this.boardgames = this.boardgames.concat(this.newConsoleObj);
        this.resetForm();
    },
    resetForm () {
        this.newConsoleObj = {
            image: "",
            gameName: "",
            players: "",
            releaseDate: "", 
            description: ""
        }

    },
    deleteItem (item) {
        this.boardgames = this.boardgames.filter(boardgame => {return boardgame !== item;
        });
    }

}
}).mount("#myCollectionApp");