//Importing the database from friends file
var friendTable = require("../data/friends");
// exporting all main functionality for API routes
module.exports = function (app) {
    console.log("app Api routes loaded");
    // Handle GET requests for /survey, and returns friendTable as json
    app.get("/api/survey", function (req, res) {
        console.log("GET REQUEST FOR API RECIEVED");
        // Returns to client friendTable as Json,/converts javasctipt object to string format
        // This is Response to client
        res.json(friendTable);
    });
    
    app.post("/api/survey", function (req, res) {
        console.log("----------------------- START---------------------");
        //variable to hold data from client/"This is the Post"
        var newFriend = req.body;
        //req.body Contains the Client's data
        console.log(newFriend);
        //creates varible to check best match
        var bestMatch = {
            name: "",
            photo: "",
            diff: Infinity
        };

        var pointDiff;
        // looping through friendTable 
        for (var i = 0; i < friendTable.length; i++) {
            pointDiff = 0;
            // looping through scores in friendTable
            for (var j = 0; j < friendTable[i].scores[j]; j++) {
                pointDiff += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friendTable[i].scores[j]));
            }
            // contidition to check points difference and Match with best results
            if (pointDiff <= bestMatch.diff) {
                console.log("pointDiff is <= bestMatch.diff");
                console.log("current friend is...", friendTable[i]);
                bestMatch.name = friendTable[i].profileName;
                bestMatch.photo = friendTable[i].photo;
                bestMatch.diff = pointDiff;
            }
        }
        console.log(bestMatch);
        // push my newFriend to friendTable array
        friendTable.push(newFriend);
        // This is Response to client
        res.json(bestMatch);
        console.log("----------------------- END---------------------");
    });
};