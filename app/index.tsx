import { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { useAnimatedKeyboard } from "react-native-reanimated";

const produto = [
  {id: 1, nome: "Coca-Cola", preco: 10.5},
  {id: 1, nome: "Pepsi", preco: 9.5},
  {id: 1, nome: "Fanta", preco: 8.5},
  {id: 1, nome: "Dolly", preco: 6.5}
]

//const gradientColors = ['navy', 'blue', 'cyan'];

export default function Index() {

  let [contador, setContador] = useState(0);
  let [fuga, setFuga] = useState(0);

  return (
    <View
      //colors = {gradientColors}
      style = {styles.container}
    >
      {produto.map((p) => (
        <View key = {p.id}>
          <Text style = {styles.text}>{p.nome + " \u{1F964}"}</Text>
          <Text style = {styles.textSmall}>{"R$ " + p.preco}</Text>
        </View>
      ))}

      <TouchableOpacity style = {styles.buttonStyle}  onPress = {() => clicarBotao()}>
        <Text style = {styles.buttonText}>Quantidade de Clicks {contador}</Text>
      </TouchableOpacity>

      {/* title = {"Quantidade de Clicks " + contador.toString()} */}

    </View>
  );

  function clicarBotao() {
    setContador(contador++);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "navy"
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  textSmall: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center"
  },
  buttonStyle: {
    marginTop: 10,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 20
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  }
});

