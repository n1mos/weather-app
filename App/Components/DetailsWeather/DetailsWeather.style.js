import { StyleSheet, StatusBar } from 'react-native'

import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  wrapper: {
    paddingTop: StatusBar.currentHeight + 15,
    flex: 1,
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
  detailsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10
  },
  detailWrapper: {
    flexBasis: '30.64%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 5
  },
  imageWrapper: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  detailTitleText: {
    ...Fonts.QuicksandMedium,
    color: Colors.white,
    fontSize: 14,
    opacity: 0.8
  },
  detailValueText: {
    ...Fonts.QuicksandMedium,
    color: Colors.white,
    fontSize: 16
  },
})