// Store the wallet amount to your local storage with key "amount"


function addToWallet() {
    let amount = document.getElementById("amount").value;
    localStorage.setItem("amount", amount)
    
    let amtData = localStorage.getItem("amount") + amount;
    console.log(amtData)
    
    let wallet = document.getElementById("wallet")
    wallet.innerText = amount;
}