
let cheese = 0;
var click = 1
var automaticClick = 0


function mine() {
    cheese++
    update()
}
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

// function buyApple() {
//     if (cheese >= app) {
//         app++
//     }
//     update()
// }
// function buyOrange() {
//     if (cheese >= org) {
//         org++
//     }
//     update()
// }
// function buyDog() {
//     if (cheese >= dog) {
//         dog++
//     }
//     update()
// }
// function buyCat() {
//     if (cheese >= cat) {
//         cat++
//     }

//     update()
// }
// function startInterval() {
//     collectionInterval = setInterval(collectAutoUpgrades => {
//         if (cheese >= cat) {
//             cat.multiplier.price = cat
//             cat++
//         } else if (cheese >= cat) {
//             cat.multiplier.price = cat
//             cat++
//         }
//     }, 2000);

//     update()
// }

// startInterval()

function buyClickUpgrade(para) {
    let cost = clickUpgrades[para].price
    let amount = clickUpgrades[para].quantity
    let bonus = clickUpgrades[para].multiplier
    if (cheese >= cost) {
        amount++
        click += bonus
        cheese -= cost
        drawClickCost(para)
    }
    update()
    drawClickAmount(para)
}

function buyAutomaticUpgrade(para) {
    let cost = automaticUpgrades[para].price
    let amount = automaticUpgrades[para].quantity
    let bonus = automaticUpgrades[para].multiplier
    if (cheese >= cost) {
        amount++
        automaticClick += bonus
        cheese -= cost
        drawAutomaticCost(para)
        startInterval()
    }
    update()
    drawAutomaticCount()
}
function update() {
    document.getElementById('cheese').innerText = cheese
    document.getElementById('che').innerText = cheese
    document.getElementById('app').innerText = click
    document.getElementById('cps').innerText = cps
    document.getElementById('tcm').innerText = tcm
}

function drawClickAmount(trm) {
    let amount = clickUpgrades[trm].quantity
    document.getElementById(trm).innerText = amount
}
function drawAutomaticCount(trm) {
    let automaticCount = automaticUpgrades[trm].quantity
    document.getElementById(trm).innerText = automaticCount
}
