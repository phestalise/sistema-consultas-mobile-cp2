import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef1f6",
  },

  filtros: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 10,
    backgroundColor: "#ffffff",

    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  filtro: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,

    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#e2e8f0",

    justifyContent: "center",
    alignItems: "center",
  },

  filtroAtivo: {
    backgroundColor: "#7c3aed",
    borderColor: "#7c3aed",

    shadowColor: "#7c3aed",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },

  filtroTexto: {
    color: "#475569",
    fontWeight: "600",
    fontSize: 13,
    letterSpacing: 0.3,
  },

  filtroTextoAtivo: {
    color: "#ffffff",
    fontWeight: "700",
  },
});