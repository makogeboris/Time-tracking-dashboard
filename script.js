"use strict";

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const title = document.querySelectorAll(".category");
const timeframe = document.querySelectorAll(".timeframe");
const currentTime = document.querySelectorAll(".current-time");
const previousTime = document.querySelectorAll(".previous-time");
const url = "data.json";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    addData(data);
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
