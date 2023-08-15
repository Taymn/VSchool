let form = document.getElementById("Travel");
let submit = document.getElementById("submit");
let query = document.querySelector;

function formAlert(){
    // First name (text input)
    const firstName = form.elements["firstName"].value;
    // Last name (text input)
    const lastName = form.elements["lastName"].value;
    // Age (number input)
    const age = form.elements["age"].value;
    // Gender (radio buttons with 2 or more options)
    const gender = form.elements["gender"].value;
    // Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
    const location = form.elements["location"].value;
    // Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
    const diet = []
    if (form.elements["vegetarian"].checked){
        diet.push(document.getElementById("vegetarian").value);
    }
    if (form.elements["kosher"].checked){
        diet.push(document.getElementById("kosher").value);
    }
    if (form.elements["lactose-free"].checked){
        diet.push(document.getElementById("lactose-free").value);
    }
    // Submit button that sends an Alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet +".");
}

submit.addEventListener("click", formAlert);

