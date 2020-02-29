const bankLimit = document.querySelector('.bank-limit');
const telPrice = document.querySelector('.tel-price');
const clear = document.querySelector('.clear');

const calculateBtn = document.querySelector('.calculateBtn');
const totalPriceDisplay = document.querySelector('.total-price');
const totalAmountDisplay = document.querySelector('.total-amount');

var telPriceValue = 0;
var bankLimitValue = 0;
var totalPrice = 0;


calculateBtn.addEventListener('click', e => {
    e.preventDefault();
    calculatePrice()
});

function calculatePrice(){
    telPriceValue = Number(telPrice.value);
    bankLimitValue = Number(bankLimit.value);
    
    while (totalPrice < bankLimitValue){
        totalPrice = totalPrice + telPriceValue; 
    }
    
    totalPriceDisplay.innerHTML = totalPrice - telPriceValue;
    totalAmountDisplay.innerHTML = (totalPrice - telPriceValue)  / telPriceValue;
}

clear.addEventListener('click', (e) => {
    document.querySelector('form').reset(e);
    totalPriceDisplay.innerHTML = '';
    totalAmountDisplay.innerHTML = '';
}
)
    
    

