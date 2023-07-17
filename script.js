$(document).ready(onReady);

function onReady() {
    console.log('Hi jQuery');

    // Handlers
    $('#generateButton').on('click', handleGenerate);

}
// Create variable for number of divs
let divCount = 0;

// Functions
function handleGenerate(event) {
    event.preventDefault();
    console.log('inside handleGenerate');

    // Append new div to dom for every click
    $('main').append(`
        <div>
            <p>${divCount++}</p>
            <span><button id="yellowButton">Yellow</button></span>
            <span><button id="deleteButton">Delete</button></span>
        </div>`);

}