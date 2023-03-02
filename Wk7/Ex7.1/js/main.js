const {createApp} = Vue;

createApp({
    data() {
        return {
            llamalink: "https://en.wikipedia.org/wiki/Llama",
            alpacalink: "https://en.wikipedia.org/wiki/Alpaca",
            headStyle: {
                fontSize: "60px",
                fontWeight: "800" 
            },
        }
    }
}).mount("#myApp");