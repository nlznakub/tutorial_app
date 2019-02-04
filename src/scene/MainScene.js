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
class MainScene extends Component {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false
        };
    }

    componentDidMount = () => {
        this.onRefresh()
    }


    onFetchApi() {
        this.setState({ refreshing: false })
    }

    onRefresh() {
        this.setState({ refreshing: true })
        setTimeout(() => {
            this.onFetchApi()
        }, 1000)
    }

    render() {
        let { user } = this.props.store;
        let { refreshing } = this.state
        console.count()
        return (
            <View style={[styles.container, styled.container]}>
                <StatusBar hidden={true} />
                <HeaderBack />
                <Text>{user.name}</Text>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text>{Mobx.getCount}</Text>

                {<ButtonMain title={'เพิ่มต่า'} onPress={(title) => this.props.navigation.navigate('First')} containerStyle={{ backgroundColor: 'red' }} />}
                <ButtonMain title={'เพิ่มต่า'} onPress={(title) => this.props.navigation.navigate('First')} containerStyle={{ backgroundColor: 'red' }} />
                <ButtonMain title={'เพิ่มต่า'} onPress={(title) => this.props.navigation.navigate('First')} containerStyle={{ backgroundColor: 'red' }} />
                <ButtonMain title={'เพิ่มต่า'} onPress={(title) => this.props.navigation.navigate('First')} containerStyle={{ backgroundColor: 'red' }} />

                {/*####################### LISTVIEW #######################*/}
                {/* 
                    map
                    listview
                    flatlist
                */}
                {/* {this.renderPerson()} */}
                <Text>FLATLIST</Text>
                <FlatList
                    data={person}
                    // bounces={false}
                    style={{ width: '100%' }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <RenderPerson item={item} />}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => this.onRefresh()} />}
                />
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

export default MainScene