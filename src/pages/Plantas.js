import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import { globalStyles } from "../styles/global";
import axios from "axios";

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
      <FlatList />
    </SafeAreaView>
  );
}
