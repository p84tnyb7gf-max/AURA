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

    li.innerHTML = name + " - " + phone + ' <button onclick="this.parentElement.remove()">Delete</button>';

    document.getElementById("customerList").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}
function askAI(){

    let question = document.getElementById("question").value;

    if(question==""){
        alert("Please enter a question.");
        return;
    }

    document.getElementById("answer").innerHTML =
    "<h3>AURA Response</h3><p>Thank you for your question.</p><p><b>" +
    question +
    "</b></p><p>⚠ AI integration is coming soon.</p>";

}
function searchCustomer(){

    let search = document.getElementById("search").value;

    if(search==""){
        alert("Please enter a customer name.");
        return;
    }

    document.getElementById("searchResult").innerHTML =
    "🔍 Searching for: <b>" + search + "</b><br>Customer database will be available in Version 2.0.";

}