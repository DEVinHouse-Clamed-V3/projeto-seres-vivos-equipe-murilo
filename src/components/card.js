import {Text, View} from 'react-native';
import { globalStyles } from '../styles/global.js';



export default function card({name, description, nutrition}){
    return (
        <View style={globalStyles.card_body}>
            <View style={globalStyles.card_head}>
                <Text>Head card</Text>
            </View>
            <View style={globalStyles.card_body_items}>
                <Text> {name} </Text>
                <Text> {description} </Text>
                <Text> {nutrition} </Text>
            </View>
        </View>
    )
}






