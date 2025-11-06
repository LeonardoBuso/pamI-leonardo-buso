// app/components/contador.tsx
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Contador(): JSX.Element {
  const [contador, setContador] = React.useState<number>(0);

  function incrementar() {
    setContador((c) => c + 1);
  }

  function decrementar() {
    setContador((c) => c - 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.texto}>
        <Text style={styles.numero}>{contador}</Text>
      </View>

      <View style={styles.botoes}>
        <View style={styles.botaoWrapper}>
          <Button title="+" onPress={incrementar} color="#7A00FF" />
        </View>
        <View style={styles.botaoWrapper}>
          <Button title="-" onPress={decrementar} color="#7A00FF" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000", // fundo preto
    justifyContent: "center",
  },
  texto: {
    alignItems: "center",
    marginBottom: 20,
  },
  numero: {
    color: "#FFFFFF", // número em branco
    fontSize: 48,
    fontWeight: "700",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16, // para RN >= 0.71; caso tenha problema, use margin nos wrappers
  },
  botaoWrapper: {
    minWidth: 80,
  },
});