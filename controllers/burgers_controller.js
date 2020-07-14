const app = require("express");
var express = require("express");
var router = express.Router();

const burgers = require("../models/burgers.js");

router.get("/burgers", function(req, res){
    burgers.selectAll(function(data){
        console.log(data);
        return data;
    })
});

router.post("/api/burgers/:id", function(req, res){
    let id = req.params.id;
    burgers.updateOne(id, function(data){
        console.log(data);
    })
});



module.exports = router;