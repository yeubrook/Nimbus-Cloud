import displayingWeather from "./DisplayWeather";

export default async function ParsingWeather(dataJSONObject){
    let dataArr = [];
    let timezone;

    for (let i = 0; i < 7; i++){
        dataArr[i] = {
            temp: dataJSONObject.days[i].temp,
            date: getDayOfWeek(dataJSONObject.days[i].datetime)
        };
        console.log(dataArr[i]);
        if (i == 0){
            dataArr[i].date = "Today";
            const location = document.querySelector(".location");
            location.textContent = dataJSONObject.resolvedAddress;
            const date = document.querySelector(".date");
            date.textContent = dataJSONObject.days[i].datetime;
            timezone = dataJSONObject.timezone;
            console.log(timezone);
        }
    }

    displayingWeather(dataArr, timezone);
}

function getDayOfWeek(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const options = { weekday: 'long', timeZone: 'America/New_York' }; // 'long' for full name (e.g., "Monday")
    return date.toLocaleDateString('en-US', options);
}
