var sex = 0;
var money = 0;
var sexMulti = 1;
Number.prototype.countDecimals = function () {

    if (Math.floor(this.valueOf()) === this.valueOf()) return 0;

    var str = this.toString();
    if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
        return str.split("-")[1] || 0;
    } else if (str.indexOf(".") !== -1) {
        return str.split(".")[1].length || 0;
    }
    return str.split("-")[1] || 0;
}


function addSex() {
    var showSex = `You have this many Sex:  ${(sex += 0.1 * sexMulti).toFixed(2)}`;
    document.getElementById("showSex").innerHTML = showSex
}

function sellSex() {
    if (sex >= (1).toFixed(0)) {
        if (sex.countDecimals == 3) {
            var totalMoney = `Money:  ${(money += sex * 0.03).toFixed(3)}`;
            document.getElementById("totalMoney").innerHTML = totalMoney
        } else var totalMoney = `Money:  ${(money += sex * 0.03).toFixed(2)}`;
        document.getElementById("totalMoney").innerHTML = totalMoney


        var showSex = `You have this many Sex:  ${(sex -= (1).toFixed(0)).toFixed(2)}`;
        document.getElementById("showSex").innerHTML = showSex
    } else return
}

function addSexMulti() {
    if (money >= 0.05) {
        var totalMoney = `Money:  ${(money -= 0.05).toFixed(2)}`;
        document.getElementById("totalMoney").innerHTML = totalMoney


        var showMulti = `Sex Multi:  ${(sexMulti += 0.1).toFixed(1)}x`;
        document.getElementById("showMulti").innerHTML = showMulti
    } else return
}

