import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login'
import Cadastro from './Cadastro'
import User from './User'
import Calculadora from './Calculadora'
import Histórico from './Histórico'
import { UtilsContext } from './context'
import { useContext, useState } from 'react'

export default function App() {
  const Stack = createStackNavigator()
  const [utils, setUtils] = useState({})

  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{utils, setUtils}}>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="Cadastro" component={Cadastro}></Stack.Screen>
            <Stack.Screen name="User" component={User}></Stack.Screen>
            <Stack.Screen name="Calculadora" component={Calculadora}></Stack.Screen>
            <Stack.Screen name="Histórico" component={Histórico}></Stack.Screen>
        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
  );

}
