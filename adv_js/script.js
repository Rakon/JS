var john ={
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function() {
     console.log(2017 - this.yearOfBirth);
}

var john = new Person('John', 1990, 'teacher');
var ellen = new Person ('Ellen', 1989,'Teacher');
var prieel = new Person ('Prieel',2013,'Kiddo');
var Jef = new Person ('Jef', 1940, 'retired');

john.calculateAge();
ellen.calculateAge();
prieel.calculateAge();
Jef.calculateAge();