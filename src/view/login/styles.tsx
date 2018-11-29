import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  button: {
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius: 10,
    backgroundColor: "rgb(232,121,117)"
  },
  label: {
    fontSize: 17.5,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  input: {
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: 1,
    height: 40,
    borderColor: "#dbdfe2"
  },
  buttonView: {
    marginBottom: 10,
    justifyContent: "flex-end"
  },
  footer: {
    backgroundColor: "white",
    borderColor: "white",
    alignItems: "center"
  },
  footerText: {
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "rgba(62, 74, 89, 0.45)"
  }
});
