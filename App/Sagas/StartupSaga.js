import { put } from 'redux-saga/effects'

import WeatherActions from 'App/Stores/Weather/Actions'
import NavigationService from 'App/Services/NavigationService'

export function* startup(action) {
  yield put(WeatherActions.fetchWeather(action.location))

  NavigationService.navigateAndReset('MainScreen')
}
