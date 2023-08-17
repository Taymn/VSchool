
//track button clicks on the page
const counter = document.getElementById("counter");


//capture or retrieve from local storage
let count = parseInt(localStorage.getItem("counter")) || 0

window.addEventListener("click",function(){

    //display click count to the user
    count+=1;
    counter.innerHTML = "Count: "+count
    
    //Save to storage
    window.localStorage.setItem("counter", count);    
});
    
//keep number of clicks on screen after site is refreshed using localStorage [persistant] or sessionStorage [non persistant]

