let cheese = 0;
let click = 1
let autoClick = 0


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
        price: 15,
        quantity: 0,
        multiplier: 1.5
    },
    cat: {
        price: 25,
        quantity: 0,
        multiplier: 2.5
    }
}
function mine() {
    cheese++
    update()
}
// function buyApple() {
//     apple1++
//     update()
// }
// function buyOrange() {
//     orange1++
//     update()
// }
function update() {
    document.getElementById('cheese').innerText = cheese
    document.getElementById('che').innerText = cheese
    document.getElementById('app').innerText = click
}
function buyClickUpgrade(term) {
    let cost = clickUpgrades[term].price
    let amount = clickUpgrades[term].quantity
    let bonus = clickUpgrades[term].multiplier
    if (cheese >= cost) {
        amount++
        click += bonus
        cheese -= cost
    }
    update()
    displayInventory()
}
function buyAutomaticUpgrade(par) {
    let cost = automaticUpgrades[par].price
    let amount = automaticUpgrades[par].quantity
    let bonus = Math.floor(automaticUpgrades[par].multiplier)
    setInterval((automaticClick) => {
        if (cheese >= cost) {
            amount++
            click += bonus
            cheese += cost
        }
    }, 3000);

    update()
    displayInventory()
}

function displayInventory() {
    if (clickUpgrades.apple) {
        cheeseCheck = clickUpgrades.apple.price
        if (cheese <= cheeseCheck)
            document.getElementById('apple').disabled = true
        else
            document.getElementById('apple').disabled = false
    }
    if (clickUpgrades.orange) {
        cheeseCheck = clickUpgrades.orange.price
        if (cheese <= cheeseCheck)
            document.getElementById('orange').disabled = true
        else
            document.getElementById('orange').disabled = false
    }
    if (automaticUpgrades.dog) {
        cheeseCheck = automaticUpgrades.dog.price
        if (cheese <= cheeseCheck)
            document.getElementById('dog').disabled = true
        else
            document.getElementById('dog').disabled = false
    }
    if (automaticUpgrades.cat) {
        cheeseCheck = automaticUpgrades.cat.price
        if (cheese <= cheeseCheck)
            document.getElementById('cat').disabled = true
        else
            document.getElementById('cat').disabled = false
    }
}
