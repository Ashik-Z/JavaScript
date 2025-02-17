// let userName = window.prompt("Enter your name: ");
// console.log(`Hello ${userName}.`);

document.getElementById("mySubmit").onclick = function() {
    let username = document.getElementById("myInput").value;
    console.log(`Hello ${username}.`);
    document.getElementById("myH1").textContent = `Hello ${username}.`;
}