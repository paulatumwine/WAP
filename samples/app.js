/*var a = 5;
function b(){
	console.log('function is called');
};

console.log (a);   // 5
b();   // function is called*/


/*console.log (a);   // undefined
b();   // function is called

var a = 5;
function b(){
	console.log('function is called');
};*/


/*function a(){
	console.log(x); // consult Global for x and print 20 from Global
}

function b(){ 
	var x = 10; 
	a(); // consult Global for a
} 

var x = 20; 
b();*/


/*function b(){
	function a(){
		console.log(x);
	}
	var x = 10;
	a();
}

var x = 20;
b(); // 10*/

/*function f() {
	var a = 1, b = 20, c;
	console.log(a + " " + b + " " + c); // 1 20 undefined

	function g() {
		var b = 300, c = 4000;
		console.log(a + " " + b + " " + c); // 1 300 4000
		a = a + b + c;
		console.log(a + " " + b + " " + c); // 4301 300 4000
	}

	console.log(a + " " + b + " " + c); // 1 20 undefined
	g();
	console.log(a + " " + b + " " + c); // 4301 20 undefined
}
f();*/

var x = 10;
function main() {
	console.log("<br>x1 is " + x); // undefined -- how???
	x = 20;
	console.log("<br>x2 is " + x); // 20
	if (x > 0) {
		let x = 30; // x=30;
		console.log("<br>x3 is " + x); // 30
	}
	console.log("<br>x4 is " + x); // x4 is 20 with let, 30 with var -- no block scope for the if statement apparently when we used the var keyword
	                               // if you use let, then block scope is a real thing; even for if blocks!!! :-)
	var x = 40;
	var f = function(x) {
		console.log("<br>x5 is " + x);  // 50
	}
	f(50); // 50
	console.log("<br>x6 is " + x); // 40
}
main();
console.log("<br>x7 is " + x); // 10

/* sayHi(); 
function sayHi() { 
	console.log('Hi'); 
} 

sayHii();
var sayHii = function() { 
	console.log('Hi'); 
};  */

// by reference (all objects) 
/* var a = { fname: 'George' }; 
var b; 

b = a; 
a.fname = 'Mike'; 
console.log(a.fname); // Mike
console.log(b.fname); // Mike

a.fname = 'Asaad'; 
console.log(a.fname); // Asaad
console.log(b.fname); // Asaad

a = { fname: 'George' };
console.log(a.fname); // George
console.log(b.fname); // Asaad */

/* function findMax() { 
	var i; 
	var max = -Infinity; 
	for (i = 0; i < arguments.length; i++) { 
		if (arguments[i] > max) { 
			max = arguments[i]; 
		} 
	} 
	return max; 
} 

var x = findMax(1, 123, 500, 115, 44, 88); // 500
console.log(x)
var x = findMax(5, 32, 24); // 32
console.log(x) */


/* function sum(x,y, ...more){
	// “more” is array of all extra passed params
	var total = x + y; 
	if(more.length > 0){ 
		for (var i=0; i<more.length; i++) { 
			total += more[i]; 
		} 
	} 
	console.log(total); 
} 

sum(4,4); // 8 
sum(4,4,4); // 12 */

/* function calc (multiplier, base, ...numbers) { 
	var val = numbers.reduce((accumulator, num) => accumulator + num, base); 
	return multiplier * val;
} 

var total = calc(2, 6, 10, 8, 9);
console.log(total); */


/* function log(){ 
	console.log("No Arguments"); 
} 

function log(x){ 
	console.log("1 Argument: " + x); 
} 

function log(x, y){ 
	console.log("2 Arguments: " + x + ", " + y); 
} 

log(); // 2 Arguments: undefined, undefined 
log(5); // 2 Arguments: 5, undefined 
log(5, 10); // 2 Arguments: 5, 10 */


/* function log(x=10, y=5){ 
	console.log( x + ", " + y); 
}

log(); // 10, 5 
log(5); // 5, 5 
log(5, 10); // 5, 10 */

/* console.log(1); 
var a = setTimeout(function(){ console.log(2); }, 1000); 
var b = setTimeout(function(){ console.log(3); }, 0); 
console.log(4); 
 */

// An Object 
var course = { 
	coursename: 'Default', 
	register: function() { 
		return 'Register ' + this.coursename; 
	} 
}; 
var mwp = Object.create(course); 
mwp.coursename = 'MWP';
mwp.other = 'General';
console.log(mwp); // Object {coursename: "MWP"} 
console.log(mwp.__proto__); // course Object 
console.log(course.prototype); // undefined 
console.log(mwp.prototype); // undefined
console.log(mwp.register()); // Register MWP



 // By convention we use capital first letter for function constructor 
function Course (coursename){ 
	this.coursename = coursename; 
	console.log('Function Constructor Invoked!'); // no return this
} 
Course.prototype.register = function(){ 
	return 'Register ' + this.coursename; 
} 
var wap = new Course('WAP'); // Function Constructor Invoked! 

console.log(wap); // Course {coursename: "WAP"} 
console.log(wap.__proto__); // Course.prototype
console.log(wap instanceof Course); // true 
console.log(Course.prototype.register); // function(){ ... }
console.log(wap.register()); // Register WAP


const person = {
	name: "",
	dob: new Date(),
	age: 0,
	getName: function() {
		return name
	},
	setName: function(nm) {
		this.name = nm
	}
}
console.log(`Person name is ${person.name}\nAge is ${person.age}`)

const john = Object.create(person)
john.setName("John")
john.age = 21
john.dob = new Date(1998, 10, 9)
console.log(`Person name is ${john.name}\nAge is ${john.age}`)

const employee = Object.create(person)
employee.salary = 0.0
employee.hireDate = new Date()
employee.doJob = function(jobTitle) {
	console.log(`${this.name} is a ${jobTitle} who earns $${this.salary} in salary`)
}

const anna = Object.create(employee)
anna.setName("Anna")
anna.age = 25
anna.dob = new Date(1995-12-3)
anna.salary = 100000
anna.doJob("Programmer")


function Person(){ 
	console.log(this); 
	var year = '2016'; 	
	this.university = 'MUM'; 
	return this; // optional, implicit if left off
} 
var faculty = new Person(); // Person {university: "MUM"} – no year!
Person.prototype.greet = function(){ // modifies __proto__ of all Person objs
	return 'Hi ' + this.university; 
} 
console.log(faculty.greet()); // "Hi MUM"


function a(){ 
	console.log(this); 
} 
var b = { 
	log: function(){ 
		console.log(this); 
	} 
} 
console.log(this); // this generally is window object
a(); // a() is called by global window object (a is on window obj)
b.log(); // log() is called by b object (log is on window obj)


function ab() { 
	this.newvariable = 'hello'; 
}
// console.log(newvariable); // ReferenceError: newvariable is not defined(…)
ab(); // this = window
console.log(newvariable); // hello


var a = { 
	name: '', 
	log: function() { 
		this.name = 'Hello'; 
		console.log(this.name); // "Hello "
		var setFrench = function(newname) { 
					 this.name = newname;
				} 
		setFrench('Bonjour'); 
		console.log(this.name); // "Hello"
	} 
} 
a.log();

var a = { 
	name: '', 
	log: function() { 
		var self = this; // self = a Object
		self.name = 'Hello'; 
		console.log(self.name); // Hello
		var setFrench = function(newname) { 
					self.name = newname; 
				} 
		setFrench('Bonjour'); 
		console.log(self.name); // Bonjour
	} 
} 
a.log();


/* const org = { 
	addEmployee: function(){ 
		console.log(this)
		var ps = document.getElementById('one'); 
		ps.click((emp)=>{
			this.selectManager(emp)
			console.log(this)
		}); 
	},
	selectManager: function(emp){} 
}; 

// 1st this = org 
// 2nd this = org 
org.addEmployee(); 

const addOrgEmployee = org.addEmployee; 
// 1st this = window 
// 2nd this = window 
addOrgEmployee(); */


var count = 99
let counter = {
	count: 0,
	increment() {
		var count = 10;
		setTimeout(() => {console.log(++this.count);}, 1000)
	}
}
let test = counter.increment;
test()

counter.increment()
