const User = require("../models/user");

module.exports = {
    profile,
    gacha,
    new: addRock,
    delete: removeRock,
}

//render profile page
function profile(req, res) {
    User.findById(req.params.id, function(err, user) {
        res.render("rocks/profile", {
            user,
        });
    })

}

//render gacha page
function gacha(req, res) {
    res.render("rocks/gacha");
}

//take rock from gacha page and add to users inventory in database
//redirect back to user profile
function addRock(req, res) {

}

//remove rock from users inventory
//redirect back to users profile
function removeRock(req, res) {
    
}