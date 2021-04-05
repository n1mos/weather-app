import React from 'react';
import { View, Image, Text } from 'react-native';

import { Images } from 'App/Theme'
import Styles from './DetailsWeather.style';

const DETAILS_TITLES = {
  feels_like: 'Sensação',
  humidity: 'Humidade',
  pressure: 'Pressão',
  uvi: 'Índice UV',
  visibility: 'Visibilidade',
  wind_speed: 'Vento',
}

const DetailsWeather = ({ weather }) => {
  const renderDetails = () => {
    const details = []

    Object.entries(weather.details).forEach(([key, value]) => {
      details.push(
        <View key={key} style={Styles.detailWrapper}>
          <View style={Styles.imageWrapper}>
            <Image source={Images[key]} style={Styles.icon} />
          </View>
          <Text style={Styles.detailTitleText}>{DETAILS_TITLES[key]}</Text>
          <Text style={Styles.detailValueText}>{value}</Text>
        </View>
      )
    })

    return details
  }

  return (
    <View style={Styles.wrapper}>
      <View style={Styles.titleWrapper}>
        <Text style={Styles.titleText}>Detalhes</Text>
        <View style={Styles.line} />
      </View>

      <View style={Styles.detailsWrapper}>
        {renderDetails()}
      </View>
    </View>
  )
}

export default DetailsWeather