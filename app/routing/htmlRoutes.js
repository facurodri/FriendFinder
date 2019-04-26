// imports the path module
var path = require("path");
// exporting all my html routes
module.exports = function (app) {
    console.log("app HTML routes loaded");
    // Handle GET request from client 
    app.get("/survey", function (req, res) {
        // saving the path to survey.html
        var fullPath = path.join(__dirname, "../public/survey.html");
        //Returns requested file to client
        //__dirname refers to Current file's folder name
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        console.log("---------->>>>>>>>" + fullPath);
    });
    // Handles GET request for homepage (server root path)
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        console.log("this is path to home");
    });
};