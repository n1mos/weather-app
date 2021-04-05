import { StyleSheet, StatusBar } from 'react-native'

import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 50
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    ...Fonts.QuicksandMedium,
    color: Colors.white,
    textTransform: 'uppercase',
    fontSize: 16,
    lineHeight: 18,
    paddingRight: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.white,
    opacity: 0.2
  },
  daysWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  dayText: {
    ...Fonts.QuicksandRegular,
    color: Colors.white,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageWrapper: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15
  },
  dayIcon: {
    width: 28,
    height: 28,
  },
  minMaxWrapper: {
    alignItems: 'center'
  },
  tempEdgeText: {
    ...Fonts.QuicksandRegular,
    color: Colors.white,
    fontSize: 16,
    lineHeight: 16
  },
  divider: {
    width: '60%',
    height: 1,
    backgroundColor: Colors.white,
    opacity: 0.3,
    marginTop: 2,
    marginBottom: 5
  },
})