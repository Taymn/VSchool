var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// 1. Returns a list of everyone older than 18
//  2. sorted alphabetically by last name
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.

/* 1. */function sortedOfAge(arr) {
    return arr.filter(arr => arr.age >= 18 ? arr : null)
}
/* 2. */function alphabetical(arr) {
    return arr.sort((a, b) => ((a.lastName).localeCompare(b.lastName)))
}
/* 3. */function toDOM(arr){
    return arr.map(arr =>(`<li>${arr.firstName} ${arr.lastName} is ${arr.age}</li>`))
}

console.log(toDOM(alphabetical(sortedOfAge(peopleArray))));


