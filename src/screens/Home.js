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


export default function Home({navigation}) {

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BEM-VINDO</Text>
    
      <Button title="Ir para cadastro de Organizador" onPress={()=> navigation.navigate("CadastroOrganizador")}/>
      <Button title="Ir para cadastro de Ingresso " onPress={()=> navigation.navigate("CadastroIngressos")}/>
      <Button title="Ir para cadastro de Evento" onPress={()=> navigation.navigate("CadastroEvento")}/>
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
