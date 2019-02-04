import React from 'react';
import { Text, View, Image } from 'react-native'
import { fullname } from "../functions";
import { normalize } from '../functions/normalize';
import { color, icon } from '../resource';

export const RenderPerson = ({ item }) => {
    let { firstname, lastname } = item
    return <View style={{ backgroundColor: color.main, flex: 1, width: '100%', padding: normalize(10), marginVertical: normalize(10), flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: normalize(20) }}>{fullname(firstname, lastname)}</Text>
        <Image source={icon.back} />
    </View>
}