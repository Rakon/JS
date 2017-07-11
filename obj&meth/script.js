// v1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: true,
    family:['Jane', 'Mark', 'Blob'],
    calculateAge: function(){ //function expression
        return 2017 - this.yearOfBirth;
    }
};


console.log(john.family[2]);
// console.log(john.calculateAge(1980));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john); */

//v2.0

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: true,
    family:['Jane', 'Mark', 'Blob'],
    calculateAge: function(){ //function expression
        //return 2017 - this.yearOfBirth;
        this.age = 2017 - this.yearOfBirth;
    }
};
john.calculateAge();
console.log(john);