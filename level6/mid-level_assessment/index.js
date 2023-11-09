// ```jsx
// Code Challenges:
// Extract Initials:
// Write a function called extractInitials that takes an array of full names and returns a new array containing only the initials of each name.
// ```
function extractInitials(names) {
    var initialsArray = [];
    for (var i = 0; i < names.length; i++) {
        var fullName = names[i].split(' ');
        var initials = '';
        for (var j = 0; j < fullName.length; j++) {
            initials += fullName[j].substring(0, 1).toUpperCase();
        }
        initialsArray.push(initials);
    }
    return initialsArray
  };


const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']
// ```jsx
// ​
// Filter Object Array by Property:
// Write a function called filterByProperty that takes an array of objects and a property name as input. The function should return a new array containing only the objects that have a specific value for the given property.
// ```
function filterByProperty(objects, propertyName, propertyValue) {
  return objects.filter(object => object[propertyName] === propertyValue)
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
console.log(filteredByCountry);