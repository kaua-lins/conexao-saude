import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function ExibirDados({ route }) {
  const { cadastros } = route.params || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Espera</Text>
      <FlatList
        style={styles.lista}
        data={cadastros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>ID: {item.id}</Text>
            <Text>Nome: {item.nome}</Text>
            <Text>CPF: {item.cpf}</Text>
          </View>
        )}
      />

      <Text style={styles.texto}>Aguarde sua vez! Seu ID será chamado.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#255C99",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: 'uppercase',
    textAlign: 'center',
    color: "#fff",
    padding: 10,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },

  item: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },

  lista: {
    color: '#fff',
  },
  
  texto: {
    color: '#fff',
    textAlign: 'center',
  }
});
