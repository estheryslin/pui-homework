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

glaze_drop_down()

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

pack_size_drop_down()

function total_price() {
    let original_price = 2.49;
    let glaze_price = parseFloat(document.querySelector('#glazing').value);
    let pack_price = parseFloat(document.querySelector('#packsize').value);
    final_price = ((glaze_price + original_price) * pack_price);
    document.querySelector('.product_price').textContent = "$"+final_price.toFixed(2);
}