import { StyleSheet, StatusBar } from 'react-native'
import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  headerContainer: {
    paddingTop: StatusBar.currentHeight,
    width: '100%'
  },
  subHeaderContainer: {
    flexDirection: 'row',
    height: 90,
  },
  buttonContainer: {
    position: 'absolute',
    zIndex: 1,
    paddingTop: 28,
    paddingHorizontal: 20,
    height: '100%',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15
  },
  titleText: {
    color: Colors.white,
    fontSize: 24,
    ...Fonts.QuicksandLight
  },
  subtitleText: {
    color: Colors.white,
    fontSize: 16,
    ...Fonts.QuicksandLight
  }
})
