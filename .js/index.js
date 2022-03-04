const numeroSecreto = Math.round(Math.random()*10);

const input = document.querySelector("input")
input.focus();

function adivinhar(){
    
    if(input.value == numeroSecreto){
        alert("Você acertou! Parabéns!!!")
    } else {
        alert("Não foi dessa vez... Tente novamente!")
    }
}