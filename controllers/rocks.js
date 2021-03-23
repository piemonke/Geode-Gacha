module.exports = {
    profile,
    gacha,
    new: addRock,
    delete: removeRock,
}

//render profile page
function profile(req, res) {
    res.render("rocks/profile");
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