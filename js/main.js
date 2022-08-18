//https://www.youtube.com/watch?v=r9buAwVBDhA&t=3s&ab_channel=ManualdoDev    tempo do video 17:25 nao reconhece offsetleft
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
    
    if(pipePosition <= 65){
        pipe.style.animation ='nome';
        pipe.style.left = `${pipePosition}px`
    }
    
   
},10);

document.addEventListener('keydown',jumpMario);


