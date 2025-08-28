// Heart Counter
const heart = document.getElementById("heart-count");
let newNum = 0;

const findHearts = document.getElementsByClassName("fa-heart");
console.log(find);

for (const find of findHearts) {
  find.addEventListener("click", function () {
    newNum++;
    heart.innerHTML = newNum;
  });
}

// Credit Reducing
const coin = document.getElementById("coin-count");
let coinCount = 100;

const findCalls = document.getElementsByClassName("call-btn");
for (const btn of findCalls) {
  btn.addEventListener("click", function (e) {
    const serviceName =
      e.target.parentNode.parentNode.childNodes[3].childNodes[3].innerText;
    const serviceNameBengali =
      e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    const serviceNum =
      e.target.parentNode.parentNode.childNodes[3].childNodes[5].innerText;

    const getTime = new Date();
    const timeStr = getTime.toLocaleTimeString();

    if (coinCount < 20) {
      alert("You don't have enough coins");
    } else {
      // Reduce Coins for each call by 20
      coinCount = coinCount - 20;
      coin.innerHTML = coinCount;

      // Adding to History
      const mainElement = document.getElementById("history");
      const history = document.createElement("div");
      history.setAttribute("id", "history");
      history.innerHTML = `
        <div>
        <h4> ${serviceNameBengali}</h4>
        <p>${serviceNum}</p>
        </div>
        <p> ${timeStr} </p>
`;
      history.classList.add(
        "serviceContainerStyle",
        "primary-font",
        "historyContainer"
      );

      const serviceNameBengaliStyle = history.childNodes[1].childNodes[1];
      serviceNameBengaliStyle.classList.add("serviceNameStyle");

      mainElement.appendChild(history);

      // Alert with service name & Number
      alert(`Calling ${serviceName} ${serviceNum}`);
    }
  });
}

// Clear Call History
const clearBtn = document.getElementById("clear-history");
clearBtn.addEventListener("click", function () {
  const history = document.getElementById("history");
  history.innerHTML = "";
});
