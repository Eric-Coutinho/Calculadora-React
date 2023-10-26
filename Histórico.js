import { useContext, useState } from "react"
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { UtilsContext } from "./context";

export default function Histórico(props) {
  const { utils, setUtils } = useContext(UtilsContext);
  const [calc, setCalc] = useState([]);

  const addCalc = () => {
    setCalc([...calc, utils.num])
  }

  addCalc();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico:</Text>
      <View style={styles.card}>
        {utils.historicText.map(item =>
          <Text>{item}</Text>)}
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
