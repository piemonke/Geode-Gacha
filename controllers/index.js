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
    res.render("index/index");
}

//render new user page
function signUp(req, res) {
    res.render("index/signup");
}

//render login page
function signIn(req, res) {
    res.render("index/signin");
}

//add new user to database
function newUser(req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_ROUNDS));
    User.create(req.body, function(err, newUser) {
        console.log(newUser);
        res.redirect("/signin");
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