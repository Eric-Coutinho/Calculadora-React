import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from "react"
import { StyleSheet, Text, View, Image, TextInput, Switch, TouchableOpacity } from 'react-native';
import { UtilsContext } from './context';

export default function User(props) {
  const {utils, setUtils} = useContext(UtilsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Usuarios </Text>
      <View style={styles.card}>
        <Text>Nome: {utils.nome}</Text>
        <Text>Idade: {utils.idade}</Text>
        <Text>Sexo: {utils.sexo}</Text>
        <Text>Recebe Notificação: {utils.notfy == false ? "Não" : "Sim"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
  titulo: {
    fontSize: '60px',
    fontWeight: '500',
    marginTop: '80px',
    alignItems: 'flex-start'
  },
  card: {
    border: 'solid 2px grey',
    borderRadius: '10px',
    paddingVertical: '20px',
    paddingHorizontal: '10px',
    display: 'flex',
    alignItems: 'flex-start',
    width: '50vw',
    marginTop: '40px'
  }

});
