import fetchWeather from "./FetchWeather";
import ParsingWeather from "./ParseWeather";
import {loadScreen, hideLoadScreen} from "./Loading";

export default function addSearchEventListener(){
    const form = document.querySelector(".form");
    form.addEventListener("submit", async function(event){
        loadScreen();
        event.preventDefault();
        const name = document.querySelector(".search-container").value;
        const dataJSONObject = await fetchWeather(name);
        console.log(dataJSONObject);
        ParsingWeather(dataJSONObject);
        setTimeout(() =>{
            hideLoadScreen();
        }, 200);
    })
}
