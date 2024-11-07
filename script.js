// Ln3 finds the HTML element with the id of "btn" and assigns it to the variable btn.

let btn = document.getElementById('btn');

// Similar to the first one, Ln7 targets an HTML element with an id of "outputtext".

let output = document.getElementById('outputtext');

// Math.random generates a number between 0 and 1. Math.random * 100 multiplies the 0-1 number by 100.
// Math.floor rounds the number down to the nearest whole number.

let number = Math.floor(Math.random() * 100);

// When the 'click' event is triggered (when the button is clicked) the function stored in the addEventListener will run.

btn.addEventListener('click', function(){

// Next it tries to get the value of an input element with the id 'userInput'.

    let input= parseInt(document.getElementById('userInput').value);
    
// If users input is equal to the number given a message will display telling you that your guess is correct.

    console.log("values", input, number)
    if (input == number){
        output.innerHTML = `You guessed right, your number was ${number}!`

        number = Math.floor(Math.random() * 100);

// If the users input is smaller than the given number a message will display telling us so.

    } else if (input < number){
        output.innerHTML = "You guessed too low!"
    }

// If the users input is larger than the number given, a message will display telling us so.

    else if (input > number){
        output.innerHTML = "You guessed too high!"
    }
});


