const playButton = document.querySelector('.play');
const audio = document.querySelector('audio');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
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
}
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
