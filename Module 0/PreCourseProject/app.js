var button = document.getElementById("button")
var main = document.getElementById("main")
// console.log(main)

function handleButtonClick() {
    // console.log("The button was clicked")
}
button.addEventListener("click", handleButtonClick)
   
button.addEventListener("click", function() {
    if (main.style.visibility === "visible") {
        main.style.visibility = "hidden"
    } else {
        main.style.visibility = "visible"
    }
})

// array, access with bracket notation

var elements = ["h1", "h2", "button"];
console.log(elements[2]);

// object, access with DOT notation

var courseProject = {
    Title: "Capstone",
    Body: {
        Header: "h1",
        Main: "h2",
        Footer: "button"
    }
}

console.log(courseProject.Body.Main);

// For Loop / While Loop

// for (var count = 0; count < 10; count++) {
//     if(count >= 3){
//         console.log("leave my world")
//     }
// } 

function onClick() {
    count ++;
    document.getElementById("count").innerHTML = count;
    if(count >= 3){
        console.log("leave my world")
    }    
}   
