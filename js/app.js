document.addEventListener("DOMContentLoaded", function () {
    console.log("AURA successfully loaded.");

    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("click", function () {
            alert("Welcome to AURA!\nAI Banking Assistant is under development.");
        });
    }
});
function calculateLoan() {

    let amount = document.querySelectorAll("input")[0].value;
    let rate = document.querySelectorAll("input")[1].value;
    let months = document.querySelectorAll("input")[2].value;

    if(amount=="" || rate=="" || months==""){
        alert("Please fill all fields.");
        return;
    }

    let total = amount * (1 + (rate/100));

    let monthly = total / months;

    alert("Monthly Payment: $" + monthly.toFixed(2));

}
function addCustomer(){

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if(name=="" || phone==""){
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = name + " - " + phone;

    document.getElementById("customerList").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}