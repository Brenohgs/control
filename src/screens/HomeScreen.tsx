import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contas a Receber</Text>
        <Text style={styles.value}>R$ 0,00</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contas a Pagar</Text>
        <Text style={styles.value}>R$ 0,00</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3
  },

  cardTitle: {
    fontSize: 18
  },

  value: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10
  }

});