const playButton = document.querySelector('.play');
const audio = document.querySelector('audio');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
import playList from "./playList.js";
let isPlay = false;
let playNum = 0;

export default function playAudio() {
    audio.src = playList[playNum].src;
    if(isPlay === false){
        playAudio1()
    } else{
        pauseAudio() 
    }
}
function playAudio1() {
    isPlay = true; 
    audio.currentTime = 0;
    audio.play();
}
function pauseAudio() {
    isPlay = false;
    audio.pause();
    
}
function playNext() {
    if(playNum === 3){
        playNum = 0;
    }else{
        playNum++
    }
    playAudio()
}
function playPrev() {
    if(playNum === 0){
        playNum = 3;
    }else{
        playNum--
    }
    playAudio()
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