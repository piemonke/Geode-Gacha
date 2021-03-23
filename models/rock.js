const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rockSchema = new Schema({
    Name: String,
    Rarity: String,
    Image: String,
})

module.exports = mongoose.model("Rock", rockSchema);