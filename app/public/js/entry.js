// When add player button is clicked
$("#playerSubmit").on("click", function(event) {
    event.preventDefault();

    // New player object
    const newPlayer = {
        player: $("#newName").val().trim()
    };


    $.post("/api/new", newPlayer)
    .then(function() {
        console.log(newPlayer)
        const row = $("<div>");

        row.addClass("golferList");

        row.append("<h4>" + newPlayer.player + "</h4>")

        $("#newPlayers").prepend(row);
    });
    // Empty the input box after player is added
    $("#newName").val("");
})