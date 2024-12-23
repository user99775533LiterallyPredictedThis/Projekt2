const url = "https://kool.krister.ee/chat/GuessTheNumber";

let btn = document.getElementById('btn');

let userInput = document.getElementById('userInput');

let output = document.getElementById('outputtext');

let number = Math.floor(Math.random() * 100);

let score = 0

let userName = prompt("Please enter your unique username so that I can save your score. Make sure to use the same unique username in the future if you'd like to get your previous score back.");

btn.addEventListener('click', function () {
    checkAnswer()
})

userInput.addEventListener('keypress', function (event) {

    if (event.key === "Enter") {
        checkAnswer()
    }

});

function checkAnswer() {

    let input = parseInt(userInput.value);

    console.log("values", input, number)
    if (input == number) {
        output.innerHTML = `You guessed right, your number was ${number}!`

        number = Math.floor(Math.random() * 100);

        score = score + 1
        const scoreEl = document.getElementById("score");
        scoreEl.innerHTML = `<p>Score: ${score}</p`;

        const message = { number: score, name: userName };
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        });


    } else if (input < number) {
        output.innerHTML = "You guessed too low!"
    }

    else if (input > number) {
        output.innerHTML = "You guessed too high!"
    }
}

async function fetchScore() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    const found = data.reverse().find(item => userName == item.name);

    console.log(found)

    const scoreEl = document.getElementById("score");
    scoreEl.innerHTML = "<p>Score: 0</p>";

    
    
    if (found) {
        scoreEl.innerHTML = `Score: ${found.number}`;
        score = found.number
    }


}
fetchScore()

console.log(number)