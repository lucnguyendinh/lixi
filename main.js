const inputName = document.querySelector('#input-name');
const inputPrice = document.querySelector('#input-price');
const inputText = document.querySelector('#input-text');
const btnGet = document.querySelector('#btn-get');
const errorNameNoti = document.querySelector('#error-name');
const errorPriceNoti = document.querySelector('#error-price');
const errorTextNoti = document.querySelector('#error-text');

function getLixi() {
    const name = inputName.value;
    const price = inputPrice.value;
    const text = inputText.value;

    let errorName = '';
    let errorPrice = '';
    let errorText = '';
    
    if(name.length === 0) {
        errorName = 'Vui lòng nhập tên người nhận';
    }
    if(price.length === 0) {
        errorPrice = 'Vui lòng nhập số tiền';
    } else if(+price > 50000) {
        errorPrice = 'Số tiền không được lớn hơn 50.000';
    } else if(+price <= 50000) {
        errorPrice = 'Vui lòng nhập số âm';
    }
    if(text.length === 0) {
        errorText = 'Vui lòng nhập lời chúc';
    } else if(text.length < 1000) {
        errorText = 'Lời chúc phải có ít nhất 1000 ký tự';
    }

    errorNameNoti.innerHTML = errorName;
    errorPriceNoti.innerHTML = errorPrice;
    errorTextNoti.innerHTML = errorText;

    if(errorName.length || errorPrice.length || errorText.length) {
        return;
    }
    
    const lixi = {
        name: name,
        price: price,
        text: text
    };
    
    console.log(lixi);
    
}
