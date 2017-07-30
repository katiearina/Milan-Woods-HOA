var axios = require("axios");

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