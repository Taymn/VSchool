const form = document["my-form"]

// Submit event

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    form.firstName.value = ""
    form.lastName.value = ""
    
    // console.log(firstName+ " " +lastName)
    // 1 <h1></h1>
    const h1 = document.createElement('h1')
    //2. <h1> firstName lastName </h1>
    h1.textContent = firstName + " " + lastName
    //3. Append
    document.getElementsByTagName("body")[0].append(h1)

})