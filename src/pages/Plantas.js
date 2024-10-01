import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, TextInput } from "react-native";
import axios from "axios";
import { stylePlanta } from "../../src/styles/stylePlanta";
import { Planta } from "../../assets/Planta";

export default function Plantae() {
  const [plantas, setPlantas] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 2;

  const filterPlantas = plantas.filter(planta => 
    planta.name.toUpperCase().includes(search.toUpperCase()) ||
    planta.description.toUpperCase().includes(search.toUpperCase()) ||
    planta.nutrition.toUpperCase().includes(search.toUpperCase()) ||
    planta.cellType.toUpperCase().includes(search.toUpperCase()) ||
    planta.cellOrganization.toUpperCase().includes(search.toUpperCase()) ||
    planta.reproduction.toUpperCase().includes(search.toUpperCase()) ||
    planta.respiration.toUpperCase().includes(search.toUpperCase())
  )

  async function carregarDados() {
    try {
      const response = await axios.get(`http://192.168.0.23:3000/plantas?page=${page}&limit=${limit}`);
      setPlantas((prevPlantas) => {
        const newPlantas = response.data.filter(
          newPlanta => !prevPlantas.some(prevPlanta => prevPlanta.id === newPlanta.id)
        );
        return [...prevPlantas, ...newPlantas];
      });
      setPage((prev) => prev + 1);
    } catch (error) {
      Alert.alert("Erro ao obter dados:", error);
    }
  }
  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <SafeAreaView style={stylePlanta.safe}>
      <TextInput
        style={stylePlanta.input}
        value={search}
        onChangeText={setSearch}
        placeholder="Pesquisar..."
      />

      <FlatList
        data={filterPlantas}
        renderItem={({ item }) => <Planta planta={item} />}
        style={stylePlanta.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
