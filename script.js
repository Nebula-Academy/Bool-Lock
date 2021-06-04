const letters = document.querySelectorAll('.letter')
const answer = 'BOOLEAN'
let clicked = ''
let index = 0
let placeholder= ''

function addAllEventListeners(letters){
    for(let i=0; i <letters.length; i++){
        letters[i].addEventListener('click', inputChange)
    }
}

function inputChange (event){
    const targetE1 = event.target.innerHTML;
    if(answer[index] === targetE1){
        clicked += targetE1 
        index++
      
    } else {
        clicked = ''
        index=0
    }   
    placeholder= clicked
    for(let i=0; i<answer.length-clicked.length; i++){
        placeholder += '_ '
    }
    document.getElementById('textbox').innerHTML = placeholder
    if (answer === clicked){
        let answerEle= document.createElement('div')
        answerEle.innerHTML='Unlock The Box Key: aaaaaaaaab'
        document.body.appendChild(answerEle)
    }
}
addAllEventListeners(letters)


