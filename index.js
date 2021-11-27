function calculateTip(billAmt, tip, numOfPeople) {
  var tipAmount = document.querySelector(".tip-amount");
  var totalBillWithTip = document.querySelector(".total-amount");
  if (billAmt == 0 || tip == 0 || numOfPeople == 0) {
    return;
  }

  var tipValue = billAmt * (tip / 100);

 
  var finalTipAmount = (tipValue / numOfPeople).toFixed(2);
  tipAmount.innerHTML = "$" + finalTipAmount.toString();
  var billByTwo = (billAmt / numOfPeople);
 
  totalBillWithTip.innerHTML = "$" + (Number.parseFloat(finalTipAmount) + Number.parseFloat(billByTwo));
}
function setDefaultStyleToButtons() {
  var tipButtons = document.querySelectorAll(".tip-button-container button");
  tipButtons.forEach((button) => {
    button.style.backgroundColor = "hsl(183, 100%, 15%)";
  });
}
window.addEventListener("DOMContentLoaded", (event) => {
  var billAmount = 0;
  var tipAmount = 0;
  var numberOfPeople = 0;
  var bill = document.querySelector(".bill-input");
  var people = document.querySelector(".number-of-people-input");
  var resetButton = document.querySelector(".reset-button");
  resetButton.addEventListener("click", () => {
    var tipAmount = document.querySelector(".tip-amount");
    var totalBillWithTip = document.querySelector(".total-amount");
    var bill = document.querySelector(".bill-input");
    var people = document.querySelector(".number-of-people-input");
    var customTipInput = document.querySelector(".button-custom");
    bill.value = "";
    people.value = "";
    customTipInput.value = "";
    tipAmount.innerHTML = "$" + "0.00";
    totalBillWithTip.innerHTML = "$" + "0.00";
    billAmount = 0;
    tipAmount = 0;
    numberOfPeople = 1;
    setDefaultStyleToButtons();
  });
  bill.addEventListener("change", updateBillAmount);
  people.addEventListener("change", updateNumberOfPeople);

  function updateBillAmount(e) {
    billAmount = e.target.value;
    console.log(billAmount);
    calculateTip(billAmount, tipAmount, numberOfPeople);
  }

  function updateNumberOfPeople(e) {
    numberOfPeople = e.target.value;
    calculateTip(billAmount, tipAmount, numberOfPeople);
  }
  var tipButtons = document.querySelectorAll(".tip-button-container button");
  tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setDefaultStyleToButtons();
      tipAmount = Number.parseInt(button.innerHTML.replace("%", ""));
      console.log("TIP AMOUNT CHANGED", tipAmount);
      button.style.backgroundColor = "hsl(172, 67%, 45%)";

      calculateTip(billAmount, tipAmount, numberOfPeople);
    });
  });

  var tipInput = document.querySelector(".tip-button-container input");
  tipInput.addEventListener("change", (e) => {
    tipAmount = e.target.value;
    setDefaultStyleToButtons();
  });
  tipInput.addEventListener("click", () => {
    setDefaultStyleToButtons();
  });
});
