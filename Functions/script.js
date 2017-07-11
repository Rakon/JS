function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var ageEllen = calculateAge(1989);
var ageDavid = calculateAge(1981);
var agePrieel = calculateAge(2013);
var ageMerlijn = calculateAge(2016);
console.log(ageEllen);

function yearUntilRiterement(name, yearOfBirth){
    var age = calculateAge(yearOfBirth);
    var retirement = 67 - age;

    if (retirement >= 0){
        console.log(name + ' retires in ' + retirement + ' years.');
    } else{
        console.log(name +  ' is retiered');
    }
}
yearUntilRiterement('David', 1981);
yearUntilRiterement('Elen', 1989);
yearUntilRiterement('Prieel', 2013);
yearUntilRiterement('Merlijn', 2016);
