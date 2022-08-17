//https://www.youtube.com/watch?v=r9buAwVBDhA&t=3s&ab_channel=ManualdoDev    tempo do video 11:40
const mario = document.querySelector('.mario');

const jumpMario = ()=> {
    mario.classList.add('jumpMario');
    setTimeout(()=>{
        mario.classList.remove('jumpMario');
    },500)
}

document.addEventListener('keydown',jumpMario);


