import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { observer } from 'mobx-react'
import { Button, ButtonCount } from '../components/Button';
@observer
class MainScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>HOOK</Text>

                <ButtonCount />
                {/* <Button title={'ไปหน้า 2'} onPress={() => this.props.navigation.navigate('Second')} /> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
})
export default MainScene