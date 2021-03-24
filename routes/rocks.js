module.exports = routerPath();

function routerPath() {
    const express = require("express");
    const router = express.Router();
    const rockCtrl = require("../controllers/rocks");

    //GET requests
    router.get("/:id", rockCtrl.profile);
    router.get("/:id/gacha", rockCtrl.gacha);

    //POST requests

    //PUT requests
    router.put("/:id", rockCtrl.update);

    //DELETE requests
    router.delete("/:id/:num", rockCtrl.delete);

    return router;
}