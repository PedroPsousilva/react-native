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


export default function CadastroEvento({navigation}) {
  const [evento, setEvento] = useState({
    nome:"",
    descricao:"",
    data_hora:"",
    local:"",
    fk_id_organizador:"",
  });

  async function handleCadastroEvento() {
    await api.postCadastroEvento(evento).then(
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
      <Text style={styles.title}>Faça o Cadastro do Evento</Text>
      <TextInput 
      style={styles.input}
        placeholder="Nome"
        value={evento.nome}
        onChangeText={(value) => {
          setEvento({ ...evento, nome: value });
        }}
      />
      <TextInput 
      style={styles.input}
        placeholder="Descrição do Evento"
        value={evento.descricao}
        onChangeText={(value) => {
          setEvento({ ...evento, descricao: value });
        }}
      />
      <TextInput 
      style={styles.input}
        placeholder="Data do Evento"
        value={evento.data_hora}
        onChangeText={(value) => {
          setEvento({ ...evento, data_hora: value });
        }}
      />
      <TextInput 
      style={styles.input}
        placeholder="Local"
        value={evento.local}
        onChangeText={(value) => {
          setEvento({ ...evento, local: value });
        }}
      />
      <TextInput 
      style={styles.input}
        placeholder="Fk_Id_Organizador"
        value={evento.fk_id_organizador}
        onChangeText={(value) => {
          setEvento({ ...evento, fk_id_organizador: value });
        }}
      />

      <TouchableOpacity onPress={handleCadastroEvento} style={styles.button}>
        <Text>Cadastrar Evento</Text>
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
