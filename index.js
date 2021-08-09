var counter = 0;
var money = 0;
var sexMulti = 1;

function addSex() {
    var showSex = `You have this many Sex:  ${(counter += 0.1 * sexMulti).toFixed(1)}`;
    document.getElementById("showSex").innerHTML = showSex
}

function sellSex() {
    var totalMoney = `Money:  ${(money += counter * 1.03).toFixed(2)}`;
    document.getElementById("totalMoney").innerHTML = totalMoney


    var showSex = `You have this many Sex:  ${(counter -= counter).toFixed(2)}`;
    document.getElementById("showSex").innerHTML = showSex
}

function addSexMulti() {
    if (money >= 0.05) {
        var totalMoney = `Money:  ${(money -= 0.05).toFixed(2)}`;
        document.getElementById("totalMoney").innerHTML = totalMoney


        var showMulti = `Sex Multi:  ${(sexMulti += 0.1).toFixed(1)}x`;
        document.getElementById("showMulti").innerHTML = showMulti
    } else return
}

