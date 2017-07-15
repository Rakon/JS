// primitives

var a = 23;
var b = a;
a = 69;
console.log(a);
console.log(b);

//objects

var obj1 = {
    name: 'David',
    age: 34
};
var obj2 = obj1;
obj1.age = 35;
console.log(obj1.age);
console.log(obj2.age);

// functions

var age = 35;
var obj = {
    name: 'David',
    city: 'Ghent'
};

function change(a,b) {
    a = 36;
    b.city = 'Dampuurte';
}

change(age, obj);
console.log(age);
console.log(obj.city);