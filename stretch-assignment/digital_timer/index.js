var i = 0;
let digits = Array.from(document.getElementsByClassName("digit"));
var myTimer = setInterval(printTime, 100);

function printTime() {
  i = i + 1;
  let timerValue = i.toString().split("");
  if (timerValue.length === 1) {
    digits[0].innerHTML = 0;
    digits[1].innerHTML = 0;
    digits[3].innerHTML = 0;
    digits[4].innerHTML = timerValue[0];
  } else if (timerValue.length === 2) {
    digits[0].innerHTML = 0;
    digits[1].innerHTML = 0;
    digits[3].innerHTML = timerValue[0];
    digits[4].innerHTML = timerValue[1];
  } else if (timerValue.length === 3) {
    digits[0].innerHTML = 0;
    digits[1].innerHTML = timerValue[0];
    digits[3].innerHTML = timerValue[1];
    digits[4].innerHTML = timerValue[2];
  } else if (timerValue.length === 4) {
    digits[0].innerHTML = timerValue[0];
    digits[1].innerHTML = timerValue[1];
    digits[3].innerHTML = timerValue[2];
    digits[4].innerHTML = timerValue[3];
  }

  if (i == 100) {
    digits.forEach(element => {
      element.setAttribute("class", "digit redDigit");
    });
    clearInterval(myTimer);
  }
}

//button event - Updated for Stretch Challenge
var getStartedBtn = document.getElementsByTagName("button")[0];
getStartedBtn.addEventListener("click", function() {
  myTimer = setInterval(printTime, 100);
});

//button event - Updated for Stretch Challenge
var getStopBtn = document.getElementsByTagName("button")[1];
getStopBtn.addEventListener("click", function() {
  i = null;
  clearInterval(myTimer);
  digits.forEach(element => {
    element.setAttribute("class", "digit");
  });
  digits[0].innerHTML = 0;
  digits[1].innerHTML = 0;
  digits[3].innerHTML = 0;
  digits[4].innerHTML = 0;
});
