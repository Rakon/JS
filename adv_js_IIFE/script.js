//nooit zo te werk gaan
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// IIFE immediatly invoked function Expression
//data privacy
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

