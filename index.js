const $app = document.querySelector("#app");
const $bankContainer = document.createElement("div");
const $evensContainer = document.createElement("div");
const $oddsContainer = document.createElement("div");

//initialize the bankAccount
const bankAccount = [];
const evenNumbers = [];
const oddNumbers = [];

//looks for the even values in the bankAccount

//creates the bank section
const bank = () => {
  const $bank = document.createElement("div");
  $bank.classList.add("bank");
  $bank.style.display = "flex";
  $bank.style.flexDirection = "column";
  $bank.style.width = "90%";
  $bank.style.margin = "0 auto";
  $bank.style.padding = "10px";
  $bank.style.border = "1px solid #ccc";

  //this calls the bankContainer div in the innerHTML and then calls the bankAccount list, and then does a map to join that value alongside empty string
  $bank.innerHTML = $bankContainer.innerHTML = bankAccount
    .map((value) => `${value}  `)
    .join(""); 
    
    // we re-call the function bank() in the addBank function so it redoes this little module
  return $bank;
};

//creates the odds section
const odds = (oddNumbers) => {
  // This function should take the odd values from the bankAccount
  const $odds = document.createElement("div");
  $odds.classList.add("Odds");
  $odds.style.display = "flex";
  $odds.style.flexDirection = "column";
  $odds.style.width = "90%";
  $odds.style.margin = "0 auto";
  $odds.style.padding = "10px";
  $odds.style.border = "1px solid #ccc";

  $odds.innerHTML = `
    odd values go here
  `;
  return $odds;
};

const evens = () => {
  const $evens = document.createElement("div");
  $evens.classList.add("Evens"); // Changed from "Odds" to "Evens"
  $evens.style.display = "flex";
  $evens.style.flexDirection = "column";
  $evens.style.width = "90%";
  $evens.style.margin = "0 auto";
  $evens.style.padding = "10px";
  $evens.style.border = "1px solid #ccc";
  const value = valueSorter(bankAccount);
  console.log(valueSorter(bankAccount));
  $evens.innerHTML = `
  even values go here`
  return $evens;
};

//adds the submit button to the bankAccount array
const addBankAccount = (e) => {
  e.preventDefault();
  const input = e.target.querySelector(".input-number"); // to clear out the value
  const inputValue = Number(e.target[0].value);
  bankAccount.push(inputValue);
  bank();
  input.value = ""; // Clear the input box

  console.log(bankAccount);
};

const valueSorter = (values) => {
  const evenNumbers = [];
  for (const value of bankAccount) {
    if (value % 2 === 0) {
      evenNumbers.push(value);
    }
    else {
        oddNumbers.push(value)
    }
  }
  return evenNumbers;
};

//sortOne click
//this does console log out that sort one was clicked
const sortOne = (e) => {
  e.preventDefault();
  console.log("sort one")
  let firstValue = bankAccount.shift
  console.log(firstValue)
  console.log(evenNumbers);
  console.log(oddNumbers);
  console.log(valueSorter(firstValue));

};

//this does console log out that sortAll was clicked
const sortAll = (e) => {
  e.preventDefault();
  console.log("sort all")
  console.log(evenNumbers);
  console.log(oddNumbers);
  let allValue = valueSorter(bankAccount);
  console.log(allValue);

};



//creates the buttons and the acctions from the button
const form = () => {
  const $form = document.createElement("form");
  $form.style.width = "65%";
  $form.style.margin = "0 auto";
  $form.innerHTML = `
      <div class = "buttons">
      <input type = "text" class = "input-number" placeholder = "Enter a number">
      <button type = "submit" class = "add-number">Add Number</button>
      <button type = "button" class = "sort-one">Sort One</button>
      <button type = "button" class = "sort-all">Sort All</button>
      </div>
      `;
  const sortOneButton = $form.querySelector(".sort-one");
  const sortAllButton = $form.querySelector(".sort-all");
  $form.addEventListener("submit", addBankAccount);
  sortOneButton.addEventListener("click", sortOne)
  sortAllButton.addEventListener("click", sortAll)

  return $form;

  
};

main = () => {
  console.log("I did it");
  //this is the dividers of the sections
  const $header = document.createElement("h1");
  const $paragraph = document.createElement("p");
  const $bankHeader = document.createElement("h2");
  const $oddsHeader = document.createElement("h2");
  const $evensHeader = document.createElement("h2");

  //text output for each of the sections
  $header.textContent = "Odds and Evens";
  $paragraph.textContent = "Add a number to the bank";
  $bankHeader.textContent = "Bank";
  $oddsHeader.textContent = "Odds";
  $evensHeader.textContent = "Evens";

  //top header
  $app.append($header);
  $app.append($paragraph);
  $app.append(form());

  //bank
  $app.append($bankHeader);
  $app.append($bankContainer);

  //odds
  $app.append($oddsHeader);
  $app.append(odds());

  //evens
  $app.append($evensHeader);
  $app.append(evens());
};

main();
