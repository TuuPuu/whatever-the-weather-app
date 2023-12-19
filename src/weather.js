/* PSEUDO CODE

 1) ACTIVATE FETCH USING EVENT LISTENER ON SEARCH BUTTON
 2) FETCH FUNCTION COLLECT WEATHER DATA FROM API
 3) UPDATE PAGE WITH FETCHED DATA AND DISPLAY */

// 1) CODE TO HANDLE CITY FORM SEARCH
function handleFormSubmit() {
  // Prevent the default form submission behavior

  const cityInput = document.getElementById("search-input");
  console.log(cityInput);
}

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", handleFormSubmit);

handleFormSubmit();

// 2) CODE TO FETCH WEATHER API
// save api key into a variable
const apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";

function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
}
