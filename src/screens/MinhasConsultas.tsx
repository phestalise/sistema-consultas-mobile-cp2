import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
 
type MinhasConsultasProps = {
  onNavigateToAgendamento: () => void;
  onLogout: () => void;
};
 
export default function MinhasConsultas({
  onNavigateToAgendamento,
  onLogout,
}: MinhasConsultasProps) {
  return (
<>
<StatusBar />
<View>
<Text>Minhas Consultas</Text>
<Text>Componente não utilizado na versão simplificada</Text>
</View>
</>
  );
}