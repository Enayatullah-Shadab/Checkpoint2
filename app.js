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
        multiplier: 10
    }
};

let automaticUpgrades = {
    dog: {
        price: 50,
        quantity: 0,
        multiplier: 15
    },
    cat: {
        price: 100,
        quantity: 0,
        multiplier: 20
    }
}
function mine() {
    cheese += click

    update()
}

function buyClickUpgrade(para) {
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
    document.getElementById('click').innerText = click
    document.getElementById('automatic').innerText = automatic
}