//detail page

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

const cart = []

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

function glaze_drop_down(){

    let glaze_info = [
        {name: "Keep Original", price: 0},
        {name: "Sugar milk", price: 0},
        {name: "Vanilla milk", price: .50},
        {name: "Double chocolate", price: 1.50}
    ]

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

function pack_size_drop_down() {
    let pack_info = [
        {number: 1, price_mult: 1},
        {number: 3, price_mult: 3},
        {number: 6, price_mult: 5},
        {number: 12, price_mult: 10}
    ]

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
        
        // Update heading
        document.querySelector('.center_img p').textContent = `${rollType} Cinnamon Roll`;
        
        // Update image
        const imgElement = document.querySelector('.bun_detail_img img');
        imgElement.src = `../assets/products/${roll.imageFile}`;
        imgElement.alt = `${rollType} Cinnamon Roll`;
        
        // Update initial price
        document.querySelector('.product_price').textContent = `$${roll.basePrice.toFixed(2)}`;
    }
}

function total_price() {
    let original_price = 2.49;
    let glaze_price = parseFloat(document.querySelector('#glazing').value);
    let pack_price = parseFloat(document.querySelector('#packsize').value);
    final_price = ((glaze_price + original_price) * pack_price);
    document.querySelector('.product_price').textContent = "$"+final_price.toFixed(2);
}
//add to cart

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function add_to_cart(){

    let rollType = params.get('roll');
    let glazeSel= document.querySelector('#glazing');
    let rollGlazing = glazeSel.options[glazeSel.selectedIndex].innerHTML;

    let packSel = document.querySelector('#packSize');
    let packSize = packSel.options[packSel.selectedIndex].innerHTML;

    let basePrice = 2.49;

    for(const [key, {basePrice}] of Object.entries(rolls)){
        let stringKey = String(key);
        if(stringKey == rollType){
            base_price = basePrice;
            break;
        }
    }

    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(roll);
    console.log(cart);
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
});