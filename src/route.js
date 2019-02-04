// ผ่าน Login
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import MainScene from './scene/MainScene';
import FirstScene from './scene/FirstScene';
import { normalize } from './functions';
import { HeaderTitle, HeaderBack, HeaderRight } from './components/Header';

export const navigationOptions = {
    headerStyle: {
        backgroundColor: 'pink',
    }
}

// const FirstStack = createStackNavigator({

// })

// const SecondStack = createStackNavigator({

// })

export const MainStack = createStackNavigator({
    Main: {
        screen: MainScene,
        navigationOptions: {
            ...navigationOptions,
            headerTitle: <HeaderTitle title={'หน้าหลัก'} />,
            // headerTitle: '',
            headerLeft: <HeaderBack />,
            headerRight: <View />
        }
    },
    First: {
        screen: FirstScene,
        navigationOptions: {
            ...navigationOptions,
            headerTitle: <HeaderTitle title={'หน้าแรก'} />,
            // headerLeft: <HeaderBack />,
            headerLeft: <HeaderRight disabled={false} />,
            headerRight: <HeaderRight disabled={true} />
        }
    },
    // Second: {

    // },
    // Third: {

    // },
    // Four: {

    // }
})

export const MainDrawer = createDrawerNavigator({
    Main: {
        screen: MainStack
    },
    // First: {
    //     screen: FirstStack
    // },
    // Second: {
    //     screen: SecondStack
    // }
    // Call: {
    //     screen: CallStack
    // }
})