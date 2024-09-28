import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, FlatList, View, Image } from "react-native";
import { globalStyles } from "../styles/global";
import axios from "axios";
import { Planta } from "../../assets/Planta";

export default function Plantae() {
  const [plantas, setPlantas] = useState([]);

  async function carregarDados() {
    try {
      const response = await axios.get("http://192.168.0.23:3000/plantas");
      setPlantas(response.data);
    } catch (error) {
      Alert.alert("Erro ao obter dados:", error);
    }
  }
  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        data={plantas}
        renderItem={({ item }) => <Planta planta={item} />}
      />
    </SafeAreaView>
  );
}