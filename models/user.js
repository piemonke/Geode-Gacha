const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    profile: String,
    inventory: [{ type: Schema.Types.ObjectId, ref: "Rock"}],
    timer: Date,
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);