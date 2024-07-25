
var monster = { name: "Ezra", power: 7 }
// var p = monster.piwer;
// monster.piwer = 7



function foo(x, y) {
    console.log('x:', x)
}


function askHim(quest) {

    var ans = prompt(quest);
    // var ans = 'Yes';
    var viewAns = document.body;
    if (ans) viewAns.innerHTML = ans;
}

function initGame() {
    var now = (new Date()).getTime();
    var abTest = Math.random() > 0.5 ? 'caseA' : 'caseB';
    // return () => { }
}

document.onload = initGame

var found = [0, 7, 9, 6].some((item) => item === 5);


document.addEventListener('keydown', function (event) {
    console.log(event.key);
});



