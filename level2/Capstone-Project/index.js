
// const axios = require("axios");
// Get All
// axios.get("https://api.vschool.io/AdamTaylor/todo")
//   .then(response => console.log(response))
//   .catch(error => console.log(error))

//Project JS
// const todos = axios.get('https://api.vschool.io/AdamTaylor/todo/');

//Call the function to fetch and display the todo data on page load

//for loop function get request

function fetchTodoData() {
    axios.get("https://api.vschool.io/AdamTaylor/todo/")
        .then(response => {
            document.getElementById("list").textContent = ""
            for (let i = 0; i < response.data.length; i++) {
                const h1 = document.createElement('h1')
                h1.setAttribute("class", "todo-item-title")
                const para = document.createElement('p')
                para.setAttribute("class","todo-item-details")
                const desr = document.createElement('p')
                desr.setAttribute("class","todo-item-details")
                const check = document.createElement("input")
                const deleBtn = document.createElement("button")
                const newDiv = document.createElement("div")
                newDiv.className = "todo-item"
                const label = document.createElement('label')
                label.setAttribute
                label.textContent = "Completed"
                newDiv.appendChild(h1)
                newDiv.appendChild(para)
                newDiv.appendChild(desr)
                if (response.data[i].imgUrl) {
                    const img = document.createElement('img')
                    img.setAttribute("src", response.data[i].imgUrl)
                    img.setAttribute("class", "todo-item-img")
                    newDiv.appendChild(img)
                }
                h1.textContent = response.data[i].title
                para.textContent = response.data[i].price
                desr.textContent = response.data[i].description
                check.setAttribute("class", "checkbox")
                check.setAttribute("type", "checkbox")
                deleBtn.setAttribute("class", "todo-item-button")
                deleBtn.textContent = "Delete"
                document.getElementById('list').appendChild(newDiv)
                check.addEventListener('click',function(){toggleCompleted(response.data[i], newDiv)})
                
                if(response.data[i].completed === true){
                    h1.style.textDecoration = "line-through";
                    para.style.textDecoration = "line-through";
                    desr.style.textDecoration = "line-through";
                    check.checked = true
                }
                newDiv.appendChild(label)
                label.appendChild(check)
                newDiv.appendChild(deleBtn)

                let todoId = response.data[i]._id
                deleBtn.addEventListener("click", function () {
                    deleTodo(todoId)
                })
            }
        })
        .catch(error => {
            console.error("An error occured while fetching data:", error);
        });
}

fetchTodoData();

// Post request
const todoForm = document.form
todoForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const newTodo = {
        title: form.title.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
    }
    console.log(newTodo)
    axios.post('https://api.vschool.io/AdamTaylor/todo/', newTodo).then(response => {
        // call for loop function

        form.title.value = ""
        form.price.value = ""
        form.description.value = ""
        form.imgUrl.value = ""
        fetchTodoData()

        console.log(response.data);
    }).catch(error => {
        console.log(error)
    });
})

// Delete request
function deleTodo(todoId) {
    console.log(todoId)
    axios.delete('https://api.vschool.io/AdamTaylor/todo/' + todoId).then(response => {
        console.log(response.data);
        fetchTodoData();
    }).catch(error => {
        console.log(error)
    });
}

function toggleCompleted(data,item) {
    const editedTodo = {completed: !data.completed}
    console.log(data)
    axios.put('https://api.vschool.io/AdamTaylor/todo/'+data._id, editedTodo).then(response => {
    console.log(response.data);
    fetchTodoData();
  }).catch(error => {
    console.log(error)
  });
}

//Final Assessment Code Challenge
//Get Request

// axios.get("https://swapi.dev/api/people/")
// .then(res=>console.log(res))
// .catch(err=>console.log(err))