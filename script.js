// Alert message for welcome
alert("welcome to my  website");
let userName = prompt("Please enter your name:");
if (userName) {
  alert("Hello, " + userName + "! Welcome to my website.");
}
let userAge = prompt("Please enter your age:");
if (userAge) {
  alert("You are " + userAge + " years old.");
}
function changetext() {
    document.getElementById("title").innerHTML = "You clicked the button!";
}