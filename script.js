let result = document.getElementById("result");
let result4 = document.getElementById("result4");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let input1 = document.getElementById("input1");
let runBtn = document.getElementById("runBtn");
let lis = document.getElementById("lis");
let API_URL = "https://api.api-ninjas.com/v1/weather?city=";
let CITY = input1.value;

async function getPromise(CITY) {
  let obj = fetch(`${API_URL}${CITY}`, {
    method: "GET",
    headers: { "X-Api-Key": "d2+7MeGXEbRJei3n+T5TQQ==3CKWaxksc4SXDSJU" },
    contentType: "application/json",
  });
  return (await obj).json();
}

async function renderWeather(CITY) {
  let weatherObj = await getPromise(CITY);
  let { temp, max_temp, min_temp, wind_speed } = weatherObj;
  lis.classList.replace("d-none", "d-flex");
  result4.innerHTML = `${CITY}`;
  result.innerHTML = `Current degrees: ${temp} ℃ `;
  result1.innerHTML = `Maximum temp: ${max_temp} ℃ `;
  result2.innerHTML = `Minimum temp: ${min_temp} ℃ `;
  result3.innerHTML = `Wind speed: ${wind_speed}`;
  if (CITY === "") {
    result.innerHTML =
      "invalid city/country name!<br>please enter proper city or country name.";
  }
}

runBtn.addEventListener("click", () => renderWeather(getInputValue()));

function getInputValue() {
  let tempValue = input1.value;
  return tempValue;
}
