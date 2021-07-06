let cheese = 0;
let click = 1
let autoClick = 0


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
    // alert("The number of your cheese is :" + cheese)
    cheese += click
    update()
}
function update() {
    document.getElementById('cheese').innerText = cheese
}

function buyClickUpgrade(item) {
    let cost = clickUpgrades[item].price
    let amount = clickUpgrades[item].quantity
    let bonus = clickUpgrades[item].multiplier
    if (cheese >= cost) {
        amount++
        click += bonus
        cheese -= cost
    }
    update()
}
function buyAutomaticUpgrade(item) {
    let cost = automaticUpgrades[item].price
    let amount = automaticUpgrades[item].quantity
    let bonus = automaticUpgrades[item].multiplier
    if (cheese >= cost) {
        amount++
        click += bonus
        cheese -= cost
    }
    update()
}