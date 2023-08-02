//Bronze

const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
document.getElementById("header").appendChild(h1);
h1.className = "header";

const subTitle = document.createElement("span");
document.getElementById("header").appendChild(subTitle);
subTitle.innerHTML = '<span class= "name">Adam</span> wrote the JavaScript';
subTitle.className = "header";
subTitle.style.textAlign = "right";




//Silver

const messages = document.getElementsByClassName("message");

const messageDiv = document.getElementById('messages')

messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "you're great";

document.getElementById("clear-button").addEventListener('click', function () {
    // for (var i = 0; i < messages.length; i--) {
    //     messages[i].remove();
    // }
    messageDiv.remove();
})

/* <select id="theme-drop-down">
<option value="theme-one">blue/brown</option>
<option value="theme-two">red/black</option>
<div class="message right">
 <div class="message left">
 .right {
    align-self: flex-end;
    background-color: lightblue;
}

.left {
    align-self: flex-start;
    background-color: burlywood;
}
</select> */

document.getElementById("theme-drop-down").addEventListener('click', function () {
    console.log("Click Me!")
    if (document.getElementById("theme-drop-down").value === 'theme-one') {
        document.getElementById('first message left').style.backgroundColor = "burlywood";
        document.getElementById('first message right').style.backgroundColor = "lightblue";
        document.getElementById('second message left').style.backgroundColor = "burlywood";
        document.getElementById('second message right').style.backgroundColor = "lightblue";
        // console.log("Theme 1")

    } else if (document.getElementById("theme-drop-down").value === 'theme-two') {
        document.getElementById('first message left').style.backgroundColor = "red";
        document.getElementById("first message right").style.color = "white"
        document.getElementById('first message right').style.backgroundColor = "black";
        document.getElementById('second message left').style.backgroundColor = "red";
        document.getElementById('second message right').style.backgroundColor = "black";
        // console.log("Theme 2")

        // /*Not working by Class Name (left and right)

        // }else if (document.getElementById("theme-drop-down").value === 'theme-two') {
        //     document.getElementsByClassName('div.className.left').style.backgroundColor = "red";
        //     document.getElementsByClassName('div.className.right').style.backgroundColor = "black";
        //     document.getElementsByClassName('div.className.left').style.backgroundColor = "red";
        //     document.getElementsBy('div.className.right').style.backgroundColor = "black";
        //     console.log("Theme 2")*/
    }
})


var left = document.getElementsByClassName("left")
for (var i = 0; i < left.length; i++) {
    console.log(left[i].innerText)
    //     if (function () {
    //         left.style.backgroundColor = "burlywwod")
    //     }else if (function () {
    //         left.style.backgroundColor = "burlywwod")

    //     })
}

var right = document.getElementsByClassName("right")
for (var i = 0; i < right.length; i++) {
    console.log(right[i].innerText)
    //     if (function () {
    //         left.style.backgroundColor = "lightblue";
    //     }else if (function ()) {
    //         left.style.backgroundColor = "black";
    //     })
}

    //Gold

