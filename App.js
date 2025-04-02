import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator,ImageComponent, StyleSheet, Text, TextInputBase, View, Dimensions, Platform, TouchableOpacity } from 'react-native';
import { Button, Image, SafeAreaView, TextInput } from 'react-native-web';

const { width, height } = Dimensions.get('window');

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.safeAreaContainer}>
        <View style={styles.headerContainer}>
          <Image source={{uri: 'https://icon-library.com/icon/no-user-image-icon-0.html.html'}} style={{width: 80, height: 80}}/>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input}
              placeholder="Digite seu email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput 
              style={styles.input} 
              secureTextEntry
              placeholder="Digite sua senha"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 10}}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={[styles.label, { color: '#4CAF50' }]}>Criar conta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
              <Text style={[styles.label, { color: '#4CAF50' }]}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function Register() {
  return(
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.fontBold}>Cadastro</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Digite seu nome"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Digite seu email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput 
              style={styles.input} 
              secureTextEntry
              placeholder="Digite sua senha"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

function ForgetPassword() {
  return(
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.fontBold}>Esqueceu a senha</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input}
              placeholder="Digite seu email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.03,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  safeAreaContainer: {
    width: width * 0.85,
    maxHeight: height * 0.7,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: width * 0.04,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerContainer: {
    backgroundColor: "#fff",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: height * 0.015,
  },
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: height * 0.01,
  },
  inputContainer: {
    width: '100%',
    marginBottom: height * 0.015,
  },
  label: {
    fontSize: width * 0.015,
    marginBottom: height * 0.008,
    color: '#333',
  },
  input: {
    width: '100%',
    height: height * 0.05,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: width * 0.02,
    fontSize: width * 0.015,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: height * 0.05,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.015,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.015,
    fontWeight: '500',
  },
  fontBold: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#333',
  }
})
