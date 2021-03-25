const User = require("../models/user");
const Rock = require("../models/rock");

module.exports = {
    profile,
    gacha,
    delete: removeRock,
    update,
}

//render profile page
function profile(req, res) {
    User.findById(req.params.id).populate("inventory").exec(function(err, user){
        res.render("rocks/profile", {
            title: `${user.username}'s Geode Collection`,
            user,
        });
    });
}

//render gacha page and add rock to inventory
function gacha(req, res) {
    //Perform gacha "roll"
    
    Rock.find({}, function(err, rocks) {
        //Math.rand
        // let x = Math.random();

        //select rock based off number roll from database
        rock = rocks[0];
        //get user to add rock too
        User.findById(req.params.id, function(err, user){
            //add rock to users inventory
            user.inventory.push(rock._id);

            //set timer in users inventory to

            //render page showing what they got
            //maybe change to animation later
            user.save(function(err){
                res.render("rocks/gacha", {
                    title: `${rock.name}`,
                    rock,
                    user: req.params.id,
                });
            });
        });
    });
    
}


//remove rock from users inventory
//redirect back to users profile
function removeRock(req, res) {
    User.findById(req.params.id, function(err, user){
        user.inventory.splice(req.params.num, 1);
        user.save(function(err){
            res.redirect(`/rocks/${req.params.id}`);
        });
    });
}

//update users profile description
//redirect back to users profile
function update(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
        user.save(function(err){
            res.redirect(`/rocks/${req.params.id}`);            
        });
    });
}

//general function for testing users authentication
//return true if user is owner of profile
//return false if user is viewing somebody else's profile
function userAuth()