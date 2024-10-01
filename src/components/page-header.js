import { Text, View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global.js';




export default function page_body({path}){

    
    return(
        
        <View style={globalStyles.page_header}>
            <View><Text> Página : {path} </Text></View> 
        </View>  
        
    )
}