import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Text as TextSVG } from 'react-native-svg';
import { LineChart } from "react-native-chart-kit";
import moment from 'moment';

import Styles from './HourlyWeather.style';

const HourlyWeather = ({ weather }) => {
  const labels = weather.hourly.map((condition, index) => {
    return index == 0 ? 'AGORA' : moment.unix(condition.dt).format('ha')
  })

  const data = weather.hourly.map((condition) => {
    return parseInt(condition.temp)
  })

  return (
    <View style={Styles.wrapper}>
      <LineChart
        data={{
          labels,
          datasets: [
            {
              data
            }
          ]
        }}
        width={Dimensions.get("window").width + 40} // from react-native
        height={100}
        renderDotContent={({ x, y, index, indexData }) =>
          <TextSVG
            key={index}
            x={x}
            y={y - 8}
            fill="white"
            fontSize="16"
            fontWeight="normal"
            fontFamily="Quicksand-Medium"
            textAnchor="middle">
            {indexData}º
          </TextSVG>
        }
        withHorizontalLabels={false}
        withInnerLines={false}
        withOuterLines={false}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          strokeWidth: 1.5,
          propsForDots: {
            r: "1",
            strokeWidth: "2",
            stroke: "#fff"
          },
          propsForLabels: {
            fontFamily: 'Quicksand-Medium'
          }
        }}
        bezier
        style={Styles.chart}
      />
    </View>
  )
}

export default HourlyWeather