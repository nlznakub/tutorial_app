import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { observer } from 'mobx-react'
@observer
class FirstScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
})
export default FirstScene