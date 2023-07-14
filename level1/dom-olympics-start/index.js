//Peliminaries

const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

const subTitle = document.createElement("span");
document.getElementById("body").appendChild(subTitle);
subTitle.innerHTML = 'Adam wrote the JavaScript';


//Bronze

const messages = document.getElementsByClassName("message");

messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "you're great";

document.getElementById("clear-button").addEventListener('click', function (){
    console.log("click me")
})