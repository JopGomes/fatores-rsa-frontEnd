import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import axios from "axios";

export default function App() {
  const axios = require("axios").default;
  const [number, setNumber] = useState();
  const [result, setResult] = useState();
  const handleResult = (value) => {
    let fib = "P1: 1, P2: 2";
    setResult(fib);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254301/rsa-icon-md.png",
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Informe o valor do termo"
        keyboardType="numeric"
      />
      <Button
        style={styles.button}
        onPress={() => {
          handleResult(number);
        }}
        title="Calcular"
      />
      {result > 0 ? <Text>O valor é {result}</Text> : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  tinyLogo: {
    width: 400,
    height: 200,
    borderWidth: 1,
  },
});
