let won=document.getElementById('won')
let dice1=document.querySelector('#dice1')
let dice2=document.querySelector('#dice2')
let dice3=document.querySelector('#dice3')
let button=document.querySelector('button')
button.addEventListener('click',function(){
    dice1.style.backgroundColor="white"
    dice2.style.backgroundColor="white"
    dice3.style.backgroundColor="white"
    let num1=Math.floor(Math.random()*6)+1
    let num2=Math.floor(Math.random()*6)+1
    let num3=Math.floor(Math.random()*6)+1
    dice1.textContent=num1
    dice2.textContent=num2
    dice3.textContent=num3
    if ((num1>num2) &&(num1>num3)){
        won.textContent="Player 1 wons"
        dice1.style.backgroundColor="green"

        if (num2>num3){
            dice2.style.backgroundColor="yellow"
            dice3.style.backgroundColor="red"
        }else if(num3>num2){
            dice3.style.backgroundColor="yellow"
            dice2.style.backgroundColor="red"
        }else{
            dice3.style.backgroundColor="blue"
            dice2.style.backgroundColor="blue"
        }
    }
    else if((num2>num1) && (num2>num3)){
        won.textContent="Player 2 wons"
        dice2.style.backgroundColor="green"
        if (num1>num3){
            dice1.style.backgroundColor="yellow"
            dice3.style.backgroundColor="red"
        }else if (num3>num1){
            dice3.style.backgroundColor="yellow"
            dice1.style.backgroundColor="red"
        }else{
            dice3.style.backgroundColor="blue"
            dice1.style.backgroundColor="blue"
        }
    }
        else if ((num3>num2) && (num3>num1)){
        won.textContent="Player 3 wons!"
        dice3.style.backgroundColor="green"
        if (num2>num1){
            dice2.style.backgroundColor="yellow"
            dice1.style.backgroundColor="red"
            
        } else if(num1>num2){
            dice1.style.backgroundColor="yellow"
            dice2.style.backgroundColor="red"
        } else{
            dice1.style.backgroundColor="blue"
            dice2.style.backgroundColor="blue"
        }
    }
    else if ((num1==num2)&&(num1>num3)){
        won.textContent="Player 1 and Player 2 wons"
        dice1.style.backgroundColor="green"
        dice2.style.backgroundColor="green"
        dice3.style.backgroundColor="red"
    }else if ((num2==num3)&&(num2>num1)){
        won.textContent="Player 2 and Player 3 wons"
        dice2.style.backgroundColor="green"
        dice3.style.backgroundColor="green"
        dice1.style.backgroundColor="red"
    }else if((num1==num3)&&(num1>num2)){
        won.textContent="Player 1 and Player 3 wons"
        dice1.style.backgroundColor="green"
        dice3.style.backgroundColor="green"
        dice2.styele.backgroundColor="red"
    }else if((num1==num2)&&(num1==num3)){
        won.textContent="Three way tie!!"
        dice1.style.backgroundColor="blue"
        dice2.style.backgroundColor="blue"
        dice3.style.backgroundColor="blue"
        
    }

})
