// resolve - then
// reject  - catch

// thenable

function flipCoin(){
    return new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * 2)
        
        if(randomNum === 0){
            resolve("HEADS")
        } else if(randomNum === 1){
            reject("TAILS")
        }
        
    })
}


// flipCoin()
//     .then(response => console.log("RESOLVED: " + response))
//     .catch(error => console.log("REJECTED: " + error))
    
// Promise.resolve("Something").then(response => console.log(response))


function getData(){
    return new Promise((resolve) => {
        setTimeout(() => resolve("HELLO WORLD"), 3000)
    })
}

getData()
    .then(res => console.log(res))
    .catch(err => console.log(err))
