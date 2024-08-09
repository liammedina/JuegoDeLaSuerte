let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

console.log(numeroSecreto);

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroSecreto === numeroUsuario){ /*=== compara el tipo y el valor, no sólo el valor*/
        asignarTextoElemento('p', `Felicitaciones! Ganaste el Juego en ${intentos} ${(intentos === 1) ? 'intento': "intentos"}`);
        document.getElementById("reiniciar").removeAttribute('disabled');

    } else if(numeroUsuario > numeroSecreto){
        asignarTextoElemento('p', "Ops! Intenta de nuevo. El número es menor");
    } else{
        asignarTextoElemento('p', "Ops! Intenta de nuevo. El número es mayor");
    }; 
    intentos++;
    limpiarCelda();
    return
} 

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego de la Suerte');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el número generado ya está en la lista
    if(listaNumerosSorteados == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.')
    } else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCelda(){
    document.querySelector ('#valorUsuario').value = '';
}

function reiniciarJuego(){
    limpiarCelda();
    condicionesIniciales();
    generarNumeroSecreto();
}

reiniciarJuego()


