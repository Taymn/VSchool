// innerHTML vs textContent
var myList = document.getElementById("my-list")
myList.innerHTML += "<li>3</li>"
myList.innerHTML += "<li>4</li>"

document.body.innerHTML += "<p id= 'paragraph'>This is JS!</p>"
document.getElementById("paragraph").style.textAlign = "center"