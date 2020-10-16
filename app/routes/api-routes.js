const connection = require("../db/connection");

module.exports =  function(app) {

    // Get all players
    app.get("/api/all", function (req, res) {
        const dbQuery = "SELECT * FROM golf";

        connection.query(dbQuery, function(err, result) {
            if(err) throw err;
            res.json(result)
        });
    })

    // Add a player
    app.post("/api/new", function(req, res) {
        // console.log(req.body.player);

        const dbQuery = "INSERT INTO golfers (player) VALUES (?)";

        connection.query(dbQuery, [req.body.player], function(err, result) {
            if (err) throw err;
            console.log("Player Added Successfully!")
            console.log(result)
            res.end()
        })
    })
}