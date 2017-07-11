var names = ['Ellen', 'David' ,'Prieel' , 'Merlijn'];
var years = [ 1989, 1981,2013,2016];
console.log(names[0], years[0]);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); //dit pushed een element op het einde van de array bij!
john.unshift('Mr.'); // voegt iets toe aan het begin van de array
// john.pop() geen parameter bijvoegen dit verwijderd laatste element
// john.shift() verwijderd eerste element
// alert (john.lastIndexOf('Smith')); // toont index plaats

if (john.indexOf('dev') === -1) {
    console.log('John is nor a dev'); //zo kan je uitvinden of een element in de array zit
    
}