const yourShip = document.querySelector('.player-shooter');

const playArea = document.querySelector('#main-play-area');

const aliensImg = ['https://cdn.pixabay.com/photo/2020/05/17/11/54/cartoon-5181269_960_720.png', 'https://cdn.pixabay.com/photo/2020/03/01/11/21/rocket-4892414_960_720.png'];

//Movimento e tiro da nave
function flyAhip(event){
    if(event.key === 'ArrowUp'){
        event.preventDefault();
        moveUp();
    }else if(event.key === 'ArrowDown'){
        event.preventDefault();
        moveDown();
    }else if(event.key === " "){
        event.preventDefault();
        fireLaser();
    }
}


// Função de subir
function moveUp(){
    //o getComputedStyle retorna as propriedades css 
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if(topPosition === "0px"){
        return
    }else{
        //para subir tem que diminuir o valor do top
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = `${position}px`;

    }
}

//função de descer

function moveDown(){
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    
    if(topPosition === "550px"){
        return
    }else{
        let position = parseInt(topPosition);
        position += 50;
        yourShip.style.top = `${position}px`;
    }
}

//funcionalidade de tiro
function fireLaser(){
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser(laser);
}

function createLaserElement(){
    let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));

    let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));

    let newLaser = document.createElement('img');
    newLaser.src = 'img/shoot.png';
    newLaser.classList.add('laser');
    newLaser.style.left = `${xPosition}px`;
    newLaser.style.top = `${yPosition-10}px`;
    return newLaser;
}

function moveLaser(laser){
    let laserInterval = setInterval(()=>{
        let xPosition  = parseInt(laser.style.left);
        
        if(xPosition === 340){
            laser.remove();
        }else{
            laser.style.left = `${xPosition + 8}px`;
        }
    }, 10);
}

//função para criar aliens aleatorios
function createAliens(){
    let newAlien = document.createElement('img');
    let alienSprite = aliensImg[Math.floor(Math.random()*aliensImg.length)];
    newAlien.src = alienSprite;
    newAlien.classList.add('alien');
    newAlien.classList.add('alien-transition');
    newAlien.style.left = '370px';
    newAlien.style.top = `${Math.floor(Math.random()*330) + 30}`;
    playArea.appendChild(newAlien);
    moveAlien(newAlien);
}
window.addEventListener('keydown', flyAhip);

