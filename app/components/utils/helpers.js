var axios = require("axios");

var helper = {

    listQuery : function () {
        console.log("HELP2");
        return axios.get("/list");
    },

    saveQuery : function () {

        return axios.post("/save");
    }
}

module.exports = helper;