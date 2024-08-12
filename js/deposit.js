document.getElementById('deposit-btn').addEventListener('click', function(){
    // new deposit amount : 
    const depositField = document.getElementById('deposit-field')
    var newDepositValueString = depositField.value;
    // console.log(typeof depositValue); -->  string ashe
    var newDepositValueNum = parseFloat(newDepositValueString);

    // previous deposit total
    const depositArea = document.getElementById('deposit-area')
    var previousDepositAmountString = depositArea.innerText;
    var previousDepositAmountNum = parseFloat(previousDepositAmountString);
    
    //new deposit total
    depositArea.innerText = previousDepositAmountNum + newDepositValueNum;
    

    // previous total balance
    const balanceArea = document.getElementById('balance-area')
    var previousBalanceAmountString = balanceArea.innerText;
    var previousBalanceAmountNum = parseFloat(previousBalanceAmountString);

     //new deposit total
     balanceArea.innerText = previousBalanceAmountNum + newDepositValueNum;
     depositField.value = '';

})