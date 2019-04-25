var path = require("path");

module.exports = function (app) {

    console.log("app HTML routes loaded");

    app.get("/survey", function (req, res) {
        var fullPath = path.join(__dirname, "../public/survey.html");

        res.sendFile(path.join(__dirname, "../public/survey.html"));

        console.log("---------->>>>>>>>" + fullPath);
    });
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        console.log("this is path to home");
    });
};