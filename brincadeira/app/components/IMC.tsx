import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function IMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularIMC() {
    if (!peso || !altura) {
      setResultado("Preencha os campos corretamente!");
      return;
    }

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) / 100; // converte cm para metros

    const imc = pesoNum / (alturaNum * alturaNum);

    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso ideal ✅";
    else if (imc < 30) classificacao = "Sobrepeso ⚠️";
    else classificacao = "Obesidade ❗";

    setResultado(`IMC: ${imc.toFixed(2)}\n${classificacao}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.botao} onPress={calcularIMC}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#7A00FF",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: "#7A00FF",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  textoBotao: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultado: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 22,
    marginTop: 25,
    lineHeight: 30,
  },
});
