const app = require("express");
var express = require("express");
var router = express.Router();

const burgers = require("../models/burgers.js");

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

router.get("/burgers", function(req, res){
    burgers.selectAll(function(data){
        console.log(data);
        return data;
    })
});

router.put("/api/burgers/:id", function(req, res){
    let id = req.params.id;
    burgers.updateOne(id, function(data){
        console.log(data);
    });
});

router.post("/api/burgers/:burger_name", function(req, res){
    let burger_name = req.params.burger_name
    burgers.insertOne(burger_name, function(data){
        console.log(data);
        return data;
    })


})



module.exports = router;