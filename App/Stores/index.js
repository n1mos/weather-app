import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as WeatherReducer } from './Weather/Reducers'

export default () => {
  const rootReducer = combineReducers({
    weather: WeatherReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
