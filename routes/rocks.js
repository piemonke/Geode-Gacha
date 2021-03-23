module.exports = routerPath();

function routerPath() {
    const express = require("express");
    const router = express.Router();
    const rockCtrl = require("../controllers/rocks");

    //GET requests
    router.get("/:id", rockCtrl.profile);
    router.get("/:id/gacha", rockCtrl.gacha);

    //POST requests
    router.get("/:id", rockCtrl.new);

    //DELETE requests
    router.get("/:id", rockCtrl.delete);

    return router;
}