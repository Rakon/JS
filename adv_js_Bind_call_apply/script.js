var david = {
    name: 'David', 
    age: 35,
    job: 'It-Tech guy',
    presentation: function(style, timeOFDay){
        if (style === 'formal') {
            console.log('Good ' + timeOFDay + ', ladies and gentelmen! I\'m ' +
             this.name + ', I\'m a ' + this.job + ' and i\'m ' + this.age + ' years old.');
        } else if(style === 'friendly') {
            console.log('Hey! What\'s up I\'m ' +
             this.name + ', I\'m a ' + this.job + ' and i\'m ' + this.age + ' years old. Have a nice ' + timeOFDay + '.');
        }
    }
}

var ellen = {
    name: 'Ellen',
    age: 28,
    job: 'Teacher'
};

var gbz = {
    name: 'Gunther',
    age: 41,
    job: 'almost an IT-guy'
};

david.presentation('formal', 'morning');
//call
david.presentation.call(ellen, 'friendly', 'afternoon');
//apply
david.presentation.apply(gbz, ['formal', 'evening']);
//Bind
var davidFrendly = david.presentation.bind(david, 'friendly');

davidFrendly('morning');

var ellenFormal = david.presentation.bind(ellen, 'formal');
ellenFormal('afternoon');

/////////////////////////////////

var years = [1914, 1918, 1940, 1945, 1981, 1989, 2013, 2016];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2017 - el;
}
function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);