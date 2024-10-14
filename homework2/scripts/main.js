import * as Shop from './shop.js';
let getS = (sel) => document.querySelector(sel);
let getAllS = (sel) => document.querySelectorAll(sel);
let productType = {
    beer: 'Пиво',
    wine: 'Вино',
    pepsi: 'Пепсі',
}

function addProduct(event){
    event.preventDefault();
    console.log('yes')
    let value = +getS('#inputText').value;
    let valueRadio = getS('input[name="product"]:checked').value;
    let checked = true;
    let elem;
    if(Shop.checkNum(value, valueRadio) !== false){
        if(Shop.checkNum(value, valueRadio) !== false && Shop.checkNum(value, valueRadio) !== 'warning'){
            getS('#buttonBuy').disabled = false;
            getAllS('.textarea > p').forEach(element => {
                if(element.id === valueRadio){
                    checked =  false;
                    elem = element;
                }
            });
            if(checked){
                let el = document.createElement('p');
                el.textContent = `${productType[valueRadio]}: ${value} шт.`;
                el.id = valueRadio;
                getS('.textarea').append(el);
            }
            else{
                elem.textContent = `${productType[valueRadio]}: ${value} шт.`;
            }
        }
        else if(Shop.checkNum(value, valueRadio) === 'warning'){
            getS('.warning__text').textContent = `Вибачте, але на складі залишилося ${productType[valueRadio]} ${Shop.returnCountProduct()[valueRadio]} штук`;
            getS('.warning-container').style.display = 'block';
        }
    }    
            
    
}


function buyProduct(event){
    event.preventDefault();
    getS('#buttonBuy').disabled = true;
    Shop.buyProduct();
    let productCount = Shop.returnCountProduct();
    let productUser = Shop.returnProductUser();
    getS('#formBalance').value = Shop.returnBalance() + ' грн.';
    getS('#formBeer').value = productCount.beer + ' шт.';
    getS('#formWine').value = productCount.wine + ' шт.';
    getS('#formPepsi').value = productCount.pepsi + ' шт.';
    getS('.receipt').innerHTML = '';
    productUser.beer = 0;
    productUser.wine = 0;
    productUser.pepsi = 0;
    getAllS('.textarea > p').forEach(element => {
        getS('.receipt').append(element);
    });
    let elemReceipt = document.createElement('p');
    elemReceipt.textContent = `Всього: ${Shop.returnReceipt()} гривень.`;
    getS('.receipt').append(elemReceipt);
    getS('.textarea').innerHTML = '';
}

getS('#buttonAdd').addEventListener('click', addProduct);
getS('#buttonBuy').addEventListener('click', buyProduct);
getS('#closeWarning').addEventListener('click', function(event){
    event.preventDefault();
    getS('.warning-container').style.display = 'none';
})
