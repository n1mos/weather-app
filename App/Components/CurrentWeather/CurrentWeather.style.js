import { StyleSheet } from 'react-native'

import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  wrapper: {
    flex: 2,
    justifyContent: 'center'
  },
  imageWrapper: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  titleText: {
    ...Fonts.QuicksandRegular,
    color: Colors.white,
    fontSize: 34,
    lineHeight: 42
  },
  tempWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  minMaxWrapper: {
    marginLeft: 30
  },
  tempEdgeText: {
    ...Fonts.QuicksandRegular,
    color: Colors.white,
    fontSize: 24,
    lineHeight: 26
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.white,
    opacity: 0.3,
    marginVertical: 8
  },
  tempText: {
    ...Fonts.QuicksandLight,
    color: Colors.white,
    fontSize: 152,
    lineHeight: 160,
  }
})