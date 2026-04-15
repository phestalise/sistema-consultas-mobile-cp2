import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef1f6",
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 50,
  },

  header: {
    marginBottom: 30,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
  },

  subtitulo: {
    fontSize: 15,
    color: "#6b7280",
    marginTop: 4,
  },

  menu: {
    gap: 16,
  },

  card: {
    borderRadius: 20,
    padding: 18,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },


  cardPrimario: {
    borderLeftWidth: 6,
    borderLeftColor: "#7c3aed",
  },

  cardSecundario: {
    borderLeftWidth: 6,
    borderLeftColor: "#22c55e",
  },

  cardTerciario: {
    borderLeftWidth: 6,
    borderLeftColor: "#3b82f6",
  },

  cardQuaternario: {
    borderLeftWidth: 6,
    borderLeftColor: "#f59e0b",
  },


  cardIcone: {
    fontSize: 22,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  textContainer: {
    flex: 1,
  },

  cardTitulo: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },

  cardDescricao: {
    fontSize: 13,
    color: "#6b7280",
    lineHeight: 18,
  },
});