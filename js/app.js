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

/* var x = 10;
function main() {
	console.log("<br>x1 is " + x); // undefined -- how???
	x = 20;
	console.log("<br>x2 is " + x); // 20
	if (x > 0) {
		let x = 30; // x=30;
		console.log("<br>x3 is " + x); // 30
	}
	console.log("<br>x4 is " + x); // 30 -- no block scope for the if statement apparently when we used the var keyword
	                               // if you use let, then block scope is a real thing :-)
	var x = 40; // x=40;
	var f = function(x) {
		console.log("<br>x5 is " + x);  // 40
	}
	f(50); // 50
	console.log("<br>x6 is " + x); // 40
}
main();
console.log("<br>x7 is " + x); // 10 */

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
