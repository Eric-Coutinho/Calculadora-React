import { StatusBar } from 'expo-status-bar';
import { useState } from "react"
import { StyleSheet, Text, View, Image, TextInput, Switch, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function User(props) {
  const [inicio, setInicio] = useState(false)
  const Stack = createStackNavigator()

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Usuarios </Text>
      <View style={styles.card}>
        <Text>Nome:</Text>
        <Text>Idade:</Text>
        <Text>Sexo:</Text>
        <Text>Recebe Notificação:</Text>
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
