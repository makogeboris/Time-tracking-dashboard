"use strict";

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const title = document.querySelectorAll(".activity__title");
const timeframe = document.querySelectorAll(".activity__current-timeframe");
const currentTime = document.querySelectorAll(".activity__current-time");
const previousTime = document.querySelectorAll(".activity__previous-time");
const url = "data.json";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    addData(data);
  })
  .catch((err) => {
    console.error(`Error fetching data: ${err.message}`);
  });

function addData(data) {
  data.forEach((item, index) => {
    title[index].textContent = item.title;
    timeframe[index].textContent = "Yesterday";
  });
}

function checkTimeframe() {
  if (daily) {
  }
}

daily.addEventListener("click", checkTimeframe);

//  The text for the previous period's time should change based on the active timeframe. For Daily, it should read "Yesterday" e.g "Yesterday - 2hrs". For Weekly, it should read "Last Week" e.g. "Last Week - 32hrs". For monthly, it should read "Last Month" e.g. "Last Month - 19hrs".
