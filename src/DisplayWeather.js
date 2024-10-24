
export default function displayingWeather(dataArr){
    const daysOfWeek = document.querySelectorAll(".day-week");
    for (let i = 0; i < daysOfWeek.length; i++) {
        if (dataArr[i]) {
            daysOfWeek[i].querySelector('.day-name').textContent = dataArr[i].date;
            daysOfWeek[i].querySelector('.temperature').textContent = `${dataArr[i].temp}°F`;
        }
    }
    const showContainer = document.querySelector(".weather-container-container");
    const dayContainer = document.querySelector(".day-container")
    setTimeout(() => {
        showContainer.style.opacity = "1";
        showContainer.style.visibility = "visible";
        console.log("Waited 1 second");
    }, 150); 
    
}