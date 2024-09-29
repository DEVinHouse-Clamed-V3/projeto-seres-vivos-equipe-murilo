import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/global';
import axios from 'axios';



export default function Fungos() {

  const [loading, setLoading] = useState(false)
  const [fungos, setFungos] = useState([])
  const [search, setSearch] = useState('')
  const [hasMore, setHasMore] = useState(true)

  function carregarDados(start){
    if (loading || !hasMore
     ) return;

    setLoading(true)

    axios
      .get('http://192.168.1.153:3000/fungos')
      .then((response) => {
        setTimeout(() => {
          setLoading(false)
          let end = start + 2
          if (end > response.data.length) {
            end = response.data.length
            setHasMore(false)
          }
          setFungos(response.data.slice(0, end))
        }, 5000)
      })
      .catch(() => {
        Alert.alert("Não foi possível obter a lista de fungos.")
      })
  }

  useEffect(() => {
    carregarDados(0)
  }, [])

  const fungosFiltrados = fungos.filter(fungo => search === '' 
    || fungo.name.toUpperCase().includes(search.toUpperCase())
    || fungo.description.toUpperCase().includes(search.toUpperCase())
    || fungo.nutrition.toUpperCase().includes(search.toUpperCase())
    || fungo.cellType.toUpperCase().includes(search.toUpperCase())
    || fungo.cellOrganization.toUpperCase().includes(search.toUpperCase())
    || fungo.reproduction.toUpperCase().includes(search.toUpperCase())
    || fungo.respiration.toUpperCase().includes(search.toUpperCase())

  )

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={{padding: 10}}><TextInput
        style={{ borderWidth: 1, borderColor: '#835d01', borderRadius: 8, width: '100%', height: 50 }}
        value={search}
        onChangeText={setSearch}
      /></View>
      <FlatList
        ListEmptyComponent={() => (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {
              loading ? (
                <Text>Carregando ...</Text>
              ) : <Text>Não existem fungos</Text>
            }
          </View>
        )}
        data={fungosFiltrados} // array que deseja renderizar
        renderItem={({ item }) => (
          <>
            <TouchableOpacity style={styles.item} >
              <Text style={styles.name}>{item.name}</Text>
              <Image source={{ uri: item.image}} style={{width: 120, height: 120, borderRadius: 8, marginBottom: 8}} />
             <View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}><Text style={{ fontWeight: 'bold', color:'#976b01'}}>Descrição: </Text><Text>{item.description}</Text></View>
                <View style={{ flexDirection: 'row' }}><Text style={{ fontWeight: 'bold', color:'#976b01'}}>Nutrição: </Text><Text>{item.nutrition}</Text></View>
                <View style={{ flexDirection: 'row' }}><Text style={{ fontWeight: 'bold', color:'#976b01'}}>Tipo celular: </Text><Text>{item.cellType}</Text></View>
                <View style={{ flexDirection: 'row' }}><Text style={{ fontWeight: 'bold', color:'#976b01'}}>Organização celular: </Text><Text>{item.cellOrganization}</Text></View>
                <View style={{ flexDirection: 'row' }}><Text style={{ fontWeight: 'bold', color:'#976b01'}}>Reprodução: </Text><Text>{item.reproduction}</Text></View>
                <View style={{ flexDirection: 'row' }}><Text style={{ fontWeight: 'bold', color:'#976b01'}}>Respiração: </Text><Text>{item.respiration}</Text></View>
              </View>
            </TouchableOpacity>
          </>
        )}
        contentContainerStyle={{
          padding: 10,
          paddingBottom: 50,
          gap: 20,
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={true}
        onEndReached={
          carregarDados(fungos.length)
        }
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
      />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  item: {
    maxWidth: 450,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4ec',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#835d01',
    padding: 10
  },
  name: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    color: '#fcb404'
  }
})
