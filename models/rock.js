const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rockSchema = new Schema({
    name: String,
    rarity: String,
    image: String,
})

module.exports = mongoose.model("Rock", rockSchema);