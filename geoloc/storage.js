// sessionStorage is not shared across tabs, localStorage is...

localStorage.name = 'Asaad'; // Store information 
var name = localStorage.name; // Access information 
var items = localStorage.length; // 1

console.log(name)
console.log(items)

sessionStorage.name1 = "Paul'o"; // Store information 
var name1 = sessionStorage.name1; // Access information 
var items1 = sessionStorage.length; // 1

console.log(name1)
console.log(items1)

// document.localStorage.other = "Test Other"
window.localStorage.other = "Test Other"