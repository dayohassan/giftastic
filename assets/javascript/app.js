var animalsArray = ["lion", "elephant", "horse", "zebra"];

$(document).ready(function () {

    // Display buttons to DOM
    DisplayButtons(animalsArray);

    // create an onclick function
    $("#add-animal").on("click", AddAnimal);

    // fire aja call when clicked
    $(document).on("click", ".animal-buttons", AjaxSearch)

    // Image URL from response object
    $(document).on("click", ".animal-gif", invertGif)
    // append image to div in html
})

function invertGif() {
    var imgStill = $(this).attr("data-still")
    var imgAnimate = $(this).attr("data-animate")
    var imgSrc = $(this).attr("src")

    if (imgSrc === imgStill) {
        console.log("image is still")
        $(this).attr("src", imgAnimate)
    }
    else if (imgSrc === imgAnimate) {
        console.log("image is animated")
        $(this).attr("src", imgStill)
    }
    else {
        console.log("error")
    }
}

function AjaxSearch() {
    $("#gifs-view").empty();
    var animal = $(this).attr("data-type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=qP6wOXAK4ndbnLTMckJsw0A3fL7AqjVd&q=" + animal + "&limit=10"

    $.get(queryURL)
        .then(function (response) {
            var data = response.data;

            for (var i = 0; i < data.length; i++) {
                var img = $("<img>")
                    .attr("src", data[i].images.fixed_height_small_still.url)
                    .attr("data-still", data[i].images.fixed_height_small_still.url)
                    .attr("data-animate", data[i].images.fixed_height_small.url)
                    .addClass("animal-gif")
                $("#gifs-view").append(img)
            }
        })
}

function AddAnimal(event) {
    event.preventDefault();
    var input = $("#animal-input").val();

    if (animalsArray.indexOf(input) === -1) {
        animalsArray.push(input);
        DisplayButtons(animalsArray);
    }

    $("#animal-input").val("")
}

function DisplayButtons(animalsArray) {
    $("#buttons").empty();
    for (var i = 0; i < animalsArray.length; i++) {
        console.log(animalsArray[i])
        var button = $("<button>")
            .text(animalsArray[i])
            .attr("data-type", animalsArray[i])
            .addClass("animal-buttons")
        $("#buttons").append(button)
    }
}
    //    $(document).on("click", "animal-buttons", function(){


    //     var animal = $(this).attr("data-type")
    //     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=qP6wOXAK4ndbnLTMckJsw0A3fL7AqjVd&q="+animal+"&limit=10"
    //     console.log(animal);


    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function(response){
    //         console.log(response)
    //     })
    // })

