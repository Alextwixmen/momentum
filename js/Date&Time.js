const time = document.querySelector('.time');
const TrueDate = document.querySelector('.date')
export default function showTime(){
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    function showDate(){
        const date = new Date ();
        const options = { weekday: "long", month: 'long', day: 'numeric'};
        const currentDate = date.toLocaleDateString('en-US', options);
        TrueDate.textContent = currentDate;
    }
    showDate();
}
showTime();
