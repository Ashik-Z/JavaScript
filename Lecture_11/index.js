const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if (myCheckBox.checked) {
        subResult.textContent = `You are subscribed to our newsletter!`;
    }
    else {
        subResult.textContent = `You are NOT subscribed to our newsletter!`;
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `You have selected Visa!`;
        
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = `You have selected MasterCard!`;
        
    } else if (payPalBtn.checked) {
        paymentResult.textContent = `You have selected PayPal!`;
        
    } else {
        paymentResult.textContent = `You must select a payment type!`;
    }
}