import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import WeatherActions from 'App/Stores/Weather/Actions'
import GradientBg from 'App/Components/GradientBg/GradientBg'
import DetailsWeather from 'App/Components/DetailsWeather/DetailsWeather'
import NextDaysWeather from 'App/Components/NextDaysWeather/NextDaysWeather'
import Header from 'App/Containers/Header/Header'
import Styles from './DetailsScreen.style'

class DetailsScreen extends React.Component {
  render() {
    const { weather } = this.props

    return (
      <GradientBg weather={weather} style={Styles.container}>
        <Header showBackButton />

        {!weather ? (
          <View style={Styles.loadingWrapper}>
            <ActivityIndicator size={100} color="#FFF" />
          </View>
        ) : (
          <>
            <DetailsWeather weather={weather} />
            <NextDaysWeather weather={weather} />
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
)(DetailsScreen)
