// global.location = window.location;

// var $ = require('jquery');

$(".eat-btn").on("click", function(event){
    event.preventDefault();
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        devoured: true
      })
    location.reload();        
})