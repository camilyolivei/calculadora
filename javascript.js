const numberValue = document.querySelectorAll(".calculatorNumber li button");
var account = document.querySelector(".account");
var result = document.querySelector(".result");
var contentNumber = [];

function resultonscreen() {
  result.innerHTML = eval(contentNumber);
}
function zeroAccount() {
  account.innerHTML = "";
  result.innerHTML = "";
}

numberValue.forEach((item) => {
  item.addEventListener("click", (valueNumber) => {
    var valueClicked = valueNumber.currentTarget;
    var numberContent = valueClicked.textContent;

    if (numberContent === "=") {
      resultonscreen();
    } else if (numberContent === "x") {
      zeroAccount();
      content = "0";
    } else {
      account.append(numberContent);
      contentNumber = account.textContent;
      console.log(contentNumber);
    }
  });
});
