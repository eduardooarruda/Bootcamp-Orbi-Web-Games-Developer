const caracol = document.querySelector('.caracol');
const background = document.querySelector('.background');

let position = 0;
let isJumping = false;

function handleKeyup(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval(()=>{
        if(position >= 150){
            clearInterval(upInterval);
            //decendo
            let downInterval = setInterval(()=>{
                if(position <=0 ){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    caracol.style.bottom = position + 'px';
                }
            }, 20);
        }else{
            //subindo
            position += 20;
            caracol.style.bottom = position + 'px';
        }
    }, 20)
}

function createPedra(){
    const pedra = document.createElement('div');
    let pedraPosition = 1000;
    let randTime = Math.random() * 6000;
    console.log(randTime);
    pedra.classList.add('pedra');
    pedra.style.left = 1000 + 'px'
    background.appendChild(pedra);
    let leftInterval = setInterval(()=>{
        if(pedraPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(pedra);
        }else if(pedraPosition > 0 && pedraPosition < 60 && position < 60){
            // Game over 

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        }
        else{
            pedraPosition -= 10;
            pedra.style.left = pedraPosition + 'px';
        }
    }, 40);

    setTimeout(createPedra, randTime);

}

createPedra();
document.addEventListener('keyup', handleKeyup);