//https://www.youtube.com/watch?v=r9buAwVBDhA&t=3s&ab_channel=ManualdoDev    tempo do video 25:04 nao reconhece offsetleft
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jumpMario = ()=> {
    mario.classList.add('jumpMario');
    setTimeout(()=>{
        mario.classList.remove('jumpMario');
    },500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    console.log(marioPosition);
    
    if(pipePosition <= 65 && pipePosition >0 && marioPosition < 68){    
        pipe.style.animation ='nome';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation ='nome';
        mario.style.bottom = `${marioPosition}px`
        
        mario.src = '../assets/game-over.png'
        mario.style.width ='45px';
        mario.style.marginLeft = '20px'
    
        clearInterval(loop);

    }
    
   
},10);

document.addEventListener('keydown',jumpMario);


