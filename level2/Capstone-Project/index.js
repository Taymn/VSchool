
// const axios = require("axios");
// Get All
// axios.get("https://api.vschool.io/AdamTaylor/todo")
//   .then(response => console.log(response))
//   .catch(error => console.log(error))

//Project JS
// const todos = axios.get('https://api.vschool.io/AdamTaylor/todo/');

// Post request
const todoForm = document.form
todoForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const newTodo = {
        title: form.title.value,
        price: form.price.value,
        description: form.description.value,
        imgURL: form.imgURL.value
    }
    console.log(newTodo)
    axios.post('https://api.vschool.io/AdamTaylor/todo/', newTodo).then(response => {
        // call for loop function

        form.title.value = ""
        form.price.value = ""
        form.description.value = ""
        form.imgURL.value = ""
        fetchTodoData()

        console.log(response.data);
    }).catch(error => {
        console.log(error)
    });
})

//for loop function get request

function fetchTodoData() {
    axios.get("https://api.vschool.io/AdamTaylor/todo/")
        .then(response => {
            document.getElementById("list").textContent = ""
            for (let i = 0; i < response.data.length; i++) {
                const h1 = document.createElement('h1')
                const para = document.createElement('p')
                const desr = document.createElement('p')
                const check = document.createElement("input")
                const deleBtn = document.createElement("button")
                const newDiv = document.createElement("div")
                if (response.data[i].imgUrl) {
                    const img = document.createElement('img')
                    img.setAttribute("src", response.data[i].imgUrl)
                    img.setAttribute("class", "input")
                    newDiv.appendChild(img)
                }
                h1.textContent = response.data[i].title
                para.textContent = response.data[i].price
                desr.textContent = response.data[i].description
                check.setAttribute("class", "checkbox")
                check.setAttribute("type", "checkbox")
                deleBtn.setAttribute("class", "deleteButton")
                deleBtn.textContent = "Delete"
                const label = document.createElement('label')
                label.textContent = "Completed"
                label.appendChild(check)
                newDiv.appendChild(h1)
                newDiv.appendChild(para)
                newDiv.appendChild(desr)
                newDiv.appendChild(label)
                newDiv.appendChild(deleBtn)
                document.getElementById('list').appendChild(newDiv)
                check.addEventListener('click',function(){toggleCompleted(response.data[i], newDiv)})
                
                if(response.data[i].completed === true){
                    newDiv.style.textDecoration = "line-through"
                    check.checked = true
                }

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

//Call the function to fetch and display the todo data on page load
fetchTodoData();

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
