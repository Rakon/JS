var personProto = {
    calculateAge: function() {
        console.log(2017 - this.yearOfBirth);
    }
}

var david = Object.create(personProto);
david.name = 'David';
david.yearOfBirth = 1981;
david.job = 'IT';

var ellen = Object.create(personProto,
{
    name: {value: 'Ellen'},
    yearOfBirth: {value: 1989},
    job: {value: 'teacher'}
});