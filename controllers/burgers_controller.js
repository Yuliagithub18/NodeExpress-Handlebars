const burger = require("../model/burger");

const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject)
    })
})

module.exports = router;