import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Consulta } from "../interfaces/consulta";
import {ConsultaCard} from "../components/ConsultaCard";
import { styles } from "../styles/home.styles";
import { obterConsultas, salvarConsultas } from "../services/storage";

export default function Home({ navigation }: any) {
  const [consultas, setConsultas] = useState<Consulta[]>([]);

  useEffect(() => {
    carregarConsultas();
  }, []);

  async function carregarConsultas() {
    const consultasSalvas = await obterConsultas();
    setConsultas(consultasSalvas);
  }

  async function confirmarConsulta(consultaId: number) {
    const atualizadas = consultas.map((c) =>
      c.id === consultaId ? { ...c, status: "confirmada" as const } : c
    );
    setConsultas(atualizadas);
    await salvarConsultas(atualizadas);
  }

  async function cancelarConsulta(consultaId: number) {
    const atualizadas = consultas.map((c) =>
      c.id === consultaId ? { ...c, status: "cancelada" as const } : c
    );
    setConsultas(atualizadas);
    await salvarConsultas(atualizadas);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Minhas Consultas</Text>
          <Text style={styles.subtitulo}>
            {consultas.length} consulta(s)
          </Text>
        </View>

        {consultas.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              Nenhuma consulta cadastrada
            </Text>

            <Button
              title="Ir para Admin"
              onPress={() => navigation.navigate("Admin")}
            />
          </View>
        ) : (
          consultas.map((consulta) => (
            <ConsultaCard
              key={consulta.id}
              consulta={consulta}
              onConfirmar={() => confirmarConsulta(consulta.id)}
              onCancelar={() => cancelarConsulta(consulta.id)}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}