import { StyleSheet } from "react-native";

export const stylePlanta = StyleSheet.create({
  container: {
    backgroundColor: "#F0F9F0",
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  safe: {
    flex: 1,
    backgroundColor: "#9ccc9c",
  },
  list: {
    padding: 10,
  },
  input: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: "#F0F9F0",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
    color: "#176417",
  },
  description: {
    textAlign: "center",
    padding: 10,
    color: "#104210",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  detailTitle: {
    color: "#1F701F",
    fontWeight: "bold",
  },
});
