import displayingWeather from "./DisplayWeather";


export default async function ParsingWeather(dataJSONObject){
    let dataArr = [];
    for (let i = 0; i < 7; i++){
        dataArr[i] = {
            temp: dataJSONObject.days[i].temp,
            date: getDayOfWeek(dataJSONObject.days[i].datetime)
        };
        console.log(dataArr[i]);
    }
    displayingWeather(dataArr);
}

function getDayOfWeek(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const options = { weekday: 'long', timeZone: 'America/New_York' }; // 'long' for full name (e.g., "Monday")
    return date.toLocaleDateString('en-US', options);
}
