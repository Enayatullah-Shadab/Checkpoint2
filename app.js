let cheese = 0;
let click = 1
let autoClick = 0


let clickUpgrades = {
    apple: {
        price: 5,
        quantity: 0,
        multiplier: 2
    },
    orange: {
        price: 10,
        quantity: 0,
        multiplier: 3
    }
};

let automaticUpgrades = {
    dog: {
        price: 15,
        quantity: 0,
        multiplier: 4
    },
    cat: {
        price: 25,
        quantity: 0,
        multiplier: 5
    }
}


function update() {
    document.getElementById('cheese').innerText = cheese
    document.getElementById('che').innerText = cheese
    // document.getElementById('app').innerText = click
}
function buyClickUpgrade(term) {
    let cost = clickUpgrades[term].price
    let qty = clickUpgrades[term].quantity
    // let bonus = clickUpgrades[term].multiplier
    let multi = clickUpgrades[term].multiplier

    if (cheese >= cost) {
        qty++
        cheese -= cost
        cost += Math.abs(Math.round(multi))


        if (qty >= 5) {
            cheese += 1;
        }
    }


    clickUpgrades[term].price = cost;
    clickUpgrades[term].quantity = qty;
    clickUpgrades[term].multiplier = multi;
    //   debugger;
    // document.getElementById("apple").innerText = clickUpgrades[term].quantity;
    // update()


    if (term == 'apple') {
        document.getElementById('apple').innerText = cost
        document.getElementById("app").innerHTML = clickUpgrades[term].quantity;
    }


    if (term == 'orange') {
        document.getElementById('orange').innerText = cost
        document.getElementById("org").innerHTML = clickUpgrades[term].quantity;

    }
    // document.getElementById("app").innerHTML = clickUpgrades[term].quantity;

    update()

    displayInventory()
}
// function buyAutomaticUpgrade(par) {
//     let cost = automaticUpgrades[par].price
//     let amount = automaticUpgrades[par].quantity
//     let bonus = Math.floor(automaticUpgrades[par].multiplier)
//     setInterval((automaticClick) => {
//         if (cheese >= cost) {
//             amount++
//             click += bonus
//             cheese += cost
//         }
//     }, 3000);

//     update()
//     displayInventory()
// }

function buyAutomaticUpgrade(par) {
    let cost = automaticUpgrades[par].price
    let qty = automaticUpgrades[par].quantity
    // let bonus = buyAutomaticUpgrade[term].multiplier
    let multi = automaticUpgrades[par].multiplier

    if (cheese >= cost) {
        qty++
        cheese -= cost
        cost += Math.abs(Math.round(multi))


        if (qty >= 5) {
            cheese += 1;
        }
    }


    automaticUpgrades[par].price = cost;
    automaticUpgrades[par].quantity = qty;
    automaticUpgrades[par].multiplier = multi;
    //   debugger;
    // document.getElementById("apple").innerText = clickUpgrades[par].quantity;
    // update()


    if (par == 'dog') {
        document.getElementById('dog').innerText = cost
        document.getElementById("do").innerHTML = automaticUpgrades[par].quantity;
    }


    if (par == 'cat') {
        document.getElementById('cat').innerText = cost
        document.getElementById("ca").innerHTML = automaticUpgrades[par].quantity;

    }
    // document.getElementById("app").innerHTML = automaticUpgrades[term].quantity;

    update()

    displayInventory()




    // let cost = automaticUpgrades[par].price
    // let amount = automaticUpgrades[par].quantity
    // let bonus = Math.floor(automaticUpgrades[par].multiplier)
    // if (cheese >= cost) {
    //     amount++
    //     click += bonus
    //     cheese += cost
    // }
    // update()
    // displayInventory()
}

function mine(increaseValue) {
    let IntCheese = 1
    if (increaseValue) {
        cheese += increaseValue
    } else
        cheese += IntCheese
    update()
}

// function buyAutoSetInt(btnval) {
//     let intId;

//     console.log(btnval)
//     intId = setInterval(incrementCheese, 1000)
// }

function displayInventory() {
    if (clickUpgrades.apple) {
        cheeseCheck = clickUpgrades.apple.price
        //     if (cheese <= cheeseCheck)
        //          document.getElementById('apple').disabled = true
        //     else
        //         document.getElementById('apple').disabled = false
    }
    if (clickUpgrades.orange) {
        cheeseCheck = clickUpgrades.orange.price
        // if (cheese <= cheeseCheck)
        // document.getElementById('orange').disabled = true
        // else
        // document.getElementById('orange').disabled = false
    }
    if (automaticUpgrades.dog) {
        cheeseCheck = automaticUpgrades.dog.price
        // if (cheese <= cheeseCheck)
        //     document.getElementById('dog').disabled = true
        // else
        //     document.getElementById('dog').disabled = false
    }
    if (automaticUpgrades.cat) {
        cheeseCheck = automaticUpgrades.cat.price
        // if (cheese <= cheeseCheck)
        //     document.getElementById('cat').disabled = true
        // else
        //     document.getElementById('cat').disabled = false
    }
}
