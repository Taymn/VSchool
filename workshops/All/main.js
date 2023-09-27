// const myPromise = new Promise((resolve, reject) => {
//     // Simulating an asynchronous task
//     setTimeout(() => {
//         const randomValue = Math.random();
//         if (randomValue > 0.5) {
//             resolve(randomValue); // Resolve the promise with a value
//         } else {
//             reject(new Error("Random value is too low.")); // Reject the promise with an error
//         }
//     }, 1000); // This represents a delay before the operation completes
// });

// myPromise
//     .then((result) => {
//         console.log(`Promise resolved with value: ${result}`);
//     })
//     .catch((error) => {
//         console.error(`Promise rejected with error: ${error.message}`);
//     });

//     console.log(myPromise)

// Promise.resolve('goodbye').then(res => console.log(res))

// console.log('hello')


const axios = require('axios');

function fetchData(id) {
    return axios.get(`https://swapi.dev/api/people/${id}`)
    // .then((response) => response.data.name)
    .then((response) => response.data)
        // .then((response) => [response.data.name, response.data.birth_year])
        .catch((error) => {
            throw error;
        });
}

// Callback-based dataRequest function
function dataRequest() {
    const info = [];

    fetchData(1)
    .then((data) => {
        // console.log(`${data} recieved`)
        console.log(`${data.name} recieved`)
        // console.log(`${data[0]} recieved`)
        info.push(data);
        return fetchData(2);
    })
    .then((data) => {
            // console.log(`${data} recieved`)
            console.log(`${data.name} recieved`)
            // console.log(`${data[0]} recieved`)
            info.push(data);
            return fetchData(3);
        })
        .then((data) => {
            // console.log(`${data} recieved`)
            console.log(`${data.name} recieved`)
            // console.log(`${data[0]} recieved`)
            info.push(data);
            return fetchData(4);
        })
        .then((data) => {
            // console.log(`${data} recieved`)
            console.log(`${data.name} recieved`)
            // console.log(`${data[0]} recieved`)
            info.push(data);
            return fetchData(5);
        })
        .then((data) => {
            // console.log(`${data} recieved`)
            console.log(`${data.name} recieved`)
            // console.log(`${data[0]} recieved`)
            info.push(data);
            console.log("All data fetched:", info);
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        });
}

dataRequest();

// Async

// async function fetchData(id) {
//     try {
//         const response = await axios.get(`https://swapi.dev/api/people/${id}`);
//         return response.data.name;
//     } catch (error) {
//         throw error.message;
//     }
// }

// async function dataRequest() {
//     try {
//         const data1 = await fetchData(1);
//         console.log("test1")
//         const data2 = await fetchData(2);
//         console.log("test2")
//         const data3 = await fetchData(3);
//         console.log("test3")
//         const data4 = await fetchData(4);
//         console.log("test4")
//         const data5 = await fetchData(5);
//         console.log("test5")

//         return[data1, data2, data3, data4, data5]
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }
// }

// console.log('something happened');

// dataRequest().then(res => console.log(res))