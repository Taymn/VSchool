/**
 * CHALLENGE:
 * 
 * Play around with all the different DOM methods for selecting and modifying elements.
 * 
 * Make sure to read through the `notes.md` file for a recap and some new information regarding using the DOM API
 */

// selecting.Elements

var header1 = document.getElementById("header1")
header1.textContent = "not a header"
console.log(header1);

var list = document.querySelector("ol#list-items > li")
console.log(list);

var list = document.querySelectorAll("ol#list-items > li")
console.log(Array.from(list))

for (var i = 0; i< list.length; i++) {
    list[i].textContent = "** REDACTED **"
}

var items = document.getElementsByClassName("list-items")
for (var i = 0; i < items.length; i++) {
console.log(items[i].innerText)
}

// modding.Elements

var text = document.querySelector("ol#list-items > li").textContent
document.querySelector("#header2").textContent = text

var myList = document.getElementById("navbar")
// console.log(myList.textContent)
// console.log(myList.innerHTML)
myList.innerHTML += "<li>querySelectorAll 4</li>"
var navbar = document.getElementById("navbar")

// console.log(typeof navbar.style)
navbar.style.paddingTop = "16px"
document.body.style.backgroundColor = "lime"

