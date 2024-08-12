document.getElementById('deposit-btn').addEventListener('click', function(){
    //1. new deposit amount : 
    const depositField = document.getElementById('deposit-field')
    var newDepositValueString = depositField.value;
    // console.log(typeof depositValue); -->  string ashe
    var newDepositValueNum = parseFloat(newDepositValueString);

    //6. remove new deposit value
    depositField.value = '';

    // jdi new deposit value te string ba kichu na daoa hoy tokhon NaN hoye jay etar jonno condition daoao hoyeche NaN hole function bondho kora hobe
    if(isNaN(newDepositValueNum)){
        alert('Please enter a valid number')
        return
    }
  
    //2. previous deposit total
    const depositArea = document.getElementById('deposit-area')
    var previousDepositAmountString = depositArea.innerText;
    var previousDepositAmountNum = parseFloat(previousDepositAmountString);
    
    //3. new deposit total
    depositArea.innerText = previousDepositAmountNum + newDepositValueNum;
    

    //4.  previous total balance
    const balanceArea = document.getElementById('balance-area')
    var previousBalanceAmountString = balanceArea.innerText;
    var previousBalanceAmountNum = parseFloat(previousBalanceAmountString);

    //5. new deposit total
     balanceArea.innerText = previousBalanceAmountNum + newDepositValueNum;
     depositField.value = '';

})