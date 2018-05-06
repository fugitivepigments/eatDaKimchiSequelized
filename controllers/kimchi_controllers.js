var express = require('express');

var router = express.Router();

//import kimchi model to use db functions
var kimchi = require('../models/kimchi.js');

//create routers for the app and export at the end
router.get("/", function(req, res) {
  kimchi.selectAll(function(data) {
    var hbsObject = {
      kimchis: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/kimchis", function(req, res) {
  kimchi.newKimchi([
    "kimchi_name", "gobbled"
  ], [
    req.body.kimchi_name, req.body.gobbled
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/kimchis/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  kimchi.updateKimchi({
    gobbled: req.body.gobbled
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/kimchis/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  kimchi.deleteKimchi(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
