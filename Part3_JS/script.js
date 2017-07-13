/*
// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}


*/

///////////////////////////////////////
// Lecture: The this keyword
/*
calculateAge(1981);

function calculateAge(year) {
    console.log(2017 - year);
    console.log(this);
}
*/
var david = {
    name: 'David',
    yearOfBirth: 1981,
    calculateAge: function() {
        console.log(this);
        console.log(2017 - this.yearOfBirth);
            /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }


}

john.calculateAge();

var Ellen = {
    name: 'Ellen',
    yearOfBirth: 1989
};

Ellen.calculateAge = david.calculateAge;
ellen.calculateAge();




