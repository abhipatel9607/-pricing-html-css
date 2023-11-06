const toggleCheckbox = document.getElementById("toggleCheckbox");
const price_basic = document.querySelector(".price_basic");
const price_professional = document.querySelector(".price_professional");
const price_master = document.querySelector(".price_master");

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
toggleCheckbox.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        toggleCheckbox.click(); // Simulate a click when Enter is pressed
        event.preventDefault(); // Prevent the default Enter behavior (form submission)
    }
});