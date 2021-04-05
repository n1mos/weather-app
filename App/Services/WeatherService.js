import GetLocation from 'react-native-get-location'
import axios from 'axios'

import { Config } from 'App/Config'
import WeatherFormatter from 'App/Utils/Formatters/WeatherFormatter'

const weatherApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

async function fetchWeather() {
  const location = await GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })

  const lat = location.latitude;
  const lng = location.longitude;

  const oneCallUrl = `onecall?lat=${lat}&lon=${lng}&exclude=minutely&lang=pt_br&units=metric&appid=${Config.API_KEY}`
  const weatherUrl = `weather?lat=${lat}&lon=${lng}&lang=pt_br&units=metric&appid=${Config.API_KEY}`

  const oneCall = await weatherApiClient.get(oneCallUrl);
  const weather = await weatherApiClient.get(weatherUrl);

  return WeatherFormatter({
    ...oneCall.data,
    main: weather.data.main,
    name: weather.data.name
  })

}

export const weatherService = {
  fetchWeather,
}
