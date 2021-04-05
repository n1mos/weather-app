import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import WeatherActions from 'App/Stores/Weather/Actions'
import GradientBg from 'App/Components/GradientBg/GradientBg'
import CurrentWeather from 'App/Components/CurrentWeather/CurrentWeather'
import HourlyWeather from 'App/Components/HourlyWeather/HourlyWeather'
import Header from 'App/Containers/Header/Header'
import Styles from './HomeScreen.style'

class HomeScreen extends React.Component {
  render() {
    const { weather } = this.props

    return (
      <GradientBg weather={weather} style={Styles.container}>
        <Header />

        {!weather ? (
          <View style={Styles.loadingWrapper}>
            <ActivityIndicator size={100} color="#FFF" />
          </View>
        ) : (
          <>
            <CurrentWeather weather={weather} />
            <HourlyWeather weather={weather} />
          </>
        )}
      </GradientBg>
    )
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather.weather,
  weatherIsLoading: state.weather.weatherIsLoading,
  weatherErrorMessage: state.weather.weatherErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: () => dispatch(WeatherActions.fetchWeather()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
