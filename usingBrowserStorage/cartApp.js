// Create a function called initializeCart that checks if there's a cart in localStorage; if not, it initializes an
//Function to initialize an empty cart if it doesn't exist in localStorage

function initializeCart() {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }
  
  // Function to add an item to the cart

function addItem(item) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    item.id = Date.now();
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  // Function to remove an item from the cart

  function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  // Function to display the cart contents in the console
  function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
  }
  
  // Event listener for the add item form
  const addItemForm = document.querySelector("#addItemForm");
  addItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const itemName =document.getElementById("itemName").value
    const itemPrice = parseFloat(document.getElementById("itemPrice").value);
    const item = { name: itemName, price: itemPrice };
    addItem(item);
    addItemForm.reset();
  });
  
  // Event listener for the display cart button
  const displayCartButton = document.getElementById("displayCartButton");
  displayCartButton.addEventListener("click", () => {
    displayCart();
  });
  
  // Initialize the cart on page load
  initializeCart();