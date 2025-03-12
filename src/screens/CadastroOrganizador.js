import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button
} from "react-native";
import api from "../axios/axios";


export default function CadastroOrganizador({navigation}) {
  const [org, setOrg] = useState({
    nome:"",
    email:"",
    senha:"",
    telefone:"",
  });

  async function handleCadastroOrg() {
    await api.postCadastroOrg(org).then(
      (response) => {
        Alert.alert('OK',response.data.message);
      },
      (error) => {
        Alert.alert('Erro', error.response.data.error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o Cadastro do Organizador</Text>
      <TextInput 
      style={styles.input}
        placeholder="Nome"
        value={org.nome}
        onChangeText={(value) => {
          setOrg({ ...org, nome: value });
        }}
      />
      <TextInput 
      style={styles.input}
        placeholder="Email"
        value={org.email}
        onChangeText={(value) => {
          setOrg({ ...org, email: value });
        }}
      />
      <TextInput 
      style={styles.input}
        placeholder="Senha"
        value={org.senha}
        onChangeText={(value) => {
          setOrg({ ...org, senha: value });
        }}
      />
      <TextInput 
      style={styles.input}
        placeholder="Telefone"
        value={org.telefone}
        onChangeText={(value) => {
          setOrg({ ...org, telefone: value });
        }}
      />

      <TouchableOpacity onPress={handleCadastroOrg} style={styles.button}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
      <Button title="Voltar para Home" onPress={()=> navigation.navigate("Home")}/>

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
  input:{
    width:'100%',
    height:40,
    borderBottomWidth:1,
    marginBottom:20,
    paddingHorizontal:10
  },
  button:{
    backgroundColor: '#AD4596',
    padding:10,
    borderRadius:5
  },
});
