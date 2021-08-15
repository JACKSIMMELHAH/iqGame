var iq = 0;
var money = 0;
var moneyPerSecond = 0;
var iqMulti = 1;
var costMulti = 0.05;
var minIq = 0.999999999;

//---------------------------------------

function showMenu() {
    document.getElementById("hideMainMenuButton").style = "display: none";
    document.getElementById("hideMain").style = "display: none";
};

//---------------------------------------

function jobs() {
    document.getElementById("btn1").style = "display: block"
}

//---------------------------------------

function learn() {
    document.getElementById("btn1").style = "display: none"
}

//---------------------------------------

function addIq() {
    var showIq = `${(iq += 0.1 * iqMulti).toFixed(2)}`;
    document.getElementById("showIq").innerHTML = showIq
}
function sellIq() {
    if (!(iq <= minIq)) {
        var totalMoney = `Money:  ${(money += minIq * 0.03).toFixed(2)}`;
        document.getElementById("totalMoney").innerHTML = totalMoney

        var showIq = `${(iq -= minIq).toFixed(2)}`;
        document.getElementById("showIq").innerHTML = showIq
    } else return
}

function addIqMulti() {
    if (money >= costMulti) {

        var totalMoney = `${(money -= costMulti).toFixed(2)}`;
        document.getElementById("totalMoney").innerHTML = totalMoney

        var showIqMulti = `${(iqMulti += 0.1).toFixed(1)}x`;
        document.getElementById("showIqMulti").innerHTML = showIqMulti

        var showCostMulti = costMulti += 0.025
        document.getElementById("showCostMulti").innerHTML = showCostMulti
    } else return
}

function eatWorms() {
    var moneyPerSeconds = `(${(moneyPerSecond += 0.1).toFixed(2)}/s)`;
    var totalMoney = `${(money += moneyPerSecond).toFixed(2)}`;
    var wormsJob = document.getElementById("btn1");
    document.getElementById("moneyPerSecond").innerHTML = moneyPerSeconds
    document.getElementById("totalMoney").innerHTML = totalMoney
    var wormsJob = document.getElementById("btn1").disabled = true;
    if (wormsJob.disabled = true) {
        var owning = `(owned)`
        document.getElementById("owning").innerHTML = owning
    }
    setInterval(function eatWorms() {
        var totalMoney = `${(money += moneyPerSecond).toFixed(2)}`;
        document.getElementById("totalMoney").innerHTML = totalMoney
    }, 1000)
};

/*function save() {
    var testObject = { 
        'money': money.toFixed(2),
        'moneyPerSecond': moneyPerSecond.toFixed(2), 
    };

    localStorage.setItem('testObject', JSON.stringify(testObject));

    var retrievedObject = localStorage.getItem('testObject');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    
} */

function saveGame() {
    localStorage.setItem('money', JSON.stringify(money));
    localStorage.setItem('moneyPerSecond', JSON.stringify(moneyPerSecond));
  }

function loadGame() {
    money = JSON.parse(localStorage.getItem('money'));
    moneyPerSecond = JSON.parse(localStorage.getItem('moneyPerSecond'));
}
function clearGame() {
    localStorage.clear();
}

//---------------------------------------