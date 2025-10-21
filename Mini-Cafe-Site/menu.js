document.addEventListener("DOMContentLoaded", function () {
  const orderButtons = document.querySelectorAll(".order-btn");
  const orderList = document.getElementById("order-list");

  orderButtons.forEach(button => {
    button.addEventListener("click", function () {
      const itemName = this.parentElement.querySelector("h3").innerText;

      // Alert
      alert(`You ordered ${itemName}!`);

      // Add to order summary
      const li = document.createElement("li");
      li.textContent = itemName;
      orderList.appendChild(li);
    });
  });
});
