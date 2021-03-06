/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Mobx from './src/mobx/Mobx';
import { observer, Provider } from 'mobx-react';
import store from './src/mobx/store';
import SplashActivity from './src/scene/SplashActivity';
import { MainStack, MainDrawer } from './src/route';
import LoginScene from './src/scene/LoginScene';

const Route = createStackNavigator({
  // Splaz: {
  //   screen: SplashActivity,
  //   navigationOptions: { header: null }
  // },
  // Login: {
  //   screen: LoginScene,
  //   navigationOptions: { header: null }
  // },
  // Register: {

  // },
  Main: {
    screen: MainStack,
    navigationOptions: { header: null }
  }
})

@observer
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}