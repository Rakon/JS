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
    var Expense = function(id,description,value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    Expense.prototype.calculatePercentage = function(totalIncome){
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome)*100);
        } else {
            this.percentage = -1 ;
        }
    };
    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }

    var Income = function(id,description,value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type]= sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            //create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            // create new item 
            if (type === 'exp'){
                newItem = new Expense(ID,des,val);
            } else if (type === 'inc') {
                newItem = new Income(ID,des,val);
            }
            // push it into data structure
            data.allItems[type].push(newItem);
            // return new element
            return newItem;
        },

        deleteItem: function(type, id) {
            var ids, index;
            // map returns always a new array
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });
            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1); // the 1 is the how much you will remove
            }
        },

        calculateBudget: function(){
            // calc total inc/exp
             calculateTotal('exp');
             calculateTotal('inc');
            // calc budget inc-exp
            data.budget = data.totals.inc - data.totals.exp;
            // calc % of inc that we spend
            if (data.totals.inc > 0){
              data.percentage =Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
           
        },

        calculatePercentages: function(){
            data.allItems.exp.forEach(function(cur) {
                cur.calculatePercentage(data.totals.inc);
            });

        },
        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
            })
            return allPerc;
        },
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        testing: function() {
            console.log(data);
        }
    };
})();

// UI Controler
var UIControler = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn : '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercenlabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

          var formatNumber = function(num, type) {
            // + / - b4 the numbers - 100 / + 200
            // 2 decimal points  100.25
            // comma separating the thousands 1,250.00
            var numSplit, int, dec, type;
            num = Math.abs(num);
            num = num.toFixed(2);
            numSplit = num.split('.');
            int = numSplit[0];
            if (int.length > 3) {
                int = int.substr(0,int.length - 3) + ',' + int.substr(int.length - 3,3); //input 2310 => 2,310)
            }
            dec = numSplit[1];
            return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;          

        };
          var nodeListForEach = function(list,callback) {
                for (var i = 0; i < list.length; i++){
                    callback(list[i],i); // last i is for the index nodeListForEach(fields, function(current,index)
                }
            };
    return {
        getInput: function() {
            return {
            type : document.querySelector(DOMstrings.inputType).value, //zullen de inkomsten of uitgaven zijn
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
            
        },
        addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem : function(selectorID) {
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el)
        },

        clearFields: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            fieldsArr[0].focus();
        },
        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
            
        },
        displayPercentages: function(percentages) {
            var fields = document.querySelectorAll(DOMstrings.expensesPercenlabel);
          
            nodeListForEach(fields, function(current,index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },
        displayMonth: function() {
            var now, year, month, months;
            now = new Date();
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augustus', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;

        },
        changedType: function() {
            var fields = document.querySelectorAll(DOMstrings.inputType + ',' + DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
            nodeListForEach(fields,function(cur) {
                cur.classList.toggle('red-focus');
            });
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();

//Global APP Controler

var controler = (function(budgetCtrl,UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAdditem);
        document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAdditem()
        }
      });
    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };
    var updateBudget = function() {
        // 1. Calculate budget
        budgetCtrl.calculateBudget();
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        // 3. Display budget data on UI
        UICtrl.displayBudget(budget);
    
    };
    var updatePercentagers = function() {
        // 1. calc %
        budgetCtrl.calculatePercentages();
        // 2. read % from the buget controller
        var percentages = budgetCtrl.getPercentages();
        // 3. update the ui with the new %
        UICtrl.displayPercentages(percentages);
    };
    
    var ctrlAdditem = function() {
        var input,newItem;
        // 1. grab input data
        input = UICtrl.getInput();
        if (input.description !== "" && !isNaN(input.value) && input.value >0) {
            // 2. add item to the budget controler
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            // 3. add item to UI
            UICtrl.addListItem(newItem,input.type);
            // 4. Clear the Fields
            UICtrl.clearFields();
            // 5.calc & update budget
            updateBudget();
            // 6. calc & update %
            updatePercentagers();
        } 
     
    };
    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. delete item from the data structure
            budgetCtrl.deleteItem(type, ID);
            // 2. delete from UI
            UICtrl.deleteListItem(itemID);
            // 3. Update and show new budget
            updateBudget();
            // 4. calc & update %
            updatePercentagers();
        }
    }
   return {
       init: function() {
           UIControler.displayMonth();
           UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
           });
           setupEventListeners();
       }
   };
})(budgetControler, UIControler);

controler.init();