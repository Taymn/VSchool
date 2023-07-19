const form = document["addItem"];
let list = document.getElementById("list");  /*list feild*/
let title = document.getElementById("title").value; /*input field*/

/* Submit Event */

form.addEventListener("submit", (event)=>{
    console.log("help")

    event.preventDefault()/*prevents page refresh*/

    let input = document.getElementById("title").value;
    document.getElementById("title").value = ""
    var newLi = document.createElement("li")
    var edBtn = document.createElement("button")
    var deleBtn = document.createElement("button")

    newLi.textContent = input
    newLi.setAttribute("class","#list")
    list.append(newLi)  
    deleBtn.setAttribute("class","#list")
    deleBtn.appendChild(document.createTextNode(input.value))
    edBtn.setAttribute("class","#list")
    edBtn.appendChild(document.createTextNode(input.value))

   

})
