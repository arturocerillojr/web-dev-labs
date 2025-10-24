// Function to change the heading text
function changeHeadingText() {
  const heading = document.getElementById("page-title");
  heading.innerText = "Title Changed Successfully!";
}

// Add event listener to the button
const button = document.getElementById("change-title-btn");
button.addEventListener("click", changeHeadingText);
