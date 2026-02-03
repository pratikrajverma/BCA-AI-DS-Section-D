const displayValue = document.querySelector('#displayValue')
 
 
let DecBtn = document.querySelector('#DecBtn')
let ResetBtn = document.getElementById('ResetBtn')
let IncBtn = document.querySelector('#IncBtn')

let x = 0

DecBtn.addEventListener('click', function(){
    x = x -1;
    displayValue.value = x
})

ResetBtn.addEventListener('click',()=>{
    x  = 0
    displayValue.value = x
})

IncBtn.addEventListener('click', ()=>{
    x = x + 1
     displayValue.value = x
})