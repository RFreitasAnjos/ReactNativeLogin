import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageComponent, StyleSheet, Text, TextInputBase, View } from 'react-native';
import { Button, Image, SafeAreaView, TextInput } from 'react-native-web';

function login(){
  return (
    <View style={[styles.container, {
      flexDirection:"column"
    }]}>
      <SafeAreaView style={[{
        backgroundColor:'red',
        width:'50%',
        height:'50%'}]}>
        <ImageComponent />
        <Text>Email</Text>
        <TextInput/>
        <Text>Password</Text>
        <TextInput/>
        <Button title='Submit'/>
      </SafeAreaView>
    </View>
  );
};

export default function register(){
  return(
    <View style={[styles.container,{
      flexDirection:"column",
      height:400,
    }]}>
      <View style={[{
        flex:'column',
        backgroundColor:'green',
        height:"100%",
        }]}>
      <SafeAreaView style={[{}]}>
      <View style={[styles.container,{
          backgroundColor:"#e5e5e5",
          flex: 'column',
          alignItems: "center",
          justifyContent: "center",
        }]}>
          <Text style={styles.fontBold}>Cadastro</Text>
        </View>
        <View style={[{
          flex:'column',
          justifyContent: 'center',
          alignItems:'center',
          backgroundColor:'blue'
        }]}>
          <View>
            <Text>Nome</Text>
            <TextInput editable/>
          </View>
          <View>
            <Text>Email</Text>
            <TextInput editable/>
          </View>
          <View>
            <Text>Senha</Text>
            <TextInput editable password current-password/>
          </View>
          <View>
            <Button style={[{backgroundColor:'green'}]} title='Cadastrar'  />
          </View>
        </View>
      </SafeAreaView>
      </View>
    </View>
  );
}

function forgetPassword(){
  return(
    <View style={[styles.container,{

    }]}>
      <SafeAreaView>
      <View style={[styles.container,{
          backgroundColor:"#e5e5e5",
          flex: 'column',
          alignItems: "center",
          justifyContent: "center",
        }]}>
          <Text style={[styles.fontBold]}>Esqueceu a senha</Text>
        </View>
        <View>
          <Text>Email</Text>
          <TextInput></TextInput>
        </View>
        <View>
          <Button title='Enviar' style={styles.borderBottom}/>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  },
  borderTop:{
    flex: 0.3,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  borderMiddle:{
    flex:0.3,
    borderWidth:5,
  },
  borderBottom:{
    flex:0.3,
    borderWidth: 5,
    borderBottomLeftRadius:20,
    borderBottomRightRadius: 20,
  },
  fontBold:{
    fontSize:20,
  }
})
