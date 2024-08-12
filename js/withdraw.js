document.getElementById('withdraw-btn').addEventListener('click', function(){
    //1. new withdraw amount
    var withdrawField = document.getElementById('withdraw-field');
    var newWithdrawAmountString = withdrawField.value;
    // console.log(typeof newWithdrawAmount); --> type : string
    var newWithdrawAmountNum = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmountNum) --> string ba kichu na dile NaN hoye jay

    // NaN atkanor jonno amdr akta alert dite hobe jdi string ba kichu na daoa hoy alert dibo akta r ekhaneo jehetu return daoa hobe karon number na dile to aggano jabe na tai withdraw field clear code k condition er upore anbo nahole clear hobe na

    if(isNaN(newWithdrawAmountNum)){
        alert('Please enter a valid number');
        return;
    }

    //2. previous withdraw amount
    var withdrawArea = document.getElementById('withdraw-area');
    var previousWithdrawAmountString = withdrawArea.innerText;
    var previousWithdrawAmountNum = parseFloat(previousWithdrawAmountString);

   //4. previous total balance
     const balanceArea = document.getElementById('balance-area')
     var previousBalanceAmountString = balanceArea.innerText;
     var previousBalanceAmountNum = parseFloat(previousBalanceAmountString);

    //  balance er chele beshi withdraw korte chaile alert

     //6. clear withdraw flield
     withdrawField.value = '';

    if(newWithdrawAmountNum > previousBalanceAmountNum){
        alert('Not enough amount in your account');
        return ; // ai return er karone kichu return korbe na rather ekhane function stop hoye jabe
    }

    // ekhane akta shomosha holo ai condition er karone balance kono change hobe na kintu new withdraw amount er man kintu change hobe karon ai condition 4 step er pore r new withdraw amount set kora hoyeche step 3 te kintu etao to update kora jabe na jdi withdaw er amount balance amount theke beshi hoye jay tai step 3 k condition er niche ana holo abr withdraw field clear ta niche rakhle function condition e stop hoye gele r agabe na fole withdraw field tao clear hobe na tai etake condition er upore ana holo karon step 1 er withdraw field declare kora hoyeche

     //3. total withdraw amount
     withdrawArea.innerText = previousWithdrawAmountNum + newWithdrawAmountNum;
 
     //5. new deposit total
      balanceArea.innerText = previousBalanceAmountNum - newWithdrawAmountNum;
   
})