/*
//privee gedeelte
var budgetControler = (function() {
    var x = 23;
    var add = function(a) {
        return x + a;
    }
//publiek gedeelte (je kan hiermee aan het privee gedeelte raken anders niet)    
    return {
        publicTest: function(b){
            console.log(add(b));
        }
    }
})();

var UIControler = (function() {

})();

var appControler = (function(budgetCtrl,UICtrl) {
    
})(budgetControler, UIControler);
*/

// Buget Controler
var budgetControler = (function() {
   
})();

// UI Controler
var UIControler = (function() {
    return {
        getInput: function() {
            return {
            type : document.querySelector('.add__type').value, //zullen de inkomsten of uitgaven zijn
            description : document.querySelector('.add__description').value,
            value : document.querySelector('.add__value').value
            };
            
        }
    }
})();

//Global APP Controler

var appControler = (function(budgetCtrl,UICtrl) {
    var ctrlAdditem = function() {
        // 1. grab input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. add item to the budget controler
        // 3. add item to UI
        // 4. Calculate budget
        // 5. Display budget data on UI
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAdditem);
   

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAdditem()
        }
    });
})(budgetControler, UIControler);