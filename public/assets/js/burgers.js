$(document).ready(() => {
    $(".devour-button").on("click", function (event) {
        console.log(this);
        const id = $(this).data("id");
        // Send the PUT request.
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: {
                devoured: true
            },
          }).then(() => {
            console.log("burger devoured!");
            // Reload the page to get the updated list
            location.reload();
          });        
    });
    /*
    $(".change-sleep").on("click", function (event) {
        const id = $(this).data("id");
        const newSleep = $(this).data("newsleep");
    
        const newSleepState = {
          sleepy: newSleep,
        };
    
        // Send the PUT request.
        $.ajax(`/api/cats/${id}`, {
          type: "PUT",
          data: newSleepState,
        }).then(() => {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        });
    });
    */
    
    $(".create-form").on("submit", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("form submit");
        const burgerName = $("#burger_name").val().trim();
        console.log(`burger name = ${burgerName}`);

        const newBurger = {
            name: burgerName
        }
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger,
        }).then(() => {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        });
    });
});