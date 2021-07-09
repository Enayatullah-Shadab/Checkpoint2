let cheese = 0;
let click = 1
let automatic = 0


let clickUpgrades = {
    apple: {
        price: 10,
        quantity: 0,
        multiplier: 1
    },
    orange: {
        price: 20,
        quantity: 0,
        multiplier: 5
    }
};

let automaticUpgrades = {
    dog: {
        price: 50,
        quantity: 0,
        multiplier: 7
    },
    cat: {
        price: 100,
        quantity: 0,
        multiplier: 10
    }
}
function mine() {
    cheese += click
    update()
}


// function myApple() {
//     if (click === apple) {
//         apple += 1
//     }
//     update()
// }
// function myOrange() {
//     if (click === orange) {
//         orange += 10
//     }
//     update()
// }
// function myDog() {
//     if (click === dog) {
//         dog += 15
//     }
//     update()
// }
// function myCat() {
//     if (click === cat) {
//         cat += 1
//     }
//     update()
// }
// function myChe() {
//     if (click === che) {
//         che += 1
//     }
//     update()
// }

function buyClickUpgrade(para) {
    debugger;
    let cost = clickUpgrades[para].price
    let amount = clickUpgrades[para].quantity
    let bonus = clickUpgrades[para].multiplier
    if (cheese >= cost) {
        amount++
        click += bonus
        cheese -= cost
    }
    update()
}
function buyAutomaticUpgrade(para) {
    let cost = automaticUpgrades[para].price
    let amount = automaticUpgrades[para].quantity
    let bonus = automaticUpgrades[para].multiplier
    if (cheese >= cost) {
        amount++
        click += bonus
        cheese -= cost
    }
    update()
}
function update() {
    document.getElementById('cheese').innerText = cheese
    document.getElementById('che').innerText = cheese
    document.getElementById('click').innerText = click
    document.getElementById('automatic').innerText = automatic
    document.getElementById('apple').innerText = apple
    document.getElementById('orange').innerText = orange
    document.getElementById('dog').innerText = dog
    document.getElementById('cat').innerText = cat
}
function drawClick(par) {
    let amount = clickUpgrades[par].quantity // need to be fixed 
    document.getElementById(par).innerText = amount
}
function drawAutomatic(par) {
    let autoAmount = automaticUpgrades[par].quantity
    document.getElementById(par).innerText = autoAmount
}

drawClick()
drawAutomatic()