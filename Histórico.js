import { useState } from "react"
import { StyleSheet, Text, View, Image, TextInput, Switch, TouchableOpacity } from 'react-native';

export default function Histórico(props) {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico:</Text>
      <View style={styles.card}>
        <Text style={styles.texto}>10 + 1 = 11</Text>
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
    paddingVertical: '20px',
    paddingHorizontal: '10px',
    display: 'flex',
    alignItems: 'flex-start',
    width: '50vw',
    marginTop: '40px'
  },
  texto: {
    fontSize: '30px',
    fontWeight: '500',
  }

});
