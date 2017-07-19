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
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn : '.add__btn'
    };
    return {
        getInput: function() {
            return {
            type : document.querySelector(DOMstrings.inputType).value, //zullen de inkomsten of uitgaven zijn
            description : document.querySelector(DOMstrings.inputValue).value,
            value : document.querySelector(DOMstrings.inputValue).value
            };
            
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();

//Global APP Controler

var appControler = (function(budgetCtrl,UICtrl) {
    var DOM = UICtrl.getDOMstrings();
    var ctrlAdditem = function() {
        // 1. grab input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. add item to the budget controler
        // 3. add item to UI
        // 4. Calculate budget
        // 5. Display budget data on UI
    }
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAdditem);
   

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAdditem()
        }
    });
})(budgetControler, UIControler);