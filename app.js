
// let cheese = 0;
// var click = 1
// var automaticClick = 0


// let clickUpgrades = {
//     apple: {
//         price: 5,
//         quantity: 0,
//         multiplier: 1
//     },
//     orange: {
//         price: 10,
//         quantity: 0,
//         multiplier: 2
//     }
// };

// let automaticUpgrades = {
//     dog: {
//         price: 20,
//         quantity: 0,
//         multiplier: 3
//     },
//     cat: {
//         price: 30,
//         quantity: 0,
//         multiplier: 4
//     }
// }

// // function buyApple() {
// //     if (cheese >= app) {
// //         app++
// //     }
// //     update()
// // }
// // function buyOrange() {
// //     if (cheese >= org) {
// //         org++
// //     }
// //     update()
// // }
// // function buyDog() {
// //     if (cheese >= dog) {
// //         dog++
// //     }
// //     update()
// // }
// // function buyCat() {
// //     if (cheese >= cat) {
// //         cat++
// //     }

// //     update()
// // }

// function buyClickUpgrade(para) {
//     let cost = clickUpgrades[para].price
//     let amount = clickUpgrades[para].quantity
//     let bonus = clickUpgrades[para].multiplier
//     if (cheese >= cost) {
//         amount++
//         cheese -= cost
//         bonus += click

//         drawClickCost(para)
//     }
//     update()
//     drawClickAmount(ter)
// }

// function buyAutomaticUpgrade(par) {
//     let cost = automaticUpgrades[par].price
//     let amount = automaticUpgrades[par].quantity
//     let bonus = automaticUpgrades[par].multiplier
//     if (cheese >= cost) {
//         amount++
//         automaticClick += bonus
//         cheese += cost
//         drawAutomaticCost(par)
//         startInterval()
//     }
//     update()
//     drawAutomaticAmount()
// }

// function mine() {
//     cheese++
//     update()
// }
// function update() {
//     document.getElementById('cheese').innerText = cheese
//     document.getElementById('che').innerText = cheese
//     document.getElementById('apple').innerText = click
//     document.getElementById('orange').innerText = orange
//     document.getElementById('dog').innerText = dog
//     document.getElementById('cat').innerText = cat
//     // document.getElementById('click').innerText = click
//     // document.getElementById('automaticClick').innerText = automaticClick
// }
// function display() {
//     if (cheese <= apple)
//         document.getElementById('apple').disabled = true
//     else
//         document.getElementById('apple').disabled = false

//     if (cheese <= orange)
//         document.getElementById('orange').disabled = true
//     else
//         document.getElementById('orange').disabled = false

//     if (cheese <= dog)
//         document.getElementById('dog').disabled = true
//     else
//         document.getElementById('dog').disabled = false

//     if (cheese <= cat)
//         document.getElementById('cat').disabled = true
//     else
//         document.getElementById('cat').disabled = false



// }


// function drawClickAmount(trm) {
//     let amount = clickUpgrades[trm].quantity
//     document.getElementById(trm).innerText = amount
// }
// function drawAutomaticAmount(trm) {
//     let automaticAmount = automaticUpgrades[trm].quantity
//     document.getElementById(trm).innerText = automaticAmount
// }
// function drawClickCost(para) {
//     cost *= 2
//     document.getElementById(para).innerText = cost
// }
// function drawAutoCost(para) {
//     cost *= 4
//     document.getElementById(para).innerText = cost
// }

// function startInterval() {
//     setInterval(collectAutoUpgrades, 1000);
// }
// function collectAutoUpgrades() {
//     let collect = amount.dog * bonus.dog
//     cheese += collect
// }

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
        price: 20,
        quantity: 0,
        multiplier: 1.5
    },
    cat: {
        price: 30,
        quantity: 0,
        multiplier: 2.5
    }
}
function mine() {
    // alert("The number of your cheese is :" + cheese)
    cheese++
    update()
}
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
        document.getElementById('apple').disabled = false
        amount++
        click += bonus
        cheese -= cost
    } else {
        document.getElementById('apple').disabled = true
    }
    update()
}
function buyAutomaticUpgrade(par) {
    let cost = automaticUpgrades[par].price
    let amount = automaticUpgrades[par].quantity
    let bonus = Math.floor(automaticUpgrades[par].multiplier)
    if (cheese >= cost) {
        amount++
        click += bonus
        cheese += cost
    }
    update()
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
displayInventory()