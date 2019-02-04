import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { normalize } from '../functions';
import { color } from '../resource';

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