var friendTable = require("../data/friends");

module.exports = function (app) {
    console.log("app Api routes loaded");

    app.get("/api/survey", function (req, res) {
        console.log("GET REQUEST FOR API RECIEVED")

        res.json(friendTable);
    });

    app.post("/api/survey", function (req, res) {
        console.log("----------------------- START---------------------");
        var newFriend = req.body;

        console.log(newFriend);

        var bestMatch = {
            name: "",
            photo: "",
            diff: 1000
        };

        var pointDiff;

        for (var i = 0; i < friendTable.length; i++) {
            pointDiff = 0;
            for (var j = 0; j < friendTable[i].scores[j]; j++) {
                pointDiff += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friendTable[i].scores[j]));
                // console.log("pointDiff=" + pointDiff);
            }

            if (pointDiff <= bestMatch.diff) {
                console.log("pointDiff is <= bestMatch.diff");
                console.log("current friend is...", friendTable[i]);
                bestMatch.name = friendTable[i].profileName;
                bestMatch.photo = friendTable[i].photo;
                bestMatch.diff = pointDiff;
            }
        }

        console.log(bestMatch);
        friendTable.push(newFriend);
        res.json(bestMatch);
        console.log("----------------------- END---------------------");
    });
};