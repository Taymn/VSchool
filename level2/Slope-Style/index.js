// 1.

function collectAnimals(...collectAnimals) {
    console.log(collectAnimals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// 2.

function combineFruit(fruit, sweets, vegetables) {
    return {
        fruit: fruit,
        sweets: sweets,
        vegetables: vegetables
    };
}

const foodObject = combineFruit(
    ["apple", "pear"],
    ["cake", "pie"],
    ["carrot"]);

console.log(foodObject)
//  => {
// fruit: ["apple", "pear"],
//     sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
// }

//3

function parseSentence({ location, duration }) {
    return `We're going to have a good time in ${location} for ${duration}`
}

const itinerary = parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
});

console.log(itinerary)

//4

function returnFirst(items) {
    // const firstItem = items[0]; /*change this line to be es6*/
    const [firstItem] = items;
    return firstItem
}

//5

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    const [firstFav, secondFav, thirdFav] = arr;
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;

}

console.log(returnFavorites(favoriteActivities));

//6

function combineAnimals(...arrays) {
    return [...arrays.flat()]
    ;

}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

//7

function product(a, b, c, d, e) {
    var numbers = [a,b,c,d,e];
  
    // return numbers.reduce(function(acc, number) {
    //   return acc * number;
    // }, 1)
    const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1);
}

//8

function unshift(array, a, b, c, d, e) {
    // return [a, b, c, d, e].concat(array);
    const unshift = (array,...elements) => [...elements, ...array];
  }

//9

function populatePeople(names){
    return names.map(function(name){
        const [firstName, lastName] = name.split(" ");
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

const people = populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])

console.log(people)