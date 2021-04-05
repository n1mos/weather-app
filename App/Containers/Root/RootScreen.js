import React, { Component } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { connect } from 'react-redux'

import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import StartupActions from 'App/Stores/Startup/Actions'

import Style from './RootScreen.style'

class RootScreen extends Component {
  componentDidMount() {
    this.props.startup()
  }

  render() {
    return (
      <SafeAreaView style={Style.fill}>
        <StatusBar translucent backgroundColor="transparent" />

        <AppNavigator
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
