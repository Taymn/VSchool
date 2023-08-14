const sumForm = document["sum-form"]
console.log(sumForm)
const subForm = document["sub-form"]
const timesForm = document["times-form"]



sumForm.addEventListener("submit", function(event){
    event.preventDefault()

    const numOne = sumForm.numOne.value
    const numTwo = sumForm.numTwo.value
    sumForm.numOne.value = ""
    sumForm.numTwo.value = ""
    const h1 = document.createElement("h1")
    h1.textContent = `${numOne} + ${numTwo} = ${parseInt(numOne) + parseInt(numTwo)}`
    document.getElementsByTagName("body")[0].append(h1)
    console.log(numOne+" + "+numTwo)
})    

subForm.addEventListener("submit", function(event){
    event.preventDefault()

    const numThree = subForm.numThree.value
    const numFour = subForm.numFour.value
    subForm.numThree.value = ""
    subForm.numFour.value = ""
    const h2 = document.createElement("h2")
    h2.textContent =`${numThree} - ${numFour} = ${numThree - numFour}`
    document.getElementsByTagName("body")[0].append(h2)
    console.log(numThree+" - "+numFour)
})

timesForm.addEventListener("submit", function(event){
    event.preventDefault()

    const numFive = timesForm.numFive.value
    const numSix = timesForm.numSix.value
    timesForm.numFive.value = ""
    timesForm.numSix.value = ""
    const h3 = document.createElement("h3")
    h3.textContent = `${numFive} * ${numSix} = ${(numFive * numSix)}`
    document.getElementsByTagName("body")[0].append(h3)
    console.log(numFive+" * "+numSix)
})

// // Styling

// var div = getElementsByClassName("div")
// div.style.padding= "10px"
// div.style.textAllign= "center"

// var form1 = getElementsById("sum-form")
// var form2 = getElementsById("sub-form")
// var form3 = getElementsById("times-form")

// form1.style.backgroundColor= "red"
// form2.style.backgroundColor= "blue"
// form3.style.backgroundColor= "green"

// var h1 = document.getElementById("h1")
// var h2 = document.getElementById("h2")
// var h3 = document.getElementById("h3")

// h2.style.backgroundColor= "Green"
// h3.style.backgroundColor= "Blue"
// h3.style.backgroundColor= "Red"



