import { StyleSheet, StatusBar } from 'react-native'

import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  detailTitleText: {
    ...Fonts.QuicksandMedium,
    color: Colors.white,
    fontSize: 14,
    opacity: 0.8,
  },
  detailValueText: {
    ...Fonts.QuicksandMedium,
    color: Colors.white,
    fontSize: 16,
  },
  detailWrapper: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 5,
    flexBasis: '30%',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    paddingVertical: 15,
  },
  detailsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  imageWrapper: {
    alignItems: 'center',
    height: 32,
    justifyContent: 'center',
    marginBottom: 5,
    width: 32,
  },
  line: {
    backgroundColor: Colors.white,
    flex: 1,
    height: 1,
    opacity: 0.2,
  },
  titleText: {
    ...Fonts.QuicksandMedium,
    color: Colors.white,
    fontSize: 16,
    lineHeight: 18,
    paddingRight: 15,
    textTransform: 'uppercase',
  },
  titleWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 15,
  },
})
