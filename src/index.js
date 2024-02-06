/*SEARCH FORM CODE*/

function handleSearch(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");
  let cityHeading = document.querySelector("#city-heading");

  cityHeading.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
