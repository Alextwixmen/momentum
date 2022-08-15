
const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev');
import getTimeOfDay from "./greeting.js";
let randomNum = getRandomNumber();
export default function setBg() {
    let randomBgNum = randomNum; 
    let bgNum = randomBgNum.toString().padStart(2, "0");
    let timeOfDay = getTimeOfDay();
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/Alextwixmen/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        document.body.style.backgroundImage = `url(${img.src})`
    }
    slideNext.addEventListener('click', getSlideNext);
    slidePrev.addEventListener('click', getSlidePrev); 
}
setBg()

function getSlidePrev () {
    if (randomNum === 1) {
      randomNum = 20
    } else {
      randomNum = randomNum - 1
    }
    setBg()
    }
function getSlideNext () {
      if (randomNum === 20) {
        randomNum = 1
      } else {
        randomNum = randomNum + 1
      }
      setBg()
    }

function getRandomNumber() {
    return Math.ceil(Math.random() * 20);
}







// function getSlideNext () {
//    switch(randomNum){
//     case 20:
//     console.log(randomNum);
//     return 1
//     default:
//         console.log(randomNum);
//     randomNum + 1
//    }
//    setBg()
//   }

//     function getSlidePrev () {
//         switch(randomNum){
//             case 1:
//                 console.log(randomNum);
//             return 20
//             default:
//                 console.log(randomNum);
//             randomNum - 1
//            }
//         setBg()
//         }



