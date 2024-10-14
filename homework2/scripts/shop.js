let countProduct = {
    beer: 100,
    wine: 50,
    pepsi:80,
}
let balance = 1000;
let receipt = 0;
let priceProduct = {
    priceBeer: 40,
    priceWine: 120,
    pricePepsi: 36,
}
let productUser = {
    beer: 0,
    wine: 0,
    pepsi: 0
}
function returnCountProduct(){
    return countProduct;
}
function returnProductUser(){
    return productUser;
}
function returnBalance(){
    return balance;
}
function returnReceipt(){
    return receipt;
}
function checkNum(n, valueRadio){
    if(typeof n === 'number' && !Number.isNaN(n) && +n > 0){
        productUser[valueRadio] = n;
        if(countProduct.beer - productUser.beer >= 0 && countProduct.wine - productUser.wine >= 0 && countProduct.pepsi - productUser.pepsi >= 0){
            return true;
        }
        else{
            productUser[valueRadio] = 0;
            return 'warning';
        }
    }
    return false;
}
function buyProduct(){
    let n = (productUser.beer*priceProduct.priceBeer) + (productUser.wine*priceProduct.priceWine) + (productUser.pepsi*priceProduct.pricePepsi);
    countProduct.beer -= productUser.beer;
    countProduct.wine -= productUser.wine;
    countProduct.pepsi -= productUser.pepsi;
    balance += n;
    receipt = n;
}
export { checkNum, returnCountProduct, returnProductUser, returnBalance, returnReceipt, buyProduct };