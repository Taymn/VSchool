 /*Forms Lesson 1*/
const form = document["my-form"]

/* Submit event */

form.addEventListener("submit", function(event){
    event.preventDefault()/*prevents page refresh*/

    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value

    form.firstName.value = "";
    form.lastName.value = "";
    form.age.value = "";

    /*/Capture & Add to Form*/
    /*/ 1. <h1></h1>*/
    const h1 = document.createElement("h1")
    /*2. <h1>Adam Taylor</h1>*/
    h1.textContent = firstName +" "+ lastName+" is a "+ age+" year old "
    /*3. Append*/
    document.getElementsByTagName("body")[0].append(h1)

    console.log(firstName +" "+ lastName)
    console.log(age)
})



/* Lesson 2
    Input types:
    Text:placeholders
        Validate: required
        Number
        Telephone
        Password
        Date
        Color
    
    Radio*/

    /*const form = document["my-form"]*/

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
const gender = form.gender.value
const entertainment = form.entertainment.value

form.gender.value = "";
form.entertainment.value = "";

    const checkedInputs = []
    
    for(let i = 0; i < form.entertainment.length; i++){
        if(form.entertainment[i].checked){
            checkedInputs.push(form.entertainment[i].value)
        }
    }

    /*Capture & Add to Form*/
    /* 1. <h1></h1>*/
    const h1 = document.createElement("h1")
    /*2. <h1>Element Name</h1>*/
    h1.textContent = gender + " that likes " + checkedInputs
    /* 3. Append*/
    document.getElementsByTagName("body")[0].append(h1)

    console.log(checkedInputs)
    console.log(entertainment)
})