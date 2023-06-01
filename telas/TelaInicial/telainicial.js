import * as React from "react";
import { View , Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function TelaInicial({ navigation }) {

    const navegarCadastro = () => {
        navigation.navigate('Cadastro');
    };

    const navegarFuncionamento = () => {
      navigation.navigate('Funcionamento')
    }

  return (
    <View style={s.telaInicialContainer}>
      <View style={s.tituloBox}> 
        <Text style={s.titulo}>conexão</Text>
        <Text ><FontAwesome name="heartbeat" size={60} color="#fff"/></Text>
        <Text style={s.titulo}>saúde</Text>
      </View>
        
      <TouchableOpacity onPress={navegarCadastro}>
          <Text style={s.telaInicialButton}>Criar cadastro</Text>
      </TouchableOpacity>

      <View>
        <Button 
          title="Como funcionamos"
          onPress={navegarFuncionamento}
        />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
    telaInicialContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#255C99',
    },

    tituloBox: {
        alignItems: 'center',
        marginTop: 30,
        padding: 10,
        color: '#fff',
        borderWidth: 3,
        borderColor: '#fff',
        marginBottom: 90,
    },

    titulo: {
        textTransform: 'uppercase',
        fontSize: 50,
        padding: 10,
        color: '#fff',
        fontWeight: 'bold',
    },

    telaInicialButton: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        backgroundColor: '#fff',
        color: '#255C99',
        padding: 16,
        borderRadius: 8,
        marginBottom: 20,
    },  
});