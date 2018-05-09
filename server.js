var express = require("express");
var bodyParser = require("body-parser");

var db = require('./models');

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require('./routes/api-routes.js')(app);


db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("Listening in on PORT " + PORT);
  });
});
