// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the kimchis
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.kindsOfKimchi.findAll({}).then(function(dbkindsOfKimchi) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbkindsOfKimchi);
    });

  });

  // POST route for saving a new kimchi
  app.post("/api/kimchis", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    db.kindsOfKimchi.create({
      kimchi_name: req.body.kimchi_name,
      gobbled: req.body.gobbled
    }).then(function(dbkindsOfKimchi) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbkindsOfKimchi);
    }).catch((err) => {
      res.status(500).json({
        error: err.message
      });
    });

  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted
  // from req.params.id
  app.delete("/api/kimchis/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the todos we want to destroy
    db.kindsOfKimchi.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbkindsOfKimchi) {
        res.json(dbkindsOfKimchi);
      });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the todos we want to update
    db.kindsOfKimchi.update({
      gobbled: req.body.gobbled,
    }, {
      where: {
        id: req.body.id
      }
    })
      .then(function(dbkindsOfKimchi) {
        res.json(dbkindsOfKimchi);
      });

  });
};
