// Menu data array
const menuItems = [
  // ☕ Coffee
  { name: "Café de Palacio", description: "Homemade daily.", price: 109, category: "Coffee" },
  { name: "Espresso de Palacio", description: "Rich and smooth, freshly brewed.", price: 129, category: "Coffee" },
  { name: "Latte de Palacio", description: "Milk and espresso perfectly blended.", price: 149, category: "Coffee" },

  // 🥐 Bakery
  { name: "Blueberry Muffin", description: "Homemade daily.", price: 119, category: "Bakery" },
  { name: "Chocolate Cake", description: "Decadent chocolate dessert.", price: 313, category: "Bakery" },
  { name: "Croissant", description: "Buttery, flaky pastry.", price: 170, category: "Bakery" },

  // 🍵 Tea
  { name: "Black Tea", description: "Strong and robust flavor.", price: 99, category: "Tea" },
  { name: "Green Tea", description: "Refreshing and packed with antioxidants.", price: 109, category: "Tea" },
  { name: "Herbal Tea", description: "Caffeine-free and calming blends.", price: 119, category: "Tea" }
];

// Get container
const menuList = document.getElementById("menu-list");
const orderList = document.getElementById("order-list");

// Loop through menu items and create cards dynamically
menuItems.forEach(item => {
  // Create card container
  const card = document.createElement("div");
  card.className = "col-md-4";

  // Create Bootstrap card content
  card.innerHTML = `
    <div class="card h-100 shadow-sm border-0">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text text-muted">${item.description}</p>
        <p class="fw-bold">₱${item.price}</p>
        <button class="btn btn-dark w-100 order-btn">Order Now</button>
      </div>
      <div class="card-footer bg-transparent border-0 text-center text-secondary small">${item.category}</div>
    </div>
  `;

  // Add to container
  menuList.appendChild(card);

  // Add event listener for order button
  const orderBtn = card.querySelector(".order-btn");
  orderBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `${item.name} <span class="badge bg-dark rounded-pill">₱${item.price}</span>`;
    orderList.appendChild(li);
  });
});
