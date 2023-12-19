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
