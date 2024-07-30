let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Unienzyme Bottle Of 30 Tablets',
        image: '1.PNG',
        price: 142.94
    },
    {
        id: 2,
        name: 'Pharmeasy Posture Corrector - Corrects Bad Posture - Eases Neck Back & Shoulder Pain - Small',
        image: '2.PNG',
        price: 499.50
    },
    {
        id: 3,
        name: 'Sugar Pop Nourishing Lip Balm - 02 Cherry',
        image: '3.PNG',
        price: 141.55
    },
    {
        id: 4,
        name: `Kellogg'S Froot Loops Original 285g Box`,
        image: '4.PNG',
        price: 185.00
    },
    {
        id: 5,
        name: 'Lacto Calamine Pure Aloe Vera Gel Aloe Vera Gel (with Vitamin E And Glycerin)',
        image: '5.PNG',
        price: 180.00
    },
    {
        id: 6,
        name: 'Nivea Cocoa Nourish Body Lotion Bottle Of 400 Ml',
        image: '6.PNG',
        price: 522.5
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}