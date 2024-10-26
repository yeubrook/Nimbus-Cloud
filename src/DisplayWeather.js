import updateTime from "./UpdateTime";

let intervalId;

export const stopClock = () => {
    clearInterval(intervalId);
};

export const startClock = (clockDate) => {
    updateTime(clockDate); 
    intervalId = setInterval(() => {
        updateTime(clockDate); // Call updateTime each second
    }, 1000);
};

export default function displayingWeather(dataArr, clockDate){

    stopClock();
    startClock(clockDate);

    const daysOfWeek = document.querySelectorAll(".day-week");
    for (let i = 0; i < daysOfWeek.length; i++) {
        if (dataArr[i]) {
            daysOfWeek[i].querySelector('.day-name').textContent = dataArr[i].date;
            daysOfWeek[i].querySelector('.temperature').textContent = `${dataArr[i].temp}°F`;
        }
    }
    const showContainer = document.querySelector(".content");
    const dayContainer = document.querySelector(".day-container")
    setTimeout(() => {
        showContainer.classList.add("visible");
        console.log("Waited 1 second");
    }, 150); 
    
}