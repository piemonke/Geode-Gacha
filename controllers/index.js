const User = require("../models/user");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

module.exports = {
    index,
    signUp,
    signIn,
    new: newUser,
    login,
}


//render "home" page
function index(req, res) {
    res.render("index/index", {
        title: "Geode Gacha",
    });
}

//render new user page
function signUp(req, res) {
    res.render("index/signup", {
        title: "",
    });
}

//render login page
function signIn(req, res) {
    res.render("index/signin", {
        title: "",
    });
}

//add new user to database
//create session and redirect to their profile
function newUser(req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_ROUNDS));
    req.body.profile = "Tell others a bit about yourself";
    User.create(req.body, function(err, newUser) {
        console.log(newUser);
        res.redirect(`/rocks/${newUser._id}`);
    });
}


function login(req, res) {
    User.findOne({
        username: req.body.username
    }, function(err, foundUser) {
        if (foundUser === null) {
            res.redirect("/signin");
        } else {
            const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
            if(doesPasswordMatch) {
                req.session.userId = foundUser._id;
                console.log(req.session);
                res.redirect(`/rocks/${foundUser._id}`);
            } else {
                res.redirect("/signin");
            }
        }
    });
}