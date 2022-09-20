var initialPrice = document.querySelector('#ntial-price');
var stockQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click',submitHandler);

function submitHandler(){
    var ip = (initialPrice.value);
    var qty = (stockQuantity.value);
    var curr = (currentPrice.value);

    calaculateProfitAndLoss(ip,qty,curr);
}



function calaculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = ((initial - current) * quantity).toFixed(2);
        var lossPercentage = Math.trunc((loss / initial) * 100) ;

        showOutput(`the loss is ${loss} and the losspercent is ${lossPercentage}%`);
    }
    else if(current > initial ){
         var profit = ((current - initial) * quantity).toFixed(2);
         var profitPercentage = Math.trunc((profit / initial) * 100);

         showOutput(`the profit is ${profit} and the profitpercentage is ${profitPercentage}`);
    }
    else {
        showOutput(`No pain no gain no gain no pain`);


    }
}



function showOutput(message){
    
    outputBox.innerHTML= message;
}