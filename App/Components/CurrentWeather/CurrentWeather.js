import React from 'react';
import { View, Image, Text } from 'react-native';

import { Images } from 'App/Theme'
import Styles from './CurrentWeather.style';

const CurrentWeather = ({ weather }) => {
  const renderConditions = () => {
    return weather.current.weather.map((condition) => {
      const description = condition.description.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

      return (
        <View key={condition.id} style={Styles.titleWrapper}>
          <View style={Styles.imageWrapper}>
            <Image source={Images[condition.icon]} style={Styles.icon} />
          </View>
          <Text style={Styles.titleText}>{description}</Text>
        </View>
      )
    })
  }

  return (
    <View style={Styles.wrapper}>
      {renderConditions()}

      <View style={Styles.tempWrapper}>
        <Text style={Styles.tempText}>
          {weather.main.temp}º
        </Text>

        <View style={Styles.minMaxWrapper}>
          <Text style={Styles.tempEdgeText}>{weather.main.temp_max}º C</Text>
          <View style={Styles.divider} />
          <Text style={Styles.tempEdgeText}>{weather.main.temp_min}º C</Text>
        </View>
      </View>
    </View>
  )
}

export default CurrentWeather