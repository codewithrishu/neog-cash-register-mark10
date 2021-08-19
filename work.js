//taking all the values
var billAmount = document.querySelector('#bill');
var nextbtn = document.querySelector('.next')
var label = document.querySelector('#label')
var CashAmount = document.querySelector('#cash');
var check = document.querySelector('#btn');
var message = document.querySelector('#message')
var notesReturn = document.querySelectorAll('.notes-return')
var tabel = document.querySelector('#table')


//array for notes
var notes = [2000,500,100,20,10,5,1]

//to display cash field and button onclick
function displayHandler() {
    label.style.display = 'block'
    check.style.display = 'block'
    
}

//check bill amount is valid or not
function checkBillAmountValid() {
    clearHandler()
    if(!isNaN(billAmount.value) )
    {
        if(billAmount.value > 0)
            {
                displayHandler()
            }
        else
            {
                message.style.display = 'block'
                message.innerText = 'Invalid bill amount'
            }
    }
    else
    {
        message.style.display = 'block'
        message.innerText = 'plz enter a number'
    }
    
}

//checking cash amount is valid or not
function clickCashGivenValid() {
        clearHandler()

        if(CashAmount.value >= billAmount.value)
            {
                //calling calculate function
                calculateChange();
            }
        else
            {
                message.style.display = 'block'
                message.innerText = 'Do you want to wash plates'
            }

    }

//to clear for next input 
function clearHandler() 
{
    message.style.display = 'none'
    for(var i =0;i<notesReturn.length;i++){
        notesReturn[i].innerText = ""
    }
    
}


//function to calculate change
function calculateChange() {
    tabel.style.display = 'block'
    var bill = billAmount.value;
    var cash =  CashAmount.value;
    var returnAmount = cash - bill;
    for(var i=0;i<notes.length; i++){
     
    var value = Math.trunc( returnAmount/ notes[i])
    notesReturn[i].innerText = value
    returnAmount = returnAmount % notes[i]
     
     
 }
    
}
nextbtn.addEventListener('click', checkBillAmountValid)
check.addEventListener('click', clickCashGivenValid)