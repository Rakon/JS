
function printFullAge(years) {
    var ages = [];
    var fullAges = [];

for (var i = 0; i < years.length; i++) {
    ages[i] = 2017 - years[i];
}

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' +(i + 1) +
            ' is ' + ages[i] + ' years old and is of full age.');
            fullAges.push(true);
        } else{
            console.log('Person ' + (i + 1) +
            ' is ' + ages[i] + ' years old and is not of full age.');
            fullAges.push(false);
        }

    }
    return fullAges;
}
var years = [2005, 1981 , 1989, 1975, 1939, 2013];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012,1915,1999]);