// Create an array of fruits
const fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

// Get the <ul> element by ID
const fruitList = document.getElementById("fruit-list");

// Loop through the array using a for loop
for (let i = 0; i < fruits.length; i++) {
  // Create a new <li> element
  const listItem = document.createElement("li");

  // Set the text inside the <li>
  listItem.innerText = fruits[i];

  // Append the <li> to the <ul>
  fruitList.appendChild(listItem);
}
