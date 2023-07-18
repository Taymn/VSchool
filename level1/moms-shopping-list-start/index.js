const form = document["addItem"];
let list = document.getElementById("list");  /*list feild*/
let title = document.getElementById("title").value; /*input field*/

/* Submit Event */

form.addEventListener("submit", (event)=>{
    event.preventDefault()/*prevents page refresh*/
    var newList = document.createElement("li")
    newList.textContent = title.value;
    
    list.appendChild(newList);
})


