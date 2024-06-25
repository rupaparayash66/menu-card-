const menuForm = document.getElementById('menu-form');
const totalPriceElement = document.getElementById('total-price');
let totalPrice = 0;

menuForm.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    const checkbox = event.target;
    const price = parseFloat(checkbox.value);
    if (checkbox.checked) {
      totalPrice += price;
    } else {
      totalPrice -= price;
    }
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  }
});

var label = document.createElement("label")
