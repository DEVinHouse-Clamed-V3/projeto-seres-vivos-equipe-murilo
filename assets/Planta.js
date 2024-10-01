import React from "react";
import { Text, View, Image } from "react-native";
import { stylePlanta } from "../src/styles/stylePlanta";

export function Planta({ planta }) {
  return (
    <View style={stylePlanta.container}>

      <Text style={stylePlanta.name}>{planta.name}</Text>

      <Image
        source={{ uri: planta.image }}
        style={ stylePlanta.image }
      />

      <View>
        <Text style={stylePlanta.description}>{planta.description}</Text>
      </View>

      <View style={stylePlanta.details}>
      <Text style={stylePlanta.detailTitle}>Alimentação:</Text>
        <Text>{planta.nutrition}</Text>
      </View>

      <View style={stylePlanta.details}>
      <Text style={stylePlanta.detailTitle}>Tipo Celular:</Text>
        <Text>{planta.cellType}</Text>
      </View>

      <View style={stylePlanta.details}>
      <Text style={stylePlanta.detailTitle}>Organização Celular:</Text>
        <Text>{planta.cellOrganization}</Text>
      </View>

      <View style={stylePlanta.details}>
      <Text style={stylePlanta.detailTitle}>Reprodução:</Text>
        <Text>{planta.reproduction}</Text>
      </View>

      <View style={stylePlanta.details}>
        <Text style={stylePlanta.detailTitle}>Respiração:</Text>
        <Text>{planta.respiration}</Text>
      </View>
    </View>
  );
}
