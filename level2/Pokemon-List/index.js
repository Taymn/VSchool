const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {

        const JSONdata = xhr.responseText;
        const data = JSON.parse(JSONdata);
        console.log(data.objects[0].pokemon)
        showData(data.objects[0].pokemon)
      
    }
}

function showData(arr) {
    for (let i = 0; 0 < arr.length; i++) {
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
        h2.textContent = arr[i].resource_uri
        document.body.appendChild(h2)
    }
}