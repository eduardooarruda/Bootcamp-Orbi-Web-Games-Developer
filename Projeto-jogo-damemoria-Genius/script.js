let ordem = [];
let  ordemUsuario = [];
let level = 1;
let suaVez = false;

function game(){
    
    jogarMaquina();
        
    console.log(ordem);
}

function jogarMaquina(){
    let count = 1;
    let menssagem = document.getElementById("menssagem");
    menssagem.innerHTML ='jogando...';
    let jogando = setInterval(()=>{
        if(count <= level){
            count++;
            let n = Math.floor(Math.random() * 4);
            ordem.push(n);

            // let green = document.getElementById("green");
            // let red = document.getElementById("red");
            // let yellow = document.getElementById("yellow");
            // let blue = document.getElementById("blue");

            if( n == 0){
                let green = document.getElementById("green");
                green.style.opacity = "0.3";
            }else if(n == 1){
                let red = document.getElementById("red");
                red.style.opacity = "0.3";
            }else if(n == 2){
                let yellow = document.getElementById("yellow");
                yellow.style.opacity = "0.3";
            }else if(n == 3){
                let blue = document.getElementById("blue");
                blue.style.opacity = "0.3";
            }

            setTimeout(()=>{
                green.style.opacity = "1";
                red.style.opacity = "1";
                yellow.style.opacity = "1";
                blue.style.opacity = "1";
            }, 1000);

            console.log("ordem: " + ordem);
        }else{
            menssagem.innerHTML="Sua vez";
            menssagem.style.color = 'yellow';
            
            clearInterval(jogando);
        }
    }, 2000);
}

let contadorUsuario = 1;
function jogarUsuario(n){
    
    if( n == 0){
        let green = document.getElementById("green");
        green.style.opacity = "0.3";
    }else if(n == 1){
        let red = document.getElementById("red");
        red.style.opacity = "0.3";
    }else if(n == 2){
        let yellow = document.getElementById("yellow");
        yellow.style.opacity = "0.3";
    }else if(n == 3){
        let blue = document.getElementById("blue");
        blue.style.opacity = "0.3";
    }

    setTimeout(()=>{
        green.style.opacity = "1";
        red.style.opacity = "1";
        yellow.style.opacity = "1";
        blue.style.opacity = "1";
    }, 500);

    let menssagem = document.getElementById("menssagem");
    if(contadorUsuario <= level){
        menssagem.innerHTML = contadorUsuario;
        menssagem.style.color = 'white';
        ordemUsuario.push(n);
        //console.log("ordemUsuario: " + ordemUsuario);
        if(contadorUsuario == level){
            //console.log("ordem: " + ordem);
            //console.log("ordemUsuario: " + ordemUsuario);
            let proximoNivel = verificarSequencia();
            if(proximoNivel){
                menssagem.innerHTML = "Parabéns você acertou!";
                menssagem.style.color = 'green';
                level++;
                ordem.length = 0;
                ordemUsuario.length = 0;
                contadorUsuario = 0;
                game();

            }
            else{
                menssagem.innerHTML = "Sequência inválida!"
                menssagem.style.color = 'red';
            }
        }
        contadorUsuario++;
    }
      
}

function verificarSequencia(){
    let igual = JSON.stringify(ordem) === JSON.stringify(ordemUsuario);
    console.log("igual: " + igual);
    return igual;
}

game();



