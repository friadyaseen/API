const mongoose = require("mongoose");
const Qschema = new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    choices:{
        type: Array,
        required: true,
    },
});  

module.exports = mongoose.model("Q", Qschema);