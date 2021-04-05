import React from 'react'

import { Platform, TouchableWithoutFeedback, TouchableNativeFeedback, View } from 'react-native'

const Touchable = ({ children, style, onPress, disabled }) => {
  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback onPress={onPress} disabled={disabled}>{children}</TouchableNativeFeedback>
  } else {
    return <TouchableWithoutFeedback style={style} onPress={onPress} disabled={disabled}>{children}</TouchableWithoutFeedback>
  }
}

export default Touchable
