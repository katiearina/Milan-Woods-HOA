var axios = require("axios");

// ALL routes located in routes/routes.js

var helper = {

    listQuery : function () {

        return axios.get("/list");
    },

    saveQuery : function (inputData) {

        return axios.post("/save", inputData);
    },

    weatherQuery : function() {

        return axios.get("/getWeather");
    },

    twitterQuery : function () {
        return axios.get('/getTwitter');
    }
}

module.exports = helper;