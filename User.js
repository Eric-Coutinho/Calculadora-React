import { useState, useContext } from "react"
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { UtilsContext } from './context';

function UserBox(props) {

  const { utils, setUtils } = useContext(UtilsContext);

    function deleteUser() {
      setUtils({ ...utils ,  users: utils.users.filter(item => item.nome !== props.users.nome)})
    }

    return (
      <View style={styles.container}>
        
        <View style={styles.card}>
          <View style={styles.text}>
            <Text>Nome: {props.users.nome}</Text>
            <Text>Idade: {props.users.idade}</Text>
            <Text>Sexo: {props.users.sexo}</Text>
            <Text>Recebe Notificação: {props.users.notfy == false ? "Não" : "Sim"}</Text>
          </View>
          <TouchableOpacity
            style={styles.touch1}
            onPress={() => deleteUser()}
          >
            <Text>Deletar Usuário</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default function User(props) {
  const { utils, setUtils } = useContext(UtilsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Usuarios</Text>
      {utils.users.map((users, index) => <UserBox key = {index} users = {users}/>)}
      {/* <UserBox utils={utils}></UserBox> */}
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
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: '40px'
  },
  touch1: {
    width: "140px",
    backgroundColor: "white",
    padding: "13px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    marginLeft: '10px'
  },
  text: {
    marginRight: '80px'
  }

});
