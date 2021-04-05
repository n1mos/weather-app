import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment';

import { Images } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import Touchable from 'App/Components/Touchable/Touchable'
import WeatherActions from 'App/Stores/Weather/Actions'
import Styles from './Header.style'

class Header extends Component {
  renderButton() {
    const { showBackButton } = this.props

    if (!showBackButton) {
      return (
        <Touchable onPress={() => NavigationService.navigate('DetailsScreen')}>
          <View style={Styles.buttonContainer}>
            <Image source={Images.burger} resizeMode={'contain'} />
          </View>
        </Touchable>
      )
    }

    return (
      <Touchable onPress={() => NavigationService.navigateBack()}>
        <View style={Styles.buttonContainer}>
          <Image source={Images.back} resizeMode={'contain'} />
        </View>
      </Touchable>
    )
  }

  handleOnRefresh = () => {
    this.props.fetchWeather()
  }

  renderRefreshButton() {
    const { weatherIsLoading } = this.props

    return (
      <Touchable onPress={this.handleOnRefresh} disabled={weatherIsLoading}>
        <View style={[Styles.buttonContainer, { right: 0, opacity: weatherIsLoading ? 0.3 : 1 }]}>
          <Image source={Images.refresh} resizeMode={'contain'} />
        </View>
      </Touchable>
    )
  }

  renderTitle() {
    const { weather } = this.props

    if (!weather) return

    const now = moment().format('ddd, h:mma')

    return (
      <View style={Styles.titleContainer}>
        <Text style={Styles.titleText}>{weather.name}</Text>
        <Text style={Styles.subtitleText}>{now}</Text>
      </View>
    )
  }

  render() {
    const { weather } = this.props

    moment.updateLocale('en', {
      weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
    });

    return (
      <View style={Styles.headerContainer}>
        <View style={Styles.subHeaderContainer}>
          {this.renderButton()}

          {this.renderTitle()}

          {this.renderRefreshButton()}
        </View>
      </View>
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
)(Header)
