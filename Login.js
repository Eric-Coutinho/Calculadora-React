import { useContext, useState } from "react"
import { StyleSheet, Text, View, Image, TextInput, Switch, TouchableOpacity } from 'react-native';
import { UtilsContext } from './context';

export default function Login(props) {
  const {utils, setUtils} = useContext(UtilsContext);
  const [email, setEmail] = useState("");

  function goToUser(){
    setUtils({...utils, email: email})
    props.navigation.navigate("User")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> LOGIN </Text>
      <View style={styles.form}>

        <Text
          style={{
            paddingHorizontal: '5px',
            paddingVertical: '2px',
            marginTop: '12px'
          }}>
          Email:</Text>
        <TextInput
          singleline
          maxLength={45}
          style={styles.textAreaEmail}
          onChangeText = {text => setEmail(text)}
        />

        <Text
          style={{
            paddingHorizontal: '5px',
            paddingVertical: '2px',
            marginTop: '16px'
          }}>
          Senha:</Text>
        <TextInput
          secureTextEntry={true}
          singleline
          maxLength={45}
          style={styles.textAreaEmail}
        />

        <View style={styles.botao}>
          <TouchableOpacity
            style={styles.touch1}
            onPress={() => goToUser()}
            >
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch2}
            onPress={() => props.navigation.navigate("Cadastro")}
            >
            <Text>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch2}
            onPress={() => props.navigation.navigate("Calculadora")}
            >
            <Text>Calculadora</Text>
          </TouchableOpacity>

        </View>  
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
    marginTop: '80px'
  },
  textAreaEmail: {
    backgroundColor: 'white',
    color: 'black',
    padding: '5px',
    width: '300px',
    borderRadius: '5px',
  },
  touch1: {
    width: "300px",
    backgroundColor: "white",
    padding: "13px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    marginTop: "20px"
  },
  touch2: {
    width: "300px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    marginTop: "10px"
  },
  botao: {
    marginTop: '25vh'
  }
});
