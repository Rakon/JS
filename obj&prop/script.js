var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.job);
console.log(john['job']);

var wcx = 'job';
console.log(john[wcx]);

john.job = 'Dev'; // data mutatie

console.log(john);
