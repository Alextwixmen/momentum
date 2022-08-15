const grate = document.querySelector('.greeting');
const name = document.querySelector('.name');
const date = new Date();
const hours = date.getHours();

 export default function getTimeOfDate(){
  let a = 'Good';
    if ( hours >= 6  && hours < 12){
        return 'morning'
    } else if(hours >= 12 && hours < 18){
   
        return 'afternoon'
    } else if(hours >= 18 && hours < 24){
 
        return 'evening'
    } else if(hours > 0 && hours < 6){

        return 'night'
    }
}
getTimeOfDate();
grate.textContent = `Good ${getTimeOfDate()}`;

function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)