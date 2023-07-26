var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var arr = []  //result variable
forception () //function call


function forception(){
    // your code here
    for (var i = 0; i < people.length; i++){
        // console.log(people[i])
        arr.push(people[i])
        for (var j = 0; j < alphabet.length; j++){
            // console.log(alphabet[j])
            arr.push(alphabet[j])
        }
    }
    console.log(arr)
}