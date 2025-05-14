import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import api from "../axios/axios";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from 'expo-secure-store';

export default function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const navigation = useNavigation();

  async function saveToken(token) {
      //response.data
        await SecureStore.setItemAsync("token",token);
        
  }

  async function handleLogin() {
    await api.postLogin({ email: user.email, password: user.password }).then(
      (response) => {
        Alert.alert("OK", response.data.message);
        saveToken(response.data.token);
      
        navigation.navigate("EventoScreens")
      },
      (error) => {
        Alert.alert("Erro", error.response.data.error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Faça Login </Text>
      <View style={styles.emailContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={user.email}
          onChangeText={(value) => setUser({ ...user, email: value })}
        />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          secureTextEntry={!user.showPassword}
          value={user.password}
          onChangeText={(value) => setUser({ ...user, password: value })}
        />
        <TouchableOpacity
          onPress={() => setUser({ ...user, showPassword: !user.showPassword })}
        >
          <Ionicons
            name={user.showPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    width: "100%",
    paddingRight: 10, // Para afastar o ícone da borda
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingRight: 10, // Para afastar o ícone da borda
  },
});
