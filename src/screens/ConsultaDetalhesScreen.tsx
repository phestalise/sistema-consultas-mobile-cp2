import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Consulta } from "../types";
import { Loading } from "../components";
import { consultasService } from "../services/consultasService";
import { styles } from "../styles/consultaDetalhes.styles";
import {
  formatarData,
  formatarHorario,
  obterCorStatus,
  obterTextoStatus,
} from "../utils/formatters";

export default function ConsultaDetalhesScreen({ route }: any) {
  const { consultaId } = route.params;

  const [consulta, setConsulta] = useState<Consulta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    setLoading(true);
    const dados = await consultasService.obterConsulta(consultaId);
    setConsulta(dados);
    setLoading(false);
  }

  if (loading || !consulta) return <Loading mensagem="Carregando..." />;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: obterCorStatus(consulta.status) },
          ]}
        >
          <Text style={styles.statusTexto}>
            {obterTextoStatus(consulta.status)}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.titulo}>Paciente</Text>
          <Text style={styles.texto}>{consulta.pacienteNome}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.titulo}>Médico</Text>
          <Text style={styles.texto}>{consulta.medicoNome}</Text>
          <Text style={styles.texto}>{consulta.especialidade}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.titulo}>Data</Text>
          <Text style={styles.texto}>
            {formatarData(consulta.data)}
          </Text>
          <Text style={styles.texto}>
            {formatarHorario(consulta.horario)}
          </Text>
        </View>

        {consulta.observacoes && (
          <View style={styles.card}>
            <Text style={styles.titulo}>Observações</Text>
            <Text style={styles.texto}>{consulta.observacoes}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}