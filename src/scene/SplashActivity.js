import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { observer, inject } from 'mobx-react';
import Mobx from '../mobx/Mobx';
import { HeaderBack } from '../components/Header';
import { ButtonMain } from '../components/Button';
import { normalize, fullname } from '../functions';
import { person } from '../resource/constant';
import { RenderPerson } from '../components/FlatList';
import styled from '../styles/styled';

let data = [{ firstname: 'Anis', lastname: 'Chentanomwong' }, { firstname: 'John', lastname: 'Wich' }]
@inject('store')
@observer
class SplashActivity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false
        };
    }

    componentDidMount = () => {
        // setTimeout(() => {
        //     this.props.navigation.navigate('Login')
        // }, 1000)
    }

    render() {
        let { user } = this.props.store;
        let { refreshing } = this.state
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: normalize(30) }}>SplashActivity</Text>
            </View>
        );
    }

    // renderPerson() {
    //     return person.map((el, i) => {
    //         let { firstname, lastname } = el
    //         return <Text key={i}>{fullname(firstname, lastname)}</Text>
    //     })
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: normalize(20),
        textAlign: 'center',
        margin: normalize(10),
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: normalize(5),
        borderRadius: Math.floor(normalize(10))
    },
})

export default SplashActivity