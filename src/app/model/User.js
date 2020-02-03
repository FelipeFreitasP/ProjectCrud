const {Schema, model} = require("mongoose");

const schemaUser = new Schema({
    name: String,
    email: String,
    age: Number
});

module.exports = model("User", schemaUser);




