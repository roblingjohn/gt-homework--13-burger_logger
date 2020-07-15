$(".eat-btn").on("click", function(event){
    event.preventDefault();
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        devoured: true
      })
    location.reload();        
});

$(".create-form").on("submit", function(event){
    event.preventDefault();
    var newBurger = {
        burger_name: $("#addBurger").val().trim()
    };
    console.log(newBurger)
    $.ajax("/api/burgers/" + newBurger.burger_name, {
        type: "POST",
        data: newBurger
      });
      location.reload();
})