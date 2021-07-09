
let cheese = 0;
let click = 1
let Clicker = 1

let clickUpgrades = {
    apple: {
        price: 5,
        quantity: 0,
        multiplier: 1
    },
    orange: {
        price: 10,
        quantity: 0,
        multiplier: 2
    }
};

let automaticUpgrades = {
    dog: {
        price: 20,
        quantity: 0,
        multiplier: 3
    },
    cat: {
        price: 30,
        quantity: 0,
        multiplier: 4
    }
}
function mine() {
    cheese++
    update()
}
function buyApple() {
    app++
    update()
}
function buyOrange() {
    org++
    update()
}
function buyDog() {
    dog++
    update()
}
function buyCat() {
    cat++
    update()
}

function buyClickUpgrade(para) {
    let cost = clickUpgrades[para].price
    let amount = clickUpgrades[para].quantity
    let bonus = clickUpgrades[para].multiplier
    if (cheese >= cost) {
        amount++
        cheese -= cost
        click += bonus
    }
    update()
}
function buyAutomaticUpgrade(para) {
    let cost = automaticUpgrades[para].price
    let amount = automaticUpgrades[para].quantity
    let bonus = automaticUpgrades[para].multiplier
    if (cheese >= cost) {
        amount++
        cheese += cost
        click += bonus
    }
    update()
}
function update() {
    document.getElementById('cheese').innerText = cheese
    document.getElementById('che').innerText = cheese
    document.getElementById('app').innerText = click
    document.getElementById('org').innerText
    document.getElementById('dog').innerText
    document.getElementById('cat').innerText
}
function drawClick(para) {
    let amount = clickUpgrades[para].quantity
    document.getElementById(para).innerText = amount
}
function drawAutomatic(param) {
    let autoAmount = automaticUpgrades[param].quantity
    document.getElementById(param).innerText = autoAmount
}