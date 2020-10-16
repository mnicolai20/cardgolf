// Page will pull players from API on load
$.get("/api/all", function (data) {
    if(data.length !== 0) {
        for(var i = 0; i < data.length; i++) {
            var row = $("<div>");
            row.addClass("golfer");
            
            
        }
    }
})