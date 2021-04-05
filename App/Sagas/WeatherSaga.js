import { put, race, take, call, delay, select } from "redux-saga/effects";

import WeatherActions, { WeatherTypes } from 'App/Stores/Weather/Actions'
import { weatherService } from 'App/Services/WeatherService'

const TIMER_INTERVAL = 60000;

export function* fetchWeather(action) {
  yield put(WeatherActions.fetchWeatherLoading())

  const weather = yield call(weatherService.fetchWeather, action)

  if (weather) {
    yield put(WeatherActions.fetchWeatherSuccess(weather))
    yield put(WeatherActions.watchWeatherStart())
  } else {
    yield put(WeatherActions.fetchWeatherFailure('There was an error. Please try again later.'))
  }
}

function* fetchWeatherPeriodically() {
  while (true) {
    yield call(fetchWeather);
    yield delay(TIMER_INTERVAL);
  }
}

export function* watchWeather() {
  while (true) {
    yield take(WeatherTypes.WATCH_WEATHER_START);
    yield race({
      task: call(fetchWeatherPeriodically),
      cancel: take(WeatherTypes.WATCH_WEATHER_CANCEL)
    });
  }
}
