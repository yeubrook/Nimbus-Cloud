import "./styles.css";


export default async function fetchWeather(location){
    let apiKey = "DN7Z9PGGVFK3NG8G2ATAW4EHT";
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

    try{
        let promiseObject = await fetch(url);
        if (!promiseObject.ok){
            throw new Error("Could not fetch weather data.");
        }
        let data = await promiseObject.json();
        return data;
    }
    catch(error){
        console.error('An error occurred:', error);
    }
}