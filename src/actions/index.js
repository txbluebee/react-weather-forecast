import axios from 'axios';

const FETCH_WEATHER = 'FETCH_WEATHER';
const API_KEY = 'c7b42cc50b36cb7d75ee54c3e486ac71';
const REQUEST_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(city){
    const url = `${REQUEST_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log(request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}