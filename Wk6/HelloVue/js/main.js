const {createApp} = Vue;

createApp({
    data() {
        return {
            name: "Brian",
            happy: true
        }
    }
}).mount("#myApp");