import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";


export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [cadastros, setCadastros] = useState([]);
    const [id, setId] = useState(1);

    const navigation = useNavigation();

    const adicionarCadastro = () => {
        const novoCadastro = {
            nome: nome,
            cpf: cpf,
            id: id
        };

        setCadastros([...cadastros, novoCadastro]);
        setId(id + 1);

        setNome('');
        setCpf('');
        setSenha('');

        navigation.navigate('ExibirDados', { cadastros: [...cadastros, novoCadastro] });
    };

  return (
    <View style={s.cadastroContainer}>
      <View style={s.cadastroBox}>
        <View style={s.tituloBox}>
          <Text style={s.titulo}>INFORME SEUS DADOS</Text>
        </View>
        <View style={s.inputBox}>
          <Text style={s.texto}>Digite seu nome: </Text>
          <TextInput style={s.input} 
          placeholder="Ex: Fulano da Silva" 
          value={nome}
          onChangeText={(text) => setNome(text)}
          />

          <Text style={s.texto}>Digite seu CPF: </Text>
          <TextInput
            style={s.input}
            keyboardType="numeric"
            placeholder="Ex: 000.111.222-33"
            value={cpf}
            onChangeText={(text) => setCpf(text)}
          />
          <Text style={s.texto}>Digite sua senha: </Text>
          <TextInput 
          style={s.input}
          secureTextEntry={true}
          placeholder="Ex: mjFkiO89?"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          />
        </View>
      </View>

      <TouchableOpacity style={s.cadastroButton} onPress={adicionarCadastro}>
        <Text style={s.cadastroButtonText}>Gerar ID</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const s = StyleSheet.create({
  cadastroContainer: {
    flex: 1,
    backgroundColor: "#255C99",
    alignItems: "center",
    justifyContent: "center",
  },

  cadastroBox: {
    backgroundColor: "#fff",
    padding: 30,
    height: 400,
    borderRadius: 8,
  },

  tituloBox: {
    marginBottom: 40,
  },

  titulo: {
    color: "#255C99",
    fontSize: 20,
    fontWeight: "bold",
  },

  texto: {
    color: "#255C99",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 5,
    marginBottom: 10,
    marginTop: 5,
  },

  input: {
    padding: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#255C99",
  },

  cadastroButton: {
    marginTop: 30,
    backgroundColor: "#fff",

    borderRadius: 8,
  },

  cadastroButtonText: {
    textTransform: "uppercase",
    color: "#255C99",
    fontWeight: 'bold',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
