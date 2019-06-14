
var textInput;
var textInputValue;
var numberInput;
var result = 0;

var resultText;
var plusBttn;
var minusBttn;

document.addEventListener("DOMContentLoaded", function(e) {
  resultText = document.getElementById("result");
  plusBttn = document.getElementById("plusbutton");
  textInput = document.getElementById("text");
  minusBttn = document.getElementById("minusbutton");

  textInput.addEventListener("input", function(e) {
    textInputValue = e.target.value;
    numberInput = parseInt(textInputValue, 10);
    console.log(numberInput);
  })

  plusBttn.addEventListener("click", function(e) {
    result = result + numberInput;
    resultText.textContent = result;
    if (result < 0) {
      resultText.style.color = "red";
    } else {
      resultText.style.color = "black";
    }
  })

  minusBttn.addEventListener("click", function(e) {
    result = result - numberInput;
    resultText.textContent = result;
    if (result < 0) {
      resultText.style.color = "red";
    } else {
      resultText.style.color = "black";
    }
  })
});
