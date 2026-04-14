import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  filtros: {
    flexDirection: "row",
    padding: 16,
    gap: 8,
    backgroundColor: "#fff",
  },

  filtro: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#eee",
  },

  filtroAtivo: {
    backgroundColor: "#79059C",
  },

  filtroTexto: {
    color: "#666",
    fontWeight: "600",
  },

  filtroTextoAtivo: {
    color: "#fff",
  },
});