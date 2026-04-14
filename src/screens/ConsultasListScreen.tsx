import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Consulta, StatusConsulta } from "../types";
import { ConsultaCard, Loading, EmptyState } from "../components";
import { consultasService } from "../services/consultasService";
import { styles } from "../styles/consultasList.styles";

export default function ConsultasListScreen({ navigation }: any) {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtroAtivo, setFiltroAtivo] =
    useState<StatusConsulta | "todas">("todas");

  useEffect(() => {
    carregarConsultas();
  }, []);

  async function carregarConsultas() {
    setLoading(true);
    const dados = await consultasService.listarConsultas();
    setConsultas(dados);
    setLoading(false);
  }

  async function handleConfirmar(id: number) {
    await consultasService.confirmarConsulta(id);
    carregarConsultas();
  }

  async function handleCancelar(id: number) {
    await consultasService.cancelarConsulta(id);
    carregarConsultas();
  }

  function handleDetalhes(id: number) {
    navigation.navigate("ConsultaDetalhes", { consultaId: id });
  }

  const consultasFiltradas =
    filtroAtivo === "todas"
      ? consultas
      : consultas.filter((c) => c.status === filtroAtivo);

  if (loading) return <Loading mensagem="Carregando consultas..." />;

  return (
    <View style={styles.container}>
      <View style={styles.filtros}>
        {["todas", "agendada", "confirmada"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.filtro,
              filtroAtivo === item && styles.filtroAtivo,
            ]}
            onPress={() => setFiltroAtivo(item as any)}
          >
            <Text
              style={[
                styles.filtroTexto,
                filtroAtivo === item && styles.filtroTextoAtivo,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={consultasFiltradas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ConsultaCard
            consulta={item}
            onConfirmar={() => handleConfirmar(item.id)}
            onCancelar={() => handleCancelar(item.id)}
            onDetalhes={() => handleDetalhes(item.id)}
          />
        )}
        ListEmptyComponent={
          <EmptyState mensagem="Nenhuma consulta encontrada" icone="📅" />
        }
      />
    </View>
  );
}