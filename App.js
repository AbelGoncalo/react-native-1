import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { altura: 0, nome: "", peso: 0, result: 0, resultText: "" };
    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    let imc = this.state.peso / (this.state.altura * this.state.altura);
    let s = this.state;
    s.result = imc;
    this.setState(s);

    if (s.result < 16) {
      s.resultText = "Magreza grave!";
    } else if (s.result < 17) {
      s.resultText = "Magreza leve!";
    } else if (s.result < 18.5) {
      s.resultText = "Saudavel";
    } else if (s.result > 25) {
      s.resultText = "Sobrepeso!";
    } else if (s.result > 30) {
      s.resultText = "Obesidade geral I";
    } else if (s.result > 35) {
      s.resultText = "Obesidade geral II";
    } else {
      s.resultText = "Obesidade geral II";
    }
  }
  render() {
    return (
      <ImageBackground
        source={require("./assets/img/fundo.jpg")}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={styles.box}>
            <Image
              source={require("./assets/img/logo.png")}
              style={styles.logo}
            ></Image>
            <Text style={styles.title}>Calculadora do IMC</Text>
          </View>
          <View style={styles.principal}>
            <TextInput
              style={styles.form}
              placeholder="Nome"
              textContentType="name"
            />
            <TextInput
              style={styles.form}
              placeholder="Peso"
              keyboardType="numeric"
              onChangeText={(peso) => {
                this.setState({ peso });
              }}
            />
            <TextInput
              style={styles.form}
              placeholder="Altura"
              keyboardType="numeric"
              onChangeText={(altura) => {
                this.setState({ altura });
              }}
            />
            <TouchableOpacity style={styles.bt} onPress={this.calcular}>
              <Text>Calcular IMC</Text>
            </TouchableOpacity>
            <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
            <Text style={styles.result2}>{this.state.resultText}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flexDirection: "row",
    width: "90%",
    marginBottom: 30,
  },
  fundo: {
    width: "100%",
    height: "100%",
  },
  logo: {},
  title: {
    fontSize: 25,
    fontWeight: "700",
    paddingTop: 50,
  },

  principal: {
    width: 330,
    height: 420,
    backgroundColor: "rgba(255,255,255,0.5)",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    marginBottom: 150,
  },

  form: {
    height: 50,
    width: 320,
    padding: 10,
    fontSize: 15,
    color: "red",
    backgroundColor: "rgb(225,225,225)",
    borderColor: "#eee",
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 4,
    shadowColor: "#333",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  bt: {
    width: 300,
    padding: 20,
    fontSize: 25,
    color: "red",
    backgroundColor: "rgb(225,255,255)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
    borderRadius: 4,
  },
  result: {
    fontSize: 35,
    fontWeight: "bold",
    margin: 30,
    color: "#2c3a47",
    backgroundColor: "rgba(225,225,225,0)",
    borderColor: "#fff",
    borderBottomWidth: 1,
    marginTop: 20,
  },
  result2: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 30,
    color: "#2c3a47",
    backgroundColor: "rgba(225,225,225,0)",
    borderColor: "#fff",
    borderBottomWidth: 1,
    marginTop: 20,
  },
});
