var axios = require("axios");

var helper = {

    listQuery : function () {
        console.log("HELP2");
        return axios.get("/list");
    },

    saveQuery : function (inputData) {
        console.log("HELP3");
        console.log(inputData)
        return axios.post("/save", inputData);
    }
}

module.exports = helper;