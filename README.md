# GIFTASTIC

This is an application that uses the GIPHY API to make a dynamic web page that populates with gifs of my choice. 

A list of animals were used for this purpose, which was stored in an array....

```js
var animalsArray = ["lion", "elephant", "horse", "zebra"];

```

This application takes the animals in this array and create buttons in the HTML page. 

```html

 <!-- div holding the animal buttons -->
    <div id="buttons"></div>

    <!-- form allows user to add more animal -->
    <form id="animal-form">
        <label for="animal-input">Add an animal</label><br>
        <input type="text" id="animal-input"><br>

        <!-- this section allows a new animal to be added -->
        <input id="add-animal" type="submit" value="Submit">
    </form>

    <div id="gifs-view"></div>

    </div>

```

When the user clicks on a button, the page should grab the static, non-animated gif images from the GIPHY API and place them on the page.

<img width="1351" alt="Screen Shot 2019-08-16 at 12 26 35 PM" src="https://user-images.githubusercontent.com/36799420/63182710-3066ad80-c021-11e9-8872-2a3db11aed7b.png">





