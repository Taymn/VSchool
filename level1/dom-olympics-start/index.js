const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

const subTitle = document.createElement("span");
document.getElementById("main").appendChild(subTitle);
subTitle.innerHTML = 'Adam wrote the JavaScript';

const messages = document.getElementsByClassName("message");