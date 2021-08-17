var iq = 0;
var money = 0;
var moneyPerSecond = 0;
var iqMulti = 1;
var costMulti = 0.05;
var minIq = 0.999999999;
var tickSpeed = 100;
var wormPS = 0.1


//---------------------------------------

function showMenu() {
    document.getElementById("hideMainMenuButton").style = "display: none";
    document.getElementById("hideMain").style = "display: none";
};

//---------------------------------------

function jobs() {

    document.getElementById("wormsReq").style = "display: block"
    document.getElementById("btn1").style = "display: block"
    document.getElementById("awareReq").style = "display: none"
    document.getElementById("btn2").style = "display: none"
    document.getElementById("job").style.background = 'rgb(142, 235, 142)';
    document.getElementById("learning").style.background = 'rgb(29, 29, 29)';
    document.getElementById("settings").style.background = 'rgb(29, 29, 29)';
}

//---------------------------------------

function learn() {
    document.getElementById("btn2").style = "display: block"
    document.getElementById("awareReq").style = "display: block"
    document.getElementById("wormsReq").style = "display: none"
    document.getElementById("btn1").style = "display: none"
    document.getElementById("learning").style.background = 'rgb(240, 128, 128)';
    document.getElementById("job").style.background = 'rgb(29, 29, 29)';
    document.getElementById("settings").style.background = 'rgb(29, 29, 29)';
}

//---------------------------------------

function settings() {
    document.getElementById("wormsReq").style = "display: none"
    document.getElementById("awareReq").style = "display: none"
    document.getElementById("btn1").style = "display: none"
    document.getElementById("btn2").style = "display: none"
    document.getElementById("job").style.background = 'rgb(29, 29, 29)';
    document.getElementById("learning").style.background = 'rgb(29, 29, 29)';
    document.getElementById("settings").style.background = 'rgb(95, 95, 95)';
}

//---------------------------------------

var wormPerSecond = `Gain: ${(wormPS).toFixed(2)} money/s`;
document.getElementById("wormsPS").innerHTML = wormPerSecond

var showIq = `${iq.toFixed(2)}`
document.getElementById("showIq").innerHTML = showIq

//---------------------------------------

window.addEventListener('load', () => {

    setInterval(function saveGame() {
        localStorage.setItem('save', JSON.stringify("save"));
        localStorage.setItem('iq', JSON.stringify(iq));
        localStorage.setItem('money', JSON.stringify(money));
        localStorage.setItem('moneyPerSecond', JSON.stringify(moneyPerSecond));
    }, 1000)

        money = JSON.parse(localStorage.getItem('money'));
        iq = JSON.parse(localStorage.getItem('iq'));
        moneyPerSecond = JSON.parse(localStorage.getItem('moneyPerSecond'));


        document.getElementById("showIq").innerHTML = `${iq.toFixed(2)}`
        document.getElementById("totalMoney").innerHTML = `${money.toFixed(2)}`
        document.getElementById("moneyPerSecond").innerHTML = `(${moneyPerSecond.toFixed(2)}/s)`


        setInterval(function eatWorms() {
            var totalMoney = `${(money += moneyPerSecond / 10).toFixed(2)}`;
            document.getElementById("totalMoney").innerHTML = totalMoney
        }, tickSpeed)

});



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
    if (iq >= 0.10) {
        var moneyPerSeconds = `(${(moneyPerSecond += wormPS).toFixed(2)}/s)`;
        var totalMoney = `${(money += moneyPerSecond).toFixed(2)}`;
        var wormsJob = document.getElementById("btn1");
        document.getElementById("totalMoney").innerHTML = totalMoney
        document.getElementById("moneyPerSecond").innerHTML = moneyPerSeconds

        setInterval(function eatWorms() {
            var totalMoney = `${(money += moneyPerSecond / 10).toFixed(2)}`;
            document.getElementById("totalMoney").innerHTML = totalMoney
        }, tickSpeed)

        if (wormsJob.disabled = true) {
            document.getElementById("btn1").style.color = "grey"
        }
    }

};


function selfAware() {
    var selfAware = document.getElementById("btn2")
    var showIq = `${(iq += 0.1).toFixed(2)}`
    document.getElementById("showIq").innerHTML = showIq

    if (selfAware.disabled = true) {
        document.getElementById("btn2").style.color = "grey"
    }
}


function loadGame() {
    if (!localStorage.getItem('save')) {
        return alert("You don't have a savefile!");
    } else
        money = JSON.parse(localStorage.getItem('money'));
    iq = JSON.parse(localStorage.getItem('iq'));
    moneyPerSecond = JSON.parse(localStorage.getItem('moneyPerSecond'));

}

function clearGame() {
    localStorage.clear()
    window.location.reload();
}


//---------------------------------------

const btns = document.querySelectorAll('.btn');

const getBtnState = function (btns) {
    [].forEach.call(btns, function (btn) {
        if (window.localStorage.getItem(btn.id) == 'disabled') {
            btn.disabled = true
        }
    })
};

const resetBtnState = function (btns) {
    [].forEach.call(btns, function (btn) {
        btn.disabled = false
        window.localStorage.setItem(btn.id, '')
    })
};

[].forEach.call(btns, function (btn) {
    btn.addEventListener('click', function () {
        btn.disabled = true
        window.localStorage.setItem(btn.id, 'disabled')
    })
});

/*document.getElementById('reset').addEventListener('click', function (e) {
  resetBtnState(btns) 
}); */

getBtnState(btns);



//---------------------------------------