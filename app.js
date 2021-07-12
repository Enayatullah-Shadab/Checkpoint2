let cheese = 0;
let click = 1
let autoClick = 0


let clickUpgrades = {
    apple: {
        price: 5,
        quantity: 0,
        multiplier: 1.5
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
        multiplier: 3.5
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
    displayInventory();
}
function buyClickUpgrade(term) {
    let cost = clickUpgrades[term].price
    let qty = clickUpgrades[term].quantity

    let multi = clickUpgrades[term].multiplier

    if (cheese >= cost) {
        qty++
        cheese -= cost
        cost += Math.abs(Math.round(multi))
    }


    clickUpgrades[term].price = Math.floor(Math.round(cost));
    clickUpgrades[term].quantity = Math.floor(Math.round(qty));
    clickUpgrades[term].multiplier = Math.floor(Math.round(multi));


    if (term == 'apple') {
        document.getElementById('apple').innerText = "🍎 " + clickUpgrades[term].price + " points";
        // cost//
        document.getElementById("app").innerHTML = clickUpgrades[term].quantity;
    }


    if (term == 'orange') {
        document.getElementById('orange').innerText = "🍊 " + clickUpgrades[term].price + " points"
        document.getElementById("org").innerHTML = clickUpgrades[term].quantity;

    }
    update()

    // displayInventory()
}
function buyAutomaticUpgrade(par) {
    let cost = automaticUpgrades[par].price
    let qty = automaticUpgrades[par].quantity

    let multi = automaticUpgrades[par].multiplier

    if (cheese >= cost) {
        qty++
        cheese -= cost
        cost += Math.abs(Math.round(multi))
    }

    automaticUpgrades[par].price = cost;
    automaticUpgrades[par].quantity = qty;
    automaticUpgrades[par].multiplier = multi;

    if (par == 'dog') {
        document.getElementById('dog').innerText = "🐶 " + cost + " points"
        document.getElementById("do").innerHTML = automaticUpgrades[par].quantity;
    }


    if (par == 'cat') {
        document.getElementById('cat').innerText = "😺 " + cost + " points"
        document.getElementById("ca").innerHTML = automaticUpgrades[par].quantity;
    }
    update()
    displayInventory()

}

function mine(increaseValue) {
    let IntCheese = 1
    if (increaseValue) {
        cheese += increaseValue
    } else
        cheese += IntCheese
    update()
}

function buyAutoSetInt(btnVal) {
    let intId;

    console.log(btnVal)
    buyAutomaticUpgrade(btnVal);
    intId = setInterval(mine, 1000);

}

function displayInventory() {
    if (clickUpgrades.apple) {
        cheeseCheck = clickUpgrades.apple.price
        if (cheese >= cheeseCheck)
            document.getElementById('apple').disabled = false
        else
            document.getElementById('apple').disabled = true
    }
    if (clickUpgrades.orange) {
        cheeseCheck = clickUpgrades.orange.price
        if (cheese >= cheeseCheck)
            document.getElementById('orange').disabled = false
        else
            document.getElementById('orange').disabled = true
    }
    if (automaticUpgrades.dog) {
        cheeseCheck = automaticUpgrades.dog.price
        if (cheese >= cheeseCheck)
            document.getElementById('dog').disabled = false
        else
            document.getElementById('dog').disabled = true
    }
    if (automaticUpgrades.cat) {
        cheeseCheck = automaticUpgrades.cat.price
        if (cheese >= cheeseCheck)
            document.getElementById('cat').disabled = false
        else
            document.getElementById('cat').disabled = true
    }
}
update();