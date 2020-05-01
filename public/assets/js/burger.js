$(function () {

    // Add Burger Form
    $("#addBurger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            newBurger: $("#addBurger [name=addBurgerInput]").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger,
        }).then(function () {
            // console.log("newBurgerAdded");
            location.reload();
        })
    });
    $(".eatMe").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr('id');

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
        }).then(function () {
            location.reload();
        })
    });

});
// Update burger Form
    // $("#updateBurger").on("click", function (event) {
    //     event.preventDefault();



    //     var id = $("#updateBurger [name=oldBurger]").val()

    //     var updateBurger = {
    //         updatedBurger: $("#updateBurger [name=updateBurgerInput]").val().trim()
    //     };

    //     $.ajax(`/api/burgers/${id}`, {
    //         type: "PUT",
    //         data: updateBurger,
    //     }).then(function () {
    //         location.reload();
    //     })
    // });
