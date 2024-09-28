import React from "react";
import { Text, View, Image } from "react-native";

export function Planta({ planta }) {
  return (
    <View>
      <Image
        source={{ uri: planta.image }}
        style={{ width: "100%", height: 200 }}
      />
      <Text>{planta.name}</Text>

      <View>
        <Text>{planta.description}</Text>
      </View>

      <View>
        <Text>Alimentação:</Text>
        <Text>{planta.nutrition}</Text>
      </View>

      <View>
        <Text>Tipo Celular:</Text>
        <Text>{planta.cellType}</Text>
      </View>

      <View>
        <Text>Organização Celular:</Text>
        <Text>{planta.cellOrganization}</Text>
      </View>

      <View>
        <Text>Reprodução:</Text>
        <Text>{planta.reproduction}</Text>
      </View>

      <View>
        <Text>Respiração:</Text>
        <Text>{planta.respiration}</Text>
      </View>
    </View>
  );
}
