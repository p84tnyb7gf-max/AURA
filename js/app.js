document.addEventListener("DOMContentLoaded", function () {
    console.log("AURA successfully loaded.");

    const button = document.querySelector("button");

    if (button) {
        button.addEventListener("click", function () {
            alert("Welcome to AURA!\nAI Banking Assistant is under development.");
        });
    }
});