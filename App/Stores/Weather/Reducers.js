import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { WeatherTypes } from './Actions'

export const fetchWeatherLoading = (state) => ({
  ...state,
  weatherIsLoading: true,
  weatherErrorMessage: null,
})

export const fetchWeatherSuccess = (state, { weather }) => {
 return {
    ...state,
    weather,
    weatherIsLoading: false,
    weatherErrorMessage: null,
  }
}

export const fetchWeatherFailure = (state, { errorMessage }) => ({
  ...state,
  weather: {},
  weatherIsLoading: false,
  weatherErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [WeatherTypes.FETCH_WEATHER_LOADING]: fetchWeatherLoading,
  [WeatherTypes.FETCH_WEATHER_SUCCESS]: fetchWeatherSuccess,
  [WeatherTypes.FETCH_WEATHER_FAILURE]: fetchWeatherFailure,
})
