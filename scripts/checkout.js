// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount = JSON.parse(localStorage.getItem(amount));
let n = 3;
if (amount < n * 100) {
    alert("Insufficient Balance!")
}
else {
    alert("Booking successfull!")
}