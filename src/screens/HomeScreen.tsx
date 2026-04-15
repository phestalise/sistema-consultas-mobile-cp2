import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/home.styles";

type HomeScreenProps = {
  navigation: any;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        

        <View style={styles.header}>
          <Text style={styles.titulo}>Sistema de Consultas</Text>
          <Text style={styles.subtitulo}>Bem-vindo ao sistema!</Text>
        </View>

  
        <View style={styles.menu}>


          <TouchableOpacity
            style={[styles.card, styles.cardPrimario]}
            onPress={() => navigation.navigate("ConsultasList")}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.cardIcone}>📅</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.cardTitulo}>Minhas Consultas</Text>
              <Text style={styles.cardDescricao}>
                Visualize e gerencie suas consultas
              </Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={[styles.card, styles.cardSecundario]}
            onPress={() => navigation.navigate("NovaConsulta")}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.cardIcone}>➕</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.cardTitulo}>Agendar Consulta</Text>
              <Text style={styles.cardDescricao}>
                Agende uma nova consulta médica
              </Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={[styles.card, styles.cardTerciario]}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.cardIcone}>👤</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.cardTitulo}>Meu Perfil</Text>
              <Text style={styles.cardDescricao}>
                Visualize e edite seus dados
              </Text>
            </View>
          </TouchableOpacity>

    
          <TouchableOpacity
            style={[styles.card, styles.cardQuaternario]}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.cardIcone}>⚙️</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.cardTitulo}>Configurações</Text>
              <Text style={styles.cardDescricao}>
                Ajuste as preferências do app
              </Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}