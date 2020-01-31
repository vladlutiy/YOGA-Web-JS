'use strict';
let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце");
let firstAnswear = prompt("Во сколько обойдется?");
let secondQuestion = prompt("Введите обязательную статью расходов в этом месяце");
let secondAnswear = prompt("Во сколько обойдется?");


let dayBudget;

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        a: firstQuestion + " : " + firstAnswear,
        b: secondQuestion + " : " + secondAnswear
    },
    optionalExpenses: {},
    income : [],
    savings: false,
};

// expenses.firstQuestion = firstAnswear;
// expenses.secondQuestion = secondAnswear;

dayBudget = money / 30;
alert(dayBudget);



console.log(appData);



