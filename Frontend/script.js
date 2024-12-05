const toggleDarkMode = document.getElementById("toggle-dark-mode");
toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    toggleDarkMode.textContent = isDarkMode ? "🌞" : "🌙";
});

// Cart Management
let cart = [];

function addToCart(product) {
    cart.push(product);
    displayCartItems();
}

function displayCartItems() {
    const cartItemsList = document.getElementById("cartItemsList");
    cartItemsList.innerHTML = ""; // Clear previous items

    if (cart.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.innerHTML = "Your cart is empty.";
        cartItemsList.appendChild(emptyMessage);
    } else {
        cart.forEach(item => {
            const li = document.createElement("li");
            // li.innerHTML = ${item.name} - ${item.price};
            cartItemsList.appendChild(li);
        });
    }

    const cartSidebar = document.getElementById("cartSidebar");
    cartSidebar.classList.add("open");
}

function toggleCartSidebar() {
    const cartSidebar = document.getElementById("cartSidebar");
    cartSidebar.classList.toggle("open");
}

// Order Details Form
function showOrderForm() {
    document.getElementById("orderDetailsForm").style.display = "block";
}

function closeOrderForm() {
    document.getElementById("orderDetailsForm").style.display = "none";
}

// Checkout and Order Submission
function submitOrder(event) {
    event.preventDefault();
    const name = document.getElementById("customerName").value;
    const address = document.getElementById("customerAddress").value;
    const phone = document.getElementById("customerPhone").value;

    console.log("Order Details:", { name, address, phone, cart });

    // Show success modal and reset cart
    displayOrderSuccess();
    cart = [];
    displayCartItems();
}

function displayOrderSuccess() {
    const orderSuccessModal = document.getElementById("orderSuccessModal");
    orderSuccessModal.style.display = "flex";
}

function closeModal() {
    const orderSuccessModal = document.getElementById("orderSuccessModal");
    orderSuccessModal.style.display = "none";
}

// Close Cart Sidebar
function closeCartSidebar() {
    const cartSidebar = document.getElementById("cartSidebar");
    cartSidebar.classList.remove("open");
}