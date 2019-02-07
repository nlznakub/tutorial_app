import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native'
import { observer } from 'mobx-react'
import { ButtonMain, Button } from '../components/Button';
import { color, image } from '../resource';
import { normalize } from '../functions';
import { width } from '../functions/normalize';

@observer
class LoginScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color.bg }}>
                <Image source={image.logo} style={{ width: normalize(200), height: normalize(200) }} resizeMode={'contain'} />
                <View style={{ width: width * 0.7 }}>
                    <TextInput
                        placeholder={'ชื่อผู้ใช้งาน'}
                        style={[styles.input]}
                        placeholderTextColor={color.mango}
                    />

                    <TextInput
                        placeholder={'รหัสผ่าน'}
                        style={[styles.input]}
                        placeholderTextColor={color.mango}
                    />

                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[color.mango, color.pink]} style={{ marginTop: normalize(10), borderRadius: Math.ceil(normalize(6)), }}>
                        <TouchableOpacity style={{ paddingVertical: normalize(10), alignItems: 'center', justifyContent: 'center', }} onPress={() => this.props.navigation.navigate('Main')}>
                            <Text style={{ color: 'white', fontSize: normalize(18) }}>เข้าสู่ระบบ</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: normalize(20), // marginTop + marginBottom
        paddingVertical: normalize(10), // paddingTop + paddingBottom
        paddingHorizontal: normalize(20),
        borderRadius: Math.ceil(normalize(6)),
        borderColor: color.mango,
        color: 'green'
    }
})

const Input = styled.TextInput.attrs({
    placeholderTextColor: color.mango
})`

`
export default LoginScene