import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native'
import { normalize } from '../functions';
import { color } from '../resource';
import { width } from '../functions/normalize';

// function
// (props) => {props.title, props.onPress}
export const ButtonMain = ({ title, onPress = () => alert('default'), containerStyle }) => {
    const [back, setBack] = useState(false)
    const [prev, setPrev] = useState(false)

    useEffect(() => { // componentDid => scu => compo 
        // alert('Hello')
        console.log('render')
        // return () => alert('Good bye')
    }, [back])

    useEffect(() => { // componentDid => scu => compo 
        // alert('Hello')
        console.log('render')
        // return () => alert('Good bye')
    }, [prev])


    /**
     * constructor(props) {
     *      this.state = {
     *          back: false
     *      }
     *  this.setState({back}) => setBack
     * }
     */
    /**
     * let obj = { backgroundColor: 'green' }
     * let obj2 = {...obj, textAlign: 'center'} => {  backgroundColor: 'green', textAlign: 'center' }
     */
    return <TouchableOpacity onPress={() => setBack(!back)} style={{ backgroundColor: color.main, borderRadius: 5, ...containerStyle }}>
        <Text style={{ fontSize: normalize(20) }}>{back ? 'กด' : 'ไม่กด'}</Text>
    </TouchableOpacity>
}

export const Button = ({ title, onPress, containerStyle }) => {
    return <TouchableOpacity onPress={() => onPress()} style={{ backgroundColor: color.main, borderRadius: 5, ...containerStyle }}>
        <Text style={{ fontSize: normalize(20) }}>{title}</Text>
    </TouchableOpacity>
}
// class

// export class ButtonMain extends React.Component {
//     // USE STATE  
//     constructor(props) {
//         super(props)

//         this.state = {
//             press: false
//         }
//     }


//     componentDidMount = () => {
//         alert('hello')
//     }


//     render() {
//         let { title, onPress } = this.props;
//         let { press } = this.state
//         return (
//             <TouchableOpacity onPress={() => this.setState(prev => ({ press: !prev.press }))} style={{ backgroundColor: 'green', borderRadius: 5 }}>
//                 <Text style={{ fontSize: 20 }}>{press ? 'กด' : 'ไม่กด'}</Text>
//             </TouchableOpacity>
//         )
//     }
// }

// อดีต
// export class ButtonCount extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0,
//             sum: 0,
//         }
//     }

//     increments = () => {
//         this.setState(prev => ({ count: prev.count + 1 })) /// prev = State ก่อนหน้า
//     }

//     render() {
//         return <TouchableOpacity onPress={() => this.increments()}
//             style={{ width: width * 0.7, backgroundColor: color.pink, paddingVertical: normalize(6), paddingHorizontal: normalize(20) }}>
//             <Text>{this.state.count}</Text>
//         </TouchableOpacity>
//     }
// }

// function components => use hook
export const ButtonCount = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [sum, setSum] = useState(0)

    useEffect(() => {
        setSum(count + count2)
    }, [count, count2])

    return <View>
        <Text>{sum}</Text>
        <TouchableOpacity
            onPress={() => setCount(count + 1)}
            style={{ width: width * 0.7, backgroundColor: color.pink, paddingVertical: normalize(6), paddingHorizontal: normalize(20) }}>
            <Text>{count}</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => setCount2(count2 + 1)}
            style={{ width: width * 0.7, backgroundColor: color.pink, paddingVertical: normalize(6), paddingHorizontal: normalize(20) }}>
            <Text>{count2}</Text>
        </TouchableOpacity>
    </View>
}