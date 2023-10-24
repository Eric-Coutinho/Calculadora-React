import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from "react"
import { StyleSheet, Text, View, Image, TextInput, Switch, TouchableOpacity } from 'react-native';
import { UtilsContext } from './context';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function Cadastro(props) {
  const {utils, setUtils} = useContext(UtilsContext);
  
  const [inicio, setInicio] = useState(false)
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [sexo, setSexo] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [notfy, setNotfy] = useState(false)

  function goToUser(){
    setUtils({...utils, nome: nome, idade: idade, sexo: sexo, email: email, senha: senha, notfy: notfy})
    props.navigation.navigate("User")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={{
          height: "240px",
          width: "210px",
        }}
        source={require('./assets/userdefault.png')}
      />
      <View style={styles.form}>
        <Text
          style={{
            paddingHorizontal: '5px',
            paddingVertical: '2px'
          }}>
          Nome:</Text>
        <TextInput
          singleline
          maxLength={45}
          style={styles.textArea}
          onChangeText = {text => setNome(text)}
        />
        <View style={styles.Segunda}>
          <View style={styles.formata}>
            <Text
              style={{
                paddingHorizontal: '5px',
                paddingVertical: '2px'
              }}>
              Idade:</Text>
            <TextInput
              singleline
              maxLength={45}
              style={styles.textAreaIdade}
              onChangeText = {text => setIdade(text)}
            />
          </View>

          <View style={styles.formata}>
            <Text
              style={{
                paddingHorizontal: '5px',
                paddingVertical: '2px',
                marginLeft: '30px'
              }}>
              Sexo:</Text>
            <TextInput
              singleline
              maxLength={45}
              style={styles.textAreaSexo}
              onChangeText = {text => setSexo(text)}
            />
          </View>
        </View>
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
            marginTop: '12px'
          }}>
          Senha:</Text>
        <TextInput
          secureTextEntry={true}
          singleline
          maxLength={45}
          style={styles.textAreaEmail}
          onChangeText = {text => setSenha(text)}
        />

        <Text
          style={{
            paddingHorizontal: '5px',
            paddingVertical: '2px',
            marginTop: '12px'
          }}>
          Confirma Senha:</Text>
        <TextInput
          secureTextEntry={true}
          singleline
          maxLength={45}
          style={styles.textAreaEmail}
        />

        <Text
          style={{
            paddingHorizontal: '5px',
            paddingVertical: '2px',
            marginTop: '15px'
          }}>
          Deseja receber notificações?</Text>
        <Switch
          onValueChange={() => setInicio(!inicio)}
          value={inicio}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={inicio ? "#f5dd4b" : "#f4f3f4"}
          activeThumbColor={"#f4f3f4"}
        />

        <TouchableOpacity
          style={styles.touch1}
          onPress={() => goToUser()}
        >
          <Text>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touch2}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text>Cancelar</Text>
        </TouchableOpacity>

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
  form: {
    alignItems: 'flex-start',
  },
  textArea: {
    backgroundColor: 'white',
    color: 'black',
    padding: '5px',
    width: '300px',
    borderRadius: '5px',
  },
  Segunda: {
    display: 'flex',
    flexDirection: 'row'
  },
  formata: {
    marginVertical: '5px',
    alignItems: 'flex-start'
  },
  textAreaIdade: {
    backgroundColor: 'white',
    color: 'black',
    padding: '5px',
    width: '120px',
    borderRadius: '5px',
  },
  textAreaSexo: {
    backgroundColor: 'white',
    color: 'black',
    padding: '5px',
    width: '150px',
    borderRadius: '5px',
    marginLeft: '30px'
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
});
