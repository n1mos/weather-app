import { takeLatest, all, fork } from 'redux-saga/effects'
import { WeatherTypes } from 'App/Stores/Weather/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchWeather, watchWeather } from './WeatherSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(WeatherTypes.FETCH_WEATHER, fetchWeather),
    fork(watchWeather)
  ])
}
