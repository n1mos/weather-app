import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchWeather: [],
  fetchWeatherLoading: null,
  fetchWeatherSuccess: ['weather'],
  fetchWeatherFailure: ['errorMessage'],
  watchWeatherStart: null,
  watchWeatherCancel: null,
})

export const WeatherTypes = Types
export default Creators
