$(function(){


/*var myCar2 = {
		maxSpeed : 70,
		driver   : "Ann",
		drive    : function(speed, time){
			console.log( speed * time);
		},
		logDriver: function(){
			console.log("driver name is " + this.driver);
		}
};

myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);*/



/*var Car = function(maxSpeed, driver){

	this.maxSpeed = maxSpeed;
	this.driver = driver;
	this.drive = function(speed, time){
			console.log( speed * time);
		};
	this.logDriver = function(){
			console.log("driver name is " + this.driver);
		};
}

var myCar = new Car( 70, "Ninja zsfdhxfg");
var myCar2 = new Car( 40, "Ninja mdfhxzfgan");
var myCar3 = new Car( 30, "Ninja mzdfhkhvujan");
var myCar4 = new Car( 100, "Ninja tikfkyuhjkman");
var myCar5 = new Car( 80, "Ninja mae5yrsern");
var myCar6 = new Car( 90, "Ninja ahbjkn");
var myCar7 = new Car( 110, "Ninja tuhsean");

myCar.drive(30,5);
myCar4.logDriver();*/



function setUpEvents(){

var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){

	if(content.className == "open"){
		content.className = "";
		button.innerHTML = "Show More";
		//shrink the box
	}else{
		content.className = "open";
		button.innerHTML = "Show Less";
		//expand the box
	}
};
};

window.onload = function(){

	setUpEvents();
}






var myMessage = document.getElementById("message");

function showMessage(){

	myMessage.className = "show";

}

setTimeout(showMessage, 2000);






var colourChanger = document.getElementById("colour-changer");
var colours = ["red", "blue", "green", "yellow", "pink"]
var counter = 0;

function changeColour(){

	if(counter>= colours.length){
		counter = 0;
	}

	colourChanger.style.background = colours[counter];
	counter++;

}

var myTimer = setInterval(changeColour, 3000);

colourChanger.onclick = function(){

	clearInterval(myTimer);
	colourChanger.innerHTML = "Timer stopped";  

}







var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function(){

	if(myForm.name.value == ""){
		message.innerHTML = "please enter a name";
		return false;
	} else{
		message.innerHTML = "";
		return true;
	}

};










//UDEMY COURSE





/*
function waitThreeSecond(){
	var ms = 3000+ new Date().getTime();
	while(new Date() < ms){}
	console.log("finished function");
}

function clickHandler(){
	console.log("click event");
}

document.addEventListener('click',  clickHandler);

waitThreeSecond();
console.log("finished execution");*/




/*function greet(name){
	name = name || "<you name>";
	console.log("hello" + name);

}
greet("Tony");
greet();*/




/*var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main Str";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);*/




/*var Tony = {
	firstname : "Tony",
	lastname  : "Alicea",
	address   : {
		street : "111 MAin Str",
		city   : "NY"
	}
};

function greet (person){
	console.log("Hi" + person.firstname);
}

greet(Tony);

greet ({
	firstname : "mary",
	lastname  : "doe"
});

Tony.address2 = {
	street : "222 Main Str"
};*/



/*var greet = "hello!";
var greet = "hola";

console.log(greet);

var english ={
	greetings : {
		basic : "Hello"
	}
};
var spanish ={};

english.greet = "Hello";
spanish.greet = "Hola";

console.log(english);*/



/*var objectName = {
	firstname : "Mary",
	isProgrammer  : true
}

console.log(JSON.stringify(objectName));

var jsonValue = JSON.parse('{"firstname" : "mary","lastname"  : "doe"}');

console.log(jsonValue);*/



/*function greet(){
	console.log("hi");
}

greet.language = "english";
console.log(greet.language);*/



/*greet();

function greet(){
	console.log("hi");
}

var anonymousGreet = function(){
	console.log("hi");
}

anonymousGreet();

function log(a){
	console.log(a);
}

log(3);


function log(a){
	(a);
}

log(function() { 
	console.log("hi");
});*/



/*//by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

//by reference (all objects and functions)
var c = { greeting : 'hi'};
var d;

d = c;
c.greeting = "hello";
console.log(c);
console.log(d);

//by reference parametres
function changeGreeting(obj){
	obj.greeting = "Hola";
}

changeGreeting(d);
console.log(c);
console.log(d);

//equals operators sets up memory space, new address
c = { greeting : "howdy"};
console.log(c);
console.log(d);*/




/*function a(){
	console.log(this);
}
a();

var b = function() {
	console.log(this);
}
b();

var c = {
	name : "The c object",
	log  : function(){
		this. name = " Updated c object";
		console.log(this);

		
	}
}
c.log();*/




/*function a(){
	console.log(this);
	this.newvariable = "hello";
}

var b = function(){
	console.log(this);
}

a();
console.log(newvariable);
b();

var c = {
	name : "the c object",
	log  : function(){
		var self = this;

		self.name = "updated object";
		console.log(self);

		var setname = function (newname){
			self.name = newname;
		}
		setname("updated again c object");
		console.log(self);
	}
}
c.log();*/




/*var arr = [1,
	 false,
	 {
	 	name:"Tony",
	 	address : "111 Main Str"
	 },
	 function(name){
	 	var greeting = 'Hello ';
	 	console.log(greeting + name);
	 },
	 "hello"
];
console.log(arr);
arr[3](arr[2].name);*/




/*function greet(firstname, lastname, language){
	language = language || "en";

	if(arguments.length === 0){
		console.log("Missing parameters");
		console.log("--------------")
		return;
	}

	console.log(firstname);
	console.log(lastname);
	console.log(language);
	console.log(arguments);
	console.log("arg 0: " + arguments[0]);
	console.log("--------------")
}
greet();
greet("John");
greet("John", "Doe");
greet("John", "Doe", "es");*/





/*function greet(firstname, lastname, language){
	language = language || "en";

	if (language === "en") {
		console.log("Hello, " + firstname + ' ' + lastname);
	}
	if (language === "es") {
		console.log("Hola, " + firstname + ' ' + lastname);
	}
}

function greetEnglish(firstname, lastname){
	greet(firstname, lastname, "en");
}

function greetSpanish(firstname, lastname){
	greet(firstname, lastname, "es");
}

greetEnglish('John', "Doe");
greetSpanish('John', "Doe");*/



/*
//function statement
function greet(name) {
	console.log ("Hello " + name);
}
greet("John");

//function expression
var greetFunc = function (name) {
	console.log ("Hello " + name);
}
greetFunc("John");

//immediately invoked function expression IIFE
var greeting = function (name) {

	return "Hello " + name;

}("John");

console.log (greeting);



//function expression
var firstname = "John";
(function (name){

	var greeting = "Inside IIFE : Hello ";
	console.log(greeting + " " + name);
}(firstname));  //IIFE

*/




/*(function (global, name){

	var greeting = "Hello ";
	global.greeting = "Hello ";
	console.log(greeting + " " + name);
}(window, "John"));

console.log(greeting) ;*/





/*function greet(whattosay) {
	
	return function (name){
	console.log (whattosay + " " + name);
	}

}
var sayHi = greet("Hi");
sayHi("Tony");*/





/*function buildFunctions(){
	var arr = [];

	for (var i = 0; i < 3; i++){

		arr.push(
			function(){
				console.log(i);
			})
	}
return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();*/

/*function buildFunctions(){
	var arr = [];

	for (var i = 0; i < 3; i++){

		arr.push(
			(function(j){
				return function(){
				console.log(j);
				}
			}(i))
		)
	}
return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();*/






/*function makeGreeting(language){
	return function(firstname, lastname){

		if (language === "en") {
		console.log("Hello, " + firstname + ' ' + lastname);
	}
		if (language === "es") {
		console.log("Hola, " + firstname + ' ' + lastname);
	}
}
	
}
var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");
greetEnglish("John", "Doe");
greetSpanish("John", "Doe");*/





/*function sayHiLater(){
	var greeting = "HI";

	setTimeout(function(){
		console.log(greeting);
	}, 3000);
}
sayHiLater();

function tellMeWhenDone(callback){
	var a = 1000;
	var b = 2000;

	callback();
}
tellMeWhenDone(function(){
	alert("I am done");
});*/






/*var person = {
	firstname   : "John",
	lastname    : "Doe",
	getFullName : function() { 

			var  fullname = this. firstname + " " + this.lastname;
			return fullname;

	}
}

var logName = function(lang1, lang2){
	console.log("Logged: " + this.getFullName());
	console.log("Argumants: " + lang1 + " " + lang2);
	console.log("----------");
}

var logPersonName = logName.bind(person);

logPersonName("en");

logName.call(person, "en", "es");
logName.apply(person, ["en", "es"]);

(function(lang1, lang2){
	console.log("Logged: " + this.getFullName());
	console.log("Argumants: " + lang1 + " " + lang2);
	console.log("----------");
}).apply(person, ["es", "en"])




var person2 = {
	firstname   : "Jane",
	lastname    : "Doe"
}

console.log(person.getFullName.apply(person2));

function multiply(a, b){
	return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));*/







// BUBBLE SORT RANDOM

/*
window.onload = function() {
	var a = [],
	i, j, k, n = 6;

	for(i = 0; i < n; i++){
		a.push(Math.floor(Math.random() * 10));
	}

	console.log('origin array is ' + a);
	
	for(j = 0; j < n; j++){

			for (i = 0; i < n-1; i++){
				if( a[i] > a [i + 1]){
					// change their places
					k = a[i]; 
					a[i] = a[i+1];
					a[i+1] = k;
			}
	}
	console.log("new array is "+ a);
	}*/

	

});