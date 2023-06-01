import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.cabecalho}>
            <View style={styles.caixa1}>
                <Text style={styles.titulo}>Lista de fichas</Text>
            </View>

            <View style={styles.caixa2}>
                <Text style={styles.texto}>Digite a especialidade que você deseja.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#255C99',
    },

    titulo: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },

    caixa2: {
        marginTop: 20,
        marginLeft: 10,
    },  

    texto: {
        color: '#255C99',
        fontWeight: 'bold',
        textTransform: 'uppercase',  
    },
})