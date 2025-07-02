const $app = document.querySelector("#app");

//initialize the bankAccount

//looks for the even values in the bankAccount
const evenValues = (bankAccount) => {
  const evenNumbers = [];
  for (value of bankAccount) {
    if (value % 2 === 0) {
      evenNumbers.push(value);
    }
  }
  return evenNumbers;
};

//looks for the odd values in the bankAccount
const oddValues = (bankAccount) => {
  const oddNumbers = [];
  for (value of bankAccount) {
    if (value % 2 !== 0) {
      oddNumbers.push(value);
    }
  }
  return oddNumbers;
};

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
  $bank.innerHTML = `

    `;

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
    
  `;
  return $odds;
};

const evens = (addBankAccount) => {
  const $evens = document.createElement("div");
  $evens.classList.add("Evens"); // Changed from "Odds" to "Evens"
  $evens.style.display = "flex";
  $evens.style.flexDirection = "column";
  $evens.style.width = "90%";
  $evens.style.margin = "0 auto";
  $evens.style.padding = "10px";
  $evens.style.border = "1px solid #ccc";
  evenValues(bankAccount);
  console.log(evenValues(bankAccount));
  $evens.innerHTML = `
  
    `;
  return $evens;
};

//adds the submit button to the bankAccount array
const addBankAccount = (e) => {
  e.preventDefault();
  bankAccount = []
  const inputValue = Number(e.target[0].value);
  bankAccount.push(inputValue);
  console.log(bankAccount);
  return bankAccount
};

const sortOne = (bankAccount) => {
  e.preventDefault();
  evenNumbers(bankAccount[0]);
  oddValues(bankAccount[0]);
};

const sortAll = (bankAccount) => {
  e.preventDefault();
  evenValues(bankAccount);
  oddValues(bankAccount);
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
      <button type = "button" class = "Sort-one">Sort One</button>
      <button type = "button" class = "Sort-all">Sort All</button>
      </div>
      `;
  $form.addEventListener("submit", addBankAccount);
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
  $app.append(bank());


  //odds
  $app.append($oddsHeader);
  $app.append(odds());

  //evens
  $app.append($evensHeader);
  $app.append(evens());

};

main();
