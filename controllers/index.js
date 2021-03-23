module.exports = {
    index,
    signUp,
    signIn,
    new: newUser,
}

//render "home" page
function index(req, res) {
    res.render("index/index");
}

//render new user page
function signUp(req, res) {

}

//render login page
function signIn(req, res) {

}

//add new user to database
function newUser(req, res) {

}
