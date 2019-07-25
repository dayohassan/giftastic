
$(document).ready(function(){
    // document.write("hello world")
    var animalsArray = ["lion", "elephant", "horse", "zebra"];
    for(var i =0; i<animalsArray.length; i++){
        var button = $("<button>")
        button.text(animalsArray[i])
        $("#buttons").append(button)
    }
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=qP6wOXAK4ndbnLTMckJsw0A3fL7AqjVd&q=horse&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
    })
})

$("#animals-view").empty();

for (var i = 0; i<response.data.length; i++){

  var animalsDiv = $("#<div class='animals'>");

  var rating = response.data[i].rating;
  var pOne = $('<p>').text("Rating: " + rating);

  animalsDiv.append(pOne);
}




// function displayAnimalGif() {
//   console.log($(this));
//   var animal = $(this).attr("data-name");
//   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=qP6wOXAK4ndbnLTMckJsw0A3fL7AqjVd&q&limit=10";

//   // Make an AJAX call for the specific animal button being clicked on
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function (response) {

//     console.log(response);

//     $("#animal-view").empty();

//     for (var i = 0; i < response.data.length; i++) {

//       // Create a div here to hold the animal
//       var animalDiv = $("<div class='animal'>");

//       // Store the rating data
//       var rating = response.data[i].rating;

//       // Make an element to have the rating displayed
//       var pOne = $("<p>").text("Rating: " + rating);

//       // Display the rating
//       animalDiv.append(pOne);













