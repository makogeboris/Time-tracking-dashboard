"use strict";

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const title = document.querySelectorAll(".activity__title");
const timeframeOpts = document.querySelectorAll(".activity__current-timeframe");
const currentTime = document.querySelectorAll(".activity__current-time");
const previousTime = document.querySelectorAll(".activity__previous-time");
const activityDetails = document.querySelectorAll(".activity__details");
const url = "data.json";
let data;

fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((fetchedData) => {
    data = fetchedData;

    updateTimeframe("daily");
  })
  .catch((err) => {
    console.error(`Error fetching data: ${err.message}`);
    activityDetails.forEach((detail) => {
      detail.innerHTML = `Error fetching data: ${err.message}`;
    });
  });

function addData(data, timeframe) {
  data.forEach((item, index) => {
    const timeframeData = item.timeframes[timeframe];

    title[index].textContent = item.title;
    currentTime[index].textContent = `${timeframeData.current}hrs`;
    previousTime[index].textContent = `${timeframeData.previous}hrs`;
  });
}

function updateActiveTimeframe(timeframe) {
  daily.setAttribute("aria-pressed", "false");
  weekly.setAttribute("aria-pressed", "false");
  monthly.setAttribute("aria-pressed", "false");

  if (timeframe === "daily") {
    daily.setAttribute("aria-pressed", "true");
  } else if (timeframe === "weekly") {
    weekly.setAttribute("aria-pressed", "true");
  } else if (timeframe === "monthly") {
    monthly.setAttribute("aria-pressed", "true");
  }

  let timeframeText = "";
  if (timeframe === "daily") {
    timeframeText = "Yesterday";
  } else if (timeframe === "weekly") {
    timeframeText = "Last Week";
  } else if (timeframe === "monthly") {
    timeframeText = "Last Month";
  }

  timeframeOpts.forEach((option) => {
    option.textContent = timeframeText;
  });
}

function updateLinkStyles(selectedTimeframe) {
  daily.classList.remove("active-timeframe");
  weekly.classList.remove("active-timeframe");
  monthly.classList.remove("active-timeframe");

  if (selectedTimeframe === "daily") {
    daily.classList.add("active-timeframe");
  } else if (selectedTimeframe === "weekly") {
    weekly.classList.add("active-timeframe");
  } else if (selectedTimeframe === "monthly") {
    monthly.classList.add("active-timeframe");
  }
}

function updateTimeframe(selectedTimeframe) {
  addData(data, selectedTimeframe);
  updateLinkStyles(selectedTimeframe);
  updateActiveTimeframe(selectedTimeframe);
}

daily.addEventListener("click", function (event) {
  event.preventDefault();
  updateTimeframe("daily");
});

weekly.addEventListener("click", function (event) {
  event.preventDefault();
  updateTimeframe("weekly");
});

monthly.addEventListener("click", function (event) {
  event.preventDefault();
  updateTimeframe("monthly");
});
