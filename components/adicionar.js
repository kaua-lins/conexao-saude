import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Adicionar({ funcao }) {
    const [texto, setTexto] = useState('');
    const pegarMudanca = (val) => {
        setTexto(val);
    }

    return (
        <View style={styles.cabecalho}>
            <TextInput
                style={styles.input}
                placeholder='Ex: Psiquiatra'
                onChangeText={pegarMudanca}
            />

            <Button
                onPress={() => funcao(texto)}
                title='Adicionar ficha'
                color='#255C99'
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#255C99',
    }
})