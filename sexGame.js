var counter = 0;
var money = 0;
var sexMulti = 1;

function addSex() {
    var showSex = `You have this many Sex:  ${(Math.round(counter += 87 * sexMulti))}`;
    document.getElementById("showSex").innerHTML = showSex
}

function sellSex() {
    var totalMoney = `Money:  ${(Math.round(money += counter * 10))}`;
    document.getElementById("totalMoney").innerHTML = totalMoney


    var showSex = `You have this many Sex:  ${(Math.round(counter -= counter))}`;
    document.getElementById("showSex").innerHTML = showSex
}

function addSexMulti() {
    if (money >= 10000) {
        var totalMoney = `Money:  ${(Math.round(money -= 10000))}`;
        document.getElementById("totalMoney").innerHTML = totalMoney


        var showMulti = `Sex Multi:  ${(sexMulti += 0.1).toFixed(1)}x`;
        document.getElementById("showMulti").innerHTML = showMulti
    } else return
}

