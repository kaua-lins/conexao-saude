import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Novo({ props, funcao }) {
    return (
        <TouchableOpacity onPress={() => funcao(props.key)}>
            <View style={styles.postagem}>
                <AntDesign name="delete" size={24} color="#fff" />
                <Text style={styles.itemTexto}>{props.texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    postagem: {
        padding: 16,
        marginTop: 16,

        backgroundColor: '#255C99',

        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,

        flexDirection: 'row',
        alignItems: 'center',
    },

    itemTexto: {
        marginLeft: 30,
        color: '#fff',
    }
});