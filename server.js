//express is full feature web server for node
var express = require("express");
// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// everything in the file path is available to GET request as files
app.use(express.static("app/public"));
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//Lets you know server is up and running
app.listen(PORT,function (){
    console.log("App listening on PORT: "+ PORT);
});