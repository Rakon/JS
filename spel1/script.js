var ageJohn = 24;
var heightJohn= 191;
var ageStef = 24;
var heightStef = 189;
var ageDavid = 35;
var heightDavid = 191;

var resultJohn = heightJohn + (ageJohn * 5);
var resultStef = heightStef + (ageStef * 5);
var resultDavid = heightDavid + (ageDavid * 5);

console.log('Result of John = ' + resultJohn);
console.log('Result of Stef = ' + resultStef);
console.log('Result of David = ' + resultDavid);

if (resultJohn > resultStef && resultJohn > resultDavid) {
    console.log('John is the winner of this stupid ass game');
} else if (resultStef > resultJohn && resultStef > resultDavid){
    console.log('Stef is the winner of this stupid ass game');
} else {
    console.log('David is the winner of the stupid ass game');
}