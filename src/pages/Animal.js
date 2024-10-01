import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text, FlatList} from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';


import { globalStyles } from './src/styles/global';
import Animal from './src/pages/Animal';

import  {kingdoms } from './src/constants/reinos.js'

import Card  from './src/components/card.js'
import Header from './src/components/page-header.js'
import Bottom from './src/components/bottom-body.js'


const Stack = createStackNavigator();


function Animal() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
        .get('https://f07b-187-183-36-59.ngrok-free.app/animais')
        .then((response) => {
            setData(response.data)
            console.log('teste')
        })
        .catch(() => {
            console.log("Não foi possivel obter a lista de biscoitos" )
        })
}, [])

  console.log(data)

  return (

    

    <View style={globalStyles.container}>
    {kingdoms.map(kingdom => {
              
      if(kingdom.id == '1')
      
      return <View style={globalStyles.container}>
          <Header 
          path={kingdom.path}
          />
          <FlatList>
          {data.map(animal => {
            
            return (
            
            <Card
            name={animal.name}
            description={animal.description}
            nutrition={animal.nutrition}
            />
            
          )
          })}
          </FlatList>
          <Bottom
          reino={kingdom.name}
          />
          

          
        </View>
    })
    }
    
      
     
      
    </View>
    
  );
}


export default Animal;
