// ผ่าน Login
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import MainScene from './scene/MainScene';
import FirstScene from './scene/FirstScene';
import { normalize } from './functions';
import { HeaderTitle, HeaderBack, HeaderRight } from './components/Header';
import SecondScene from './scene/SecondScene';

export const navigationOptions = {
    headerStyle: {
        backgroundColor: 'pink',
    }
}


export const MainStack = createStackNavigator({
    Main: {
        screen: MainScene,
        navigationOptions: {
            ...navigationOptions,
            headerTitle: <HeaderTitle title={'หน้าหลัก'} />,
            headerLeft: <HeaderBack />,
            headerRight: <View />
        }
    },
    First: {
        screen: FirstScene,
        navigationOptions: {
            ...navigationOptions,
            headerTitle: <HeaderTitle title={'หน้า1'} />,
            headerLeft: <HeaderRight disabled={false} />,
            headerRight: <HeaderRight disabled={true} />
        }
    },
    Second: {
        screen: SecondScene,
        navigationOptions: {
            ...navigationOptions,
            headerTitle: <HeaderTitle title={'หน้า2'} />,
            headerLeft: <HeaderRight disabled={false} />,
            headerRight: <HeaderRight disabled={true} />
        }
    }
})

export const MainDrawer = createDrawerNavigator({
    Main: {
        screen: MainStack
    },
})

