// Integration with HTML
window.onload = function () {
    let cardSymbol = symbols();
    if (cardSymbol === "♥" || cardSymbol === "♦") {
        document.querySelector('#symbol1').style.color = "red";
        document.querySelector('#symbol2').style.color = "red";
        document.querySelector('.randomNumberGenerator').style.color ="red";

}
    document.querySelector('#symbol1').innerHTML = cardSymbol;
    document.querySelector('#symbol2').innerHTML = cardSymbol;
    document.querySelector('.randomNumberGenerator').innerHTML = cardNumber();    
}

//Random Button


// Function Random Card Number
let cardNumber = () => {
    const cardNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let randomCardNumber = [Math.floor(Math.random() * cardNumbers.length)];
    return cardNumbers[randomCardNumber];
}

// Function Random Symbol
let symbols = () => {
    const symbolsArray = ['♥', '♦', '♠', '♣'];
    let randomSymbols = [Math.floor(Math.random() * symbolsArray.length)];
    return symbolsArray[randomSymbols];
}







