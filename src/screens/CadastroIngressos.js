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


export default function CadastroIngressos({navigation}) {
  const [ing, setIng] = useState({
    preco:"",
    tipo:"",
    fk_id_evento:"",
    
  });

  async function handleCadastroIng() {
    await api.postCadastroIngressos(ing).then(
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
      <Text style={styles.title}>Faça o Cadastro do Ingresso</Text>
      <TextInput 
      style={styles.input}
        placeholder="Preço"
        value={ing.preco}
        onChangeText={(value) => {
          setIng({ ...ing, preco: value });
        }}
      />
      <TextInput 
      style={styles.input}
        placeholder="Tipo"
        value={ing.tipo}
        onChangeText={(value) => {
          setIng({ ...ing, tipo: value });
        }}
      />
      <TextInput 
      style={styles.input}
        placeholder="Fk_id_evento"
        value={ing.fk_id_evento}
        onChangeText={(value) => {
          setIng({ ...ing,fk_id_evento: value });
        }}
      />
      

      <TouchableOpacity onPress={handleCadastroIng} style={styles.button}>
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
