import { Text, View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global.js';




export default function page_body({reino}){

    
    return(
        <View style={globalStyles.test}>
            <View><Text> Página : {reino} </Text></View> 
        </View>
    )
}