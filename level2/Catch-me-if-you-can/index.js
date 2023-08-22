// 1a)
function sum(x, y) {
    //check data types first and throw error
    if (typeof x !== "number" || typeof y !== "number") {
        throw "you have an error"
    } else {

       console.log(x + y);
    }
}
try {
    sum(1, 2)
} catch (err) {
/* 1b) */        console.log(err)
}
// console.log(sum(1, 2))

/* 2a) */

var user = { username: "sam", password: "123abc" };
function login(username, password) {
    //check credentials
    if (username !== "sam" || password !== "123abc") {
        throw "login unsuccessful"
    } else {
        console.log("login successful")
    }
}
// console.log(login("sam", "123abc"))
// console.log(login("sam", "123bbc"))

/* 2b */
try {
    login("sam", "123abc")
} catch (err) {
    console.log("error")
} finally {
    // console.log("success")
}

try {
    login("andy", "123abc")
} catch (err) {
    console.log(err)
} finally {
    // console.log("success")
}