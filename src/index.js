/*SEARCH FORM CODE*/

// function to access user input and change city based on input
function handleSearch(event) {
  event.preventDefault();

  // function to capitalise accessed user input
  function capitaliseLetter() {
    let submittedUserInput = userInput.value;
    const trimmedInput = submittedUserInput.trim();
    const firstLetter = trimmedInput.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = trimmedInput.slice(1);
    const updatedRemainingLetters = remainingLetters.toLowerCase();
    const updatedTrimmedInput = firstLetterCap + updatedRemainingLetters;

    return updatedTrimmedInput;
  }

  let userInput = document.querySelector("#search-form-input");
  let cityHeading = document.querySelector("#city-heading");
  let updatedInput = capitaliseLetter();

  cityHeading.innerHTML = updatedInput;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
