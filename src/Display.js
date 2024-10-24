import fetchWeather from "./FetchWeather";
import ParsingWeather from "./ParseWeather";

export default function addSearchEventListener(){
    const form = document.querySelector(".form");
    form.addEventListener("submit", async function(event){
        event.preventDefault();
        const name = document.querySelector(".search-container").value;
        const dataJSONObject = await fetchWeather(name);
        form.style.top = '20vh';
        console.log(dataJSONObject);
        ParsingWeather(dataJSONObject);
    })
}
