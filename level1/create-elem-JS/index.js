var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("my-list")
// myList.append(newLi)
myList.prepend(newLi)

/*
 * Challenge:
 * 
 * Add a paragraph after the existing unordered list with any text you want inside.
 * Do this completely in JavaScript!
 */

var newP = document.createElement("p")
newP.textContent = "Welcome to JS"
document.body.append(newP)

newP.style.textAlign = "center"
newP.style.fontSize = "50px"
