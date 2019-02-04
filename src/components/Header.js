import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity, Text } from 'react-native';
import { normalize } from '../functions';

export const HeaderBack = withNavigation(({ navigation }) => {
    // const [back, setBack] = useState(true)
    // useEffect(() => { })
    return <TouchableOpacity onPress={() => navigation.goBack(null)} style={{ paddingLeft: normalize(10), fontSize: normalize(20) }}>
        <Text>{'กลับ'}</Text>
    </TouchableOpacity>
})

export const HeaderTitle = ({ title }) => {
    return <Text style={{ fontSize: normalize(20) }}>{title}</Text>
}

export const HeaderRight = ({ disabled }) => {
    return <TextRight style={{
        paddingRight: normalize(10),
        // color: disabled ? 'gray' : 'white',
        // backgroundColor: disabled ? 'red' : 'yellow',
        // fontSize: disabled ? normalize(20) : normalize(30)
    }} disabled={disabled} >ขวา</TextRight>
}

const TextRight = styled.Text`
    color: black;
    background-color: yellow;
    ${props => props.disabled && `
        color: gray;
        background-color: red;
        font-size: ${normalize(30)}
    `}
`



/**
 *
 */