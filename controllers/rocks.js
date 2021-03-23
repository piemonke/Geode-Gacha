module.exports = {
    profile,
    gacha,
}

function profile(req, res) {
    res.render("rocks/profile");
}

function gacha(req, res) {
    res.render("rocks/gacha");
}