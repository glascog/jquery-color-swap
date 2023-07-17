$(document).ready(onReady);

function onReady() {
    console.log('Hi jQuery');

    // Handlers
    $('#generateButton').on('click', handleGenerate);
    $('main').on('click', '.yellowButton', turnYellow);
    $('main').on('click', '.deleteButton', handleDelete);

}
// Create variable for number of divs
let divCount = 1;

// Functions
function handleDelete() {
    console.log('this is:', $(this));
    $(this).parent().parent().remove();
}

function turnYellow(event) {
    event.preventDefault();
    console.log('inside turnYellow');
    $('div').css('background-color', 'yellow');
}

function handleGenerate(event) {
    event.preventDefault();
    console.log('inside handleGenerate');

    // Append new div to dom for every click
    $('main').append(`
        <div>
            <p>${divCount++}</p>
            <span><button class="yellowButton">Yellow</button></span>
            <span><button class="deleteButton">Delete</button></span>
        </div>`);


}