let senha = "kaka1234"

let senhaDigitada = prompt("Digite a sua senha");

let tentativas = 3 

while(tentativas >0){
    tentativas = tentativas - 1;
    if (senhaDigitada.toLowecase().trim()===senha.toLowerCase().trim()){
        alert("Acesso Permitido");
        break;
    }
    else{
        if (tentativas === 0){
            alert("Número de tentativas esgotados,acesso negado");
            break;
        }

        alert("Senha incorreta,tentativas restantes:".concat(tentativas));
        senhaDigitada = prompt("digite novamente")
    }

}