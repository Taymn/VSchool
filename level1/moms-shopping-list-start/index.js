const form = document["addItem"];
let list = document.getElementById("list");  /*list feild*/
let title = document.getElementById("title").value; /*input field*/

/* Submit Event */

form.addEventListener("submit", (event)=>{

    event.preventDefault()/*prevents page refresh*/

    let input = document.getElementById("title").value;
    document.getElementById("title").value = ""
    var newLi = document.createElement("li")
    var newDiv = document.createElement("div")
    
    var edBtn = document.createElement("button")
    edBtn.innerText ="edit"
    edBtn.setAttribute("class", "editButton")

    edBtn.addEventListener("click", function(){
        newLi.inputMode()
    })

    var deleBtn = document.createElement("button")
    deleBtn.innerText = "X"
    deleBtn.setAttribute("class", "deleteButton")

    // removes parent and children
    deleBtn.addEventListener("click", function(){
        newLi.remove()
    })

    newLi.textContent = input
    newLi.setAttribute("class","listItem")
    newDiv.setAttribute("class","listContainer")

    list.appendChild(newLi)
    newLi.appendChild(newDiv)
    newDiv.appendChild(edBtn)
    newDiv.appendChild(deleBtn)
})
