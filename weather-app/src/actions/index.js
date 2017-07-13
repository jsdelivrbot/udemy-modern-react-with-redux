import axios from 'axios';

const OPEN_WEATHER_MAP_KEY = process.env.OPEN_WEATHER_MAP_KEY;
const OPEN_WEATHER_MAP_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_MAP_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${OPEN_WEATHER_MAP_ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log('Request: ' + request);
    // const request = axios.get(url, {
    //     params: {
    //         appid: OPEN_WEATHER_MAP_KEY,
    //         q: `${city},us`
    //     }
    // });

    return {
        type: FETCH_WEATHER,
        payload: request
    }

}