const toggleCheckbox = document.getElementById("toggleCheckbox");
const price_basic = document.querySelector(".price_basic")
const price_professional = document.querySelector(".price_professional")
const price_master = document.querySelector(".price_master")


toggleCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
        price_basic.innerText = "199.99";
        price_professional.innerText = "249.99"
        price_master.innerText = "399.99"

    } else {
        price_basic.innerText = "19.99";
        price_professional.innerText = "24.99"
        price_master.innerText = "39.99"

    }
});