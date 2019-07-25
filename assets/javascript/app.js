
$(document).ready(function(){
    // document.write("hello world")
    var animalsArray = ["lion", "elephant", "horse"];
    for(var i =0; i<animalsArray.length; i++){
        var button = $("<button>")
        button.text(animalsArray[i])
        $("#buttons").append(button)
    }
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=qP6wOXAK4ndbnLTMckJsw0A3fL7AqjVd&q=horse&limit=25&offset=0&rating=G&lang=en"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
    })
})














