const playButton = document.querySelector('.play');
const audio = document.querySelector('audio');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const list_item = document.querySelector('.list_item');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');
import playList from "./playList.js";
let isPlay = false;
let playNum = 0;

export default function playAudio() {
    audio.src = playList[playNum].src;
    if(!isPlay){
        playAudio1()
    } else{
        pauseAudio() 
    }
    // star();

    if(playNum === 0){
        item4.classList.remove('item-active');
        item1.classList.add('item-active');
    } else if( playNum === 1){
        item1.classList.remove('item-active');
        item2.classList.add('item-active');
    } else if(playNum === 2){
        item2.classList.remove('item-active');
        item3.classList.add('item-active');
    } else if(playNum === 3){
        item3.classList.remove('item-active');
        item4.classList.add('item-active');
    }
}

// function star() {
//     if(playNum === 0){
//         list_item.classList.remove('item-active')
//         item1.classList.add('item-active');
//         console.log(playNum);
//     } else if(playNum === 1){
//         item2.classList.add('item-active');
//         list_item.classList.remove('item-active')
//         console.log(playNum);

//     } else if(playNum === 2){
//         item3.classList.ad
//         list_item.classList.remove('item-active')
//         console.log(playNum);

//     } else if(playNum === 3){
//         list_item.classList.remove('item-active')
//         item4.classList.add('item-active');
//         console.log(playNum);

//     }
// }

function playAudio1() {
    audio.currentTime = 0;
    audio.play();
    isPlay = true; 

}
function pauseAudio() {
    audio.pause();
    isPlay = false;
    
}
function playNext() {
    if(playNum === 3){
        playNum = 0;
    }else{
        playNum++
    }
    playButton.classList.add('pause');
    isPlay = false;
    playAudio()
    console.log(isPlay);
}
function playPrev() {
    if(playNum === 0){
        playNum = 3;
    }else{
        playNum--
    }
    playButton.classList.add('pause');
    isPlay = false;
    playAudio()
    console.log(isPlay);
}
function toggleBtn() {
    if(isPlay === false){
    playButton.classList.add('pause');
    }else{
    playButton.classList.remove('pause');
    }
  }

playButton.addEventListener('click', () => {
    toggleBtn();
    playAudio();
});
playNextBtn.addEventListener('click', () => {
    playNext()
});
playPrevBtn.addEventListener('click', () =>{
    playPrev()
})
