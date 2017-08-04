// Let & const
/*
//es5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Millser';

//es6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller'; //will give you a TypeError in console


//es5

function driversLicence6(passedTest) {
    if(passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
        console.log(firstName + ' born in ' + yearOfBirth + ' is passed!');
    }
    
}
driversLicence6(true);
//es6

function driversLicence6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;
    if(passedTest) {
        firstName = 'John';
    }
    console.log(firstName + ' born in ' + yearOfBirth + ' is passed!');
}
driversLicence6(true);

let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
*/
// blocks ans IFEs
//es6
{
    const a = 1;
    let b = 2;
}

 //console.log(a + b); // you can't acces a & b because you arn't in the block

//es5

(function() {
    var c = 3;
})();
 //console.log(c); // you can't acces a & b because you arn't in the block


 //Strings

 let firstName = 'David';
 let lastName = 'Duym';
 const yearOfBirth = 1981;
 function calcAge(year) {
     return 2017 - year;
 }

 //ES5

 console.log('This is ' + firstName + ' ' + lastName + '. He is born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

 //ES6
 console.log(`This is ${firstName} ${lastName}. He is born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

 const n = `${firstName} ${lastName}`;
 console.log(n.startsWith('D'));
 console.log(n.endsWith('ym'));
 console.log(n.includes(' '));
 console.log(`${firstName} `.repeat(25));

 //arrow functions

 const year = [1981, 1989,2013,2016];

 //ES5

 var ages5 = year.map(function(el) {
    return 2017 - el;
 });
console.log(ages5);

//ES6

const ages6 = year.map(el => 2017 - el);
console.log(ages6);

let ages7 = year.map(el => 2017 - el);
ages7 = year.map((el, index) => `Age element ${index + 1}: ${2017 -el}.`);
console.log(ages7);

let ages8 = year.map(el => 2017 - el);
ages8 = year.map((el, index) => {
    const now = new
    Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages8);

/*
//arrow functions part 2
//ES5

var box5 = {
    color: 'green',
    position : 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
box5.clickMe();
*/
//ES6

const box5 = {
    color: 'green',
    position : 1,
    clickMe: function() {
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box5.clickMe();

function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends) {
 var arr = friends.map(function(el) {
     return this.name + ' is friends with ' + el;
}.bind(this));
    console.log(arr);
}

var friends = ['1','2','3'];
new Person('John').myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function(friends) {
 var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}
new Person('Derp').myFriends6(friends);

// Destructering

//ES5

var david = ['David', 35];
var name = david[0];
var age = david[1];

//ES6

const [namez,yearz] = ['David', 1981];
console.log(namez);
console.log(yearz);

//arrays only ES6

const boxes = document.querySelectorAll('.box');
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'blue');
/*
for (const cur of boxesArr6){
    if (boxesArr6.className ==='box blue') {
        continue;
    }
    cur.textContent = 'I am Pink!';
}
*/
for (const cur of boxesArr6){
    if (cur.className ==='box blue') {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

var agesz = [12,17,8,21,4,8,88,23,34,99,11,4,3,1];
console.log(agesz.findIndex(cur => cur >=40));
console.log(agesz.find(cur => cur >=40));

//spread operator
function addFiveAges (a,b,c,d,e) {
    return a + b + c + d + e;
}
var ages = [25,25,65,98,14];
const sum = addFiveAges(...ages);
console.log(sum);

const familyA = ['a', 'z', 'e', 'r'];
const familyB = ['t', 'y', '!'];
const bigFamily = [...familyA, ...familyB];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxesz = document.querySelectorAll('.box');
const all = [h, ...boxesz];

Array.from(all).forEach(cur => cur.style.color ='orange');

//rest parameters

function isFullage66(limit, ...years1) {
    years1.forEach(cur => console.log((2017 - cur) >= limit));
}
isFullage66(20, 1990, 2001, 1999, 2010, 1941, 2016, 1981); // first nummer is the limit

//Default parameters

 function SmithPerson(firstName, yearOfBirth, lastName ='Smith', nationality ='Murican') {
     this.firstName = firstName;
     this.lastName = lastName;
     this.yearOfBirth = yearOfBirth;
     this.nationality = nationality;
 }

 var john = new SmithPerson('John', 1990); // type the name in the console
 var bella = new SmithPerson('Bella', 1983, 'Diaz', 'Spanish');