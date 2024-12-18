const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

const cart = []

const cart_bun_price = [];

function populate_name(div){
    let selected_div = document.querySelectorAll(div);
    if (selected_div.length<=0){return;}

    let i=0;

    for (const [key] of Object.entries(rolls)){
        if(i < selected_div.length){
            selected_div[i].innerHTML = key + " Cinnamon Roll";
            selected_div[i].style.textDecoration = "underline";
            i++;
        }
    }
}

function populate_price(div){
    let selected_div = document.querySelectorAll(div);
    if (selected_div.length<=0){return;}
    
    let i=0;
    
    for (const [, {basePrice}] of Object.entries(rolls)){
        if(i < selected_div.length){
            selected_div[i].innerHTML = "$" + basePrice;
            selected_div[i].style.textDecoration = "none";
            i++;
        }
    }
}

function update_query(div){
    let selected_div = document.querySelectorAll(div);
    const bun_keys = Object.keys(rolls)

    for(let i=0; i<selected_div.length; i++){
        let link = 'product.html?roll=' + bun_keys[i];
        selected_div[i].addEventListener("click", function(){window.location.href=link});
    }
}

function update_photo(){
    document.querySelector('.page-head').innerHTML = rollType + "Cinnamon Roll";
    document.querySelector('.product-img').innerHTML = "<img src=products/" + rollType.toLowerCase()+ "-cinnamon-roll.jpg>";
}

let glaze_info = [
    {name: "Keep Original", price: 0},
    {name: "Sugar milk", price: 0},
    {name: "Vanilla milk", price: .50},
    {name: "Double chocolate", price: 1.50}
]

function glaze_drop_down(){

    let glaze_length = glaze_info.length;
    const glaze_drop_down = document.querySelector('#glazing');
    for (let i=0; i<glaze_length; i++){
        let option = document.createElement("option");
        let name = glaze_info[i].name;
        let price = glaze_info[i].price;
        option.textContent = name;
        option.value = price;
        glaze_drop_down.appendChild(option);
    }
}

let pack_info = [
    {number: 1, price_mult: 1},
    {number: 3, price_mult: 3},
    {number: 6, price_mult: 5},
    {number: 12, price_mult: 10}
]

function get_glaze_mult(original_number) {
    const number = pack_info.find(g => g.number === original_number);
    if (number) {
        return number.price_mult;
    } else {
        return original_number;
    }
}

function pack_size_drop_down() {

    let pack_length = pack_info.length;
    const pack_drop_down = document.querySelector('#packsize');
    for (let i=0; i<pack_length; i++){
        let option = document.createElement("option");
        let number = pack_info[i].number;
        let price_mult = pack_info[i].price_mult;
        option.textContent = number;
        option.value = price_mult;
        pack_drop_down.appendChild(option);
    }
}

function updateProductDetails() {
    if (rollType && rolls[rollType]) {
        const roll = rolls[rollType];
        
        document.querySelector('.center_img p').textContent = rollType + " Cinnamon Roll";
        
        const imgElement = document.querySelector('.bun_detail_img img');
        imgElement.src = "../assets/products/" + roll.imageFile;
        imgElement.alt = rollType + " Cinnamon Roll";
        
        document.querySelector('.product_price').textContent = "$" + roll.basePrice.toFixed(2);
    }
}

function total_price() {
    let original_price = 2.49;
    let glaze_price = parseFloat(document.querySelector('#glazing').value);
    let pack_price = parseFloat(document.querySelector('#packsize').value);
    final_price = ((glaze_price + original_price) * pack_price);
    document.querySelector('.product_price').textContent = "$"+final_price.toFixed(2);
}

function load_cart(){
    let cart_buns = JSON.parse(localStorage.getItem('cart')) || []; 
    return cart_buns; 
}

function save_cart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart)); 
    console.log('cart saved to local storage:', JSON.parse(localStorage.getItem('cart'))); 
}

const cart_buns = load_cart(); 


class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function save_cart(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
}

function add_to_cart(){

    let rollType = params.get('roll');
    if (rollType ==  null){
        rollType = 'Original'; 
    }
    let glaze_sel= document.querySelector('#glazing');
    let rollGlazing = glaze_sel.options[glaze_sel.selectedIndex].innerHTML;

    let pack_sel = document.querySelector('#packsize');
    let packSize = pack_sel.options[pack_sel.selectedIndex].innerHTML;

    let basePrice = rolls[rollType].basePrice;

    for(const [key, {basePrice}] of Object.entries(rolls)){
        let stringKey = String(key);
        if(stringKey == rollType){
            base_price = basePrice;
            break;
        }
    }

    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart_buns.push(roll);
    save_cart(cart_buns); 
}

document.addEventListener('DOMContentLoaded', function() {

    if (document.querySelector('.bun_table')) {
        populate_name('.item_name');
        populate_price('.item_price');
        update_query('.bun_item');

    }
    
    if (document.querySelector('.bun_detail_container')) {
        updateProductDetails();
        glaze_drop_down();
        pack_size_drop_down();
        total_price(); 
        
        document.querySelector('#glazing').addEventListener('change', total_price);
        document.querySelector('#packsize').addEventListener('change', total_price);
    }
    if (document.querySelector('.cart_container')) {

        display_cart_items();
    }
});

// dynamic cart

function update_cart_total() {
    let total = 0;
    for (let price of cart_bun_price) {
        total += price;
    }

    const total_priceElement = document.querySelector('.total_flex_container .total_text:last-child');
    total_priceElement.textContent = "$" + total.toFixed(2);
}

function remove_cart_item(bun, cart_itemDiv) {

    const index = cart_buns.indexOf(bun);
    if (index > -1) {
        cart_buns.splice(index, 1);
        cart_bun_price.splice(index, 1); 
    }

    cart_itemDiv.remove();
    save_cart(cart_buns); 

update_cart_total();
}   

function display_cart_items() {
    const cart_container = document.querySelector(".cart_container");
    cart_container.innerHTML = '';
    for (let bun of cart_buns) {
        const cart_itemDiv = document.createElement("div");
        cart_itemDiv.classList.add('cart_item');

        const imgDiv = document.createElement("div");
        imgDiv.classList.add('bun_item_cart');
        const img = document.createElement("img");
        img.src = `../assets/products/${bun.type.toLowerCase()}-cinnamon-roll.jpg`;
        img.width = 125;
        img.alt = `${bun.type} Cinnamon Roll`;
        imgDiv.appendChild(img);
        cart_itemDiv.appendChild(imgDiv);
        
        const infoDiv = document.createElement("div");
        infoDiv.classList.add('cart_item_info');

        const textDiv = document.createElement("div");
        textDiv.classList.add('cart_text');
        textDiv.innerHTML = `
            <p>${bun.type} Cinnamon Roll</p>
            <p>Glazing: ${bun.glazing}</p>
            <p>Pack Size: ${bun.size}</p>
        `;
        infoDiv.appendChild(textDiv);

        const priceDiv = document.createElement("div");
        priceDiv.classList.add('cart_price');
        const final_size = get_glaze_mult(Number(bun.size));
        const item_price = ((bun.basePrice + (glaze_info.find(glaze => glaze.name === bun.glazing).price)) * final_size).toFixed(2);
        priceDiv.innerHTML = `<p>$${item_price}</p>`;
        infoDiv.appendChild(priceDiv);

        const removeDiv = document.createElement("div");
        removeDiv.classList.add('remove_text');
        removeDiv.innerHTML = `<p>Remove</p>`;
        removeDiv.addEventListener("click", function() {
            remove_cart_item(bun, cart_itemDiv);
        });
        infoDiv.appendChild(removeDiv);

        cart_itemDiv.appendChild(infoDiv);
        cart_container.appendChild(cart_itemDiv);

        cart_bun_price.push(parseFloat(item_price));
    }

    update_cart_total();
}

// dynamic detail page


let buttons = document.getElementsByClassName('add_to_cart_button'); 
if (buttons.length > 0) {
    buttons[0].addEventListener('click', () => {
        add_to_cart();
    });
}
