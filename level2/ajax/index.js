// XMLHttpRequest

// how do we create a request (xhr)
// what parts of this object are important for our request


// xhr.onreadystatechange
// xhr.readyState
// xhr.status

// const xhr = new XMLHttpRequest()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){

//     }
// }

// xhr.readyState  
// 1 - request has been sent
// 2 
// 3
// 4

// xhr.status
// 200
// 404 - not found
// 201
// 500

// xhr.open()
// xhr.send()

// url: https://swapi.co/api/people/1

const xhr = new XMLHttpRequest()
// method  // url                     // async?
xhr.open("GET", "https://swapi.dev/api/people/", true)
xhr.send()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        // console.log(data.results)
        // consolelog(data)
        showData(data.results)
    }
}


function showData(arr) {
    for (var i = 0; i < arr.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}