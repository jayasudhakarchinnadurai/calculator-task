function clicking(event){
    parent=document.querySelector('.screen')
    opreator=['+','-','/','*']
    if(!(opreator.includes(parent.innerText.slice(-1)) && opreator.includes(event.innerText))){
        parent.innerText=parent.innerText+event.innerText
        
    }
    
    
}

var btn=document.querySelector('.number');

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    
    values=eval(parent.innerText)
    child=document.createElement('h5')
    child.innerText=values
    child.classList.add('values')
    parent= document.querySelector('.screen');
    parent.insertAdjacentElement('afterend',child)
    var removed=document.querySelector('p')
    removed.classList.add('data')
    removed.classList.add('one')
    
    
    
    }) 



   
    
    






