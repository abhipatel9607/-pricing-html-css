const toggleCheckbox = document.getElementById("toggleCheckbox");
const price_basic = document.querySelector(".price_basic");
const price_professional = document.querySelector(".price_professional");
const price_master = document.querySelector(".price_master");
const cards = document.querySelectorAll(".card");

// Function to toggle prices
function togglePrices() {
    if (toggleCheckbox.checked) {
        price_basic.innerText = "199.99";
        price_professional.innerText = "249.99";
        price_master.innerText = "399.99";
    } else {
        price_basic.innerText = "19.99";
        price_professional.innerText = "24.99";
        price_master.innerText = "39.99";
    }
}

// Toggle prices when the checkbox is checked or unchecked
toggleCheckbox.addEventListener("change", togglePrices);

// Manage keyboard interaction
toggleCheckbox.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        toggleCheckbox.click(); // Simulate a click when Enter is pressed
        e.preventDefault(); // Prevent the default Enter behavior (form submission)
    }
});

// Toggle card_active class
cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(card => card.classList.remove("card_active"));
        card.classList.add("card_active");
    });
});