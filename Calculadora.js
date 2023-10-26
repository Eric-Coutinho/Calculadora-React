import { useState, useContext } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { UtilsContext } from './context';

export default function Calculadora(props) {
    const [text, setText] = useState("");
    const { utils, setUtils } = useContext(UtilsContext);
    const [num, setNum] = useState("")
    const [historicText, setHistoricText] = useState("")

    function Operation(){
        setText(eval(text))
        {text => setNum(text)}
        setUtils({...utils, num:num})
    }


return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Calculadora</Text>
        <View style={styles.card}>
            {text}
        </View>
        <View style={styles.display}>
            <TouchableOpacity onPress={() => setText(text + "+")}>
                <View style={styles.buttons}>
                    <Text style={styles.fonte}>+</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setText(text + "-")}>
                <View style={styles.buttons}>
                    <Text style={styles.fonte}>-</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setText(text + "/")}>
                <View style={styles.buttons}>
                    <Text style={styles.fonte}>/</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setText(text + "*")}>
                <View style={styles.buttons}>
                    <Text style={styles.fonte}>X</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Operation()}>
                <View style={styles.buttons}>
                    <Text style={styles.fonte}>=</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.margin}>
            <View style={styles.display}>
                <TouchableOpacity onPress={() => setText(text + "1")}>
                    <View style={styles.buttons}>
                        <Text style={styles.fonte}>1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText(text + "2")}>
                    <View style={styles.buttons}>
                        <Text style={styles.fonte}>2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText(text + "3")}>
                    <View style={styles.buttons}>
                        <Text style={styles.fonte}>3</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.margin}>
            <View style={styles.display}>
                <TouchableOpacity onPress={() => setText(text + "4")}>
                    <View style={styles.buttons}>
                        <Text style={styles.fonte}>4</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText(text + "5")}>
                    <View style={styles.buttons}>
                        <Text style={styles.fonte}>5</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText(text + "6")}>
                    <View style={styles.buttons}>
                        <Text style={styles.fonte}>6</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.margin}>
            <View style={styles.display}>
                <TouchableOpacity onPress={() => setText(text + "7")}>
                    <View style={styles.buttons}>
                        <Text style={styles.fonte}>7</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText(text + "8")}>
                    <View style={styles.buttons}>
                        <Text style={styles.fonte}>8</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setText(text + "9")}>
                    <View style={styles.buttons}>
                        <Text style={styles.fonte}>9</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.margin}>
            <View style={styles.display}>
                <TouchableOpacity onPress={() => setText(text + "0")}>
                    <View style={styles.buttons}>
                        <Text style={styles.fonte}>0</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.margin}>
            <View style={styles.display}>
                <TouchableOpacity onPress={() => setText("")}>
                    <View style={styles.buttons}>
                        <Text style={styles.fonte}>Limpar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate("Histórico")}>
                    <View style={styles.buttons}>
                        <Text style={styles.fonte}>Histórico</Text>
                    </View>
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
        marginTop: '20px',
        alignItems: 'flex-start'
    },
    card: {
        border: 'solid 2px grey',
        borderRadius: '10px',
        paddingVertical: '20px',
        paddingHorizontal: '10px',
        display: 'flex',
        alignItems: 'flex-start',
        width: '500px',
        marginTop: '40px',
        marginBottom: '40px'
    },
    display: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px'
    },
    buttons: {
        backgroundColor: 'white',
        borderRadius: '10px',
        marginHorizontal: '10px',
        padding: '10px',
        paddingHorizontal: '15px'
    },
    fonte: {
        fontSize: '25px',
        fontWeight: '600',
    },
    margin: {
        marginHorizontal: '60px'
    }



});
