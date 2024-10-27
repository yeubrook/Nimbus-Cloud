import displayingWeather from "./DisplayWeather";

export default async function ParsingWeather(dataJSONObject){
    let dataArr = [];
    let timezone;

    const main = document.querySelector("main");
    main.style.justifyContent = "flex-start";
    main.style.minHeight = "151vh";

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
            const humidity = document.querySelector(".humidity-text");
            humidity.textContent = dataJSONObject.days[i].humidity + "%";
            const wind_speed = document.querySelector(".windspeed-text");
            wind_speed.textContent = dataJSONObject.days[i].windspeed + " mph";
            const highest_temperature = document.querySelector(".highest-temperature-text");
            highest_temperature.textContent = dataJSONObject.days[i].tempmax + "°F";
            const sunrise = document.querySelector(".sunrise-text");
            sunrise.textContent = dataJSONObject.days[i].sunrise;
            const sunset = document.querySelector(".sunset-text");
            sunset.textContent = dataJSONObject.days[i].sunset;
            const temperature = document.querySelector(".temperature");
            temperature.textContent = dataJSONObject.currentConditions.temp + "°F";
            const weather_condition = document.querySelector(".weather-condition");
            weather_condition.textContent = dataJSONObject.currentConditions.conditions;
        }
    }

    displayingWeather(dataArr, timezone);
}

function getDayOfWeek(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const options = { weekday: 'long', timeZone: 'America/New_York' }; // 'long' for full name (e.g., "Monday")
    return date.toLocaleDateString('en-US', options);
}
