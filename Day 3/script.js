// let para =  document.getElementById('para1')

// console.log(para)
// console.log(para.textContent)
 
let clickBtn = document.querySelector('#clickBtn')

let para = document.querySelector('.para')
console.log(para)
// console.log(clickBtn)

clickBtn.addEventListener('click', function(){
    // console.log('first')
    // para.style.cssText = 'background-color:red; height:100px; width:300px;'
    // para.textContent = 'this is new content By DOM...'
    para.setAttribute('id', 'para1')

})