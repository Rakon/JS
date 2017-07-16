function retirement(retirementAge) {
    var a = ' years left until retirement.'
    return function(yearOfBirth) {
        var age = 2017 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS =  retirement(66);
retirementUS(1981);
var retirementBE = retirement(67);
retirementBE(1981);


function interviewQuestion(job) {
    return function(name) {
        if(job === 'IT') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What classes do you give, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('IT')('David');
interviewQuestion('teacher')('Ellen');