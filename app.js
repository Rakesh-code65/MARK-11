var initialPrice = document.querySelector('#initial-price');
var stockQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click',submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calaculateProfitAndLoss(ip,qty,curr);
}



function calaculateProfitAndLoss(initial, quantity, current){
    if(!initial)
        showOutput(`Invalid Initial Price`);
    
    if(!quantity)
        showOutput(`Invalid Quantity`);
    
    if(!current)
        showOutput(`Invalid current Price`);
    
    
    
    if(initial > current){
        var loss = ((initial - current) * quantity);
        var lossPercentage = Math.trunc((loss / initial) * 100).toFixed(2) ;

        showOutput(`the loss is ${loss}% and the loss-percent is ${lossPercentage}%`);
    }
    else if(current > initial ){
         var profit = ((current - initial) * quantity);
         var profitPercentage = Math.trunc((profit / initial) * 100).toFixed(2);

         showOutput(`the profit is ${profit}% and the profit-percentage is ${profitPercentage}%`);
    }
    else {
        showOutput(`No pain no gain no gain no pain`);

    }
}

function showOutput(message){
    
    outputBox.innerHTML= message;
}
