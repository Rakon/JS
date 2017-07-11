var name = 'David';
var age = 35;
var isMarried = 'yes';

if (isMarried === 'yes') /* altijd false */{
    console.log(name + ' is married!');
} else {
    console.log(name + ' hoop he will!');
}

isMarried = false;

if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

var age = 24;

if (age < 19) {
    console.log('John is a kid');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man!');
} else {
    console.log('John is a man');
}

var job = 'teacher';

switch (job) {
    case 'teacher':
        console.log('Ellen teaches kids');
        break;
    case 'driver':
        console.log('John is a cab driver');
        break;
    case 'cop':
        console.log('He is batman!');
        break;
    default:
        console.log('somthing somthing');    
}