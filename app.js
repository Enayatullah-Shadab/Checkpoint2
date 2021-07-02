let cheese = 0;
let apple = 0;
let orange = 0;
let dog = 0;
let cat = 0;

let clickUpgrade = {
    apple: {
        price: 50,
        quantity: 0,
        multiplayer: 1
    },
    orange: {
        price: 200,
        quantity: 0,
        multiplayer: 5
    }
};

let automaticUpgrades = {
    dog: {
        price: 300,
        quantity: 0,
        multiplayer: 6
    },
    cat: {
        price: 500,
        quantity: 0,
        multiplayer: 10
    }
}
function mine() {
    // alert("The number of your cheese is :" + cheese)
    cheese++
    apple++
    orange++
    dog++
    cat++
    update()
}
function update() {
    document.getElementById('cheese').innerText = cheese
    document.getElementById('apple').innerText = apple
    document.getElementById('orange').innerText = orange
    document.getElementById('dog').innerText = dog
    document.getElementById('cat').innerText = cat

}
mine()