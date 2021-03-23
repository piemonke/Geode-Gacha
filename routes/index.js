module.exports = routerPath();

function routerPath() {
    const express = require("express");
    const router = express.Router();
    const indexCtrl = require("../controllers/index")
    
    //GET requests
    router.get("/", indexCtrl.index)
    router.get("/signup", indexCtrl.signUp);
    router.get("/login", indexCtrl.signIn);

    //POST requests
    router.post("/signup", indexCtrl.new);

    return router;
}