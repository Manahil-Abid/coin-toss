let coin = ["Heads", "Tails"];

function coinToss() {
    let randomIndex = Math.floor(Math.random() * coin.length);
    let randomToss = coin[randomIndex];

    // Set the coin toss result
    document.getElementById("coin").innerText = randomToss;
    
    let resultMessage;
    if (randomToss === "Heads") {
        resultMessage = "You win!";
    } else {
        resultMessage = "You lose!";
    }
    document.getElementById("result").innerText = resultMessage;
}
