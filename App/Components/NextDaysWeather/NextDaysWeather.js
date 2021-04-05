import React from 'react';
import { View, Image, Text } from 'react-native';
import moment from 'moment';

import { Images } from 'App/Theme'
import Styles from './NextDaysWeather.style';

const NextDaysWeather = ({ weather }) => {
  const renderNextDays = () => {
    return weather.daily.map((condition, index) => {
      return (
        <View key={condition.dt} style={Styles.dayWrapper}>
          <Text style={Styles.dayText}>{moment.unix(condition.dt).format('ddd')}</Text>
          <View style={Styles.imageWrapper}>
            <Image style={Styles.dayIcon} source={Images[condition.weather[0].icon]} resizeMode='contain' />
          </View>
          <View style={Styles.minMaxWrapper}>
            <Text style={Styles.tempEdgeText}>{parseInt(condition.temp.max)}º</Text>
            <View style={Styles.divider} />
            <Text style={[Styles.tempEdgeText, { opacity: 0.6 }]}>{parseInt(condition.temp.min)}º</Text>
          </View>
        </View>
      )
    })
  }

  return (
    <View style={Styles.wrapper}>
      <View style={Styles.titleWrapper}>
        <Text style={Styles.titleText}>Próximos 7 dias</Text>
        <View style={Styles.line} />
      </View>

      <View style={Styles.daysWrapper}>
        {renderNextDays()}
      </View>
    </View>
  )
}

export default NextDaysWeather