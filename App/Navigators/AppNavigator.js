import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import HomeScreen from 'App/Containers/HomeScreen/HomeScreen'
import DetailsScreen from 'App/Containers/DetailsScreen/DetailsScreen'

const StackNavigator = createStackNavigator(
  {
    MainScreen: HomeScreen,
    DetailsScreen: DetailsScreen,
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
    defaultNavigationOptions: {
      headerStyle: {
        height: 0,
      }
    },
  }
)

export default createAppContainer(StackNavigator)
