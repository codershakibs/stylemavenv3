const swiper = new Swiper(".bestsellerslider", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: false,

});


function decreaseQuantity() {
    const input = document.getElementById("quantityInput");
    let value = parseInt(input.value);
    if (value > 1) {
        input.value = value - 1;
    }
}

function increaseQuantity() {
    const input = document.getElementById("quantityInput");
    let value = parseInt(input.value);
    input.value = value + 1;
}