import React from 'react';
import Gradient from 'react-native-linear-gradient';

const GradientBg = ({ weather, style, children }) => {
  const GRADIENTS = {
    clear: ['#51a4db', '#51a4db', '#74bae0'],
    night: ['#13225a', '#13225a', '#9662a2'],
    gray: ['#797d86', '#797d86', '#abb5bb'],
    cloudy: ['#5393b2', '#79a6bd', '#a7bdca'],
  }

  const getGradient = () => {
    const weatherId = weather.current.weather[0].id
    const curHr = new Date().getHours()

    if (curHr >= 18) {
      return GRADIENTS.night
    } else if (weatherId === 800) {
      return GRADIENTS.clear
    } else if (weatherId > 800 && weatherId < 805) {
      return GRADIENTS.cloudy
    } else if (weatherId >= 200 && weatherId < 800) {
      return GRADIENTS.gray
    }

    return GRADIENTS.clear
  }

  return (
    <Gradient colors={getGradient()} style={style}>
      {children}
    </Gradient>
  )
}

export default GradientBg
