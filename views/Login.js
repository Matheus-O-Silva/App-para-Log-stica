import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, TextInput, Image, KeyboardAvoidingView,Platform, TouchableOpacity} from 'react-native';
import { css } from '../assets/css/Css';

export default function Login({navigation}) {

  const [display, setDisplay]   = useState('none');
  const [user, setUser]         = useState(null);
  const [password, setPassword] = useState(null);
  const [login, setLogin]       = useState(null);

  //Envia o formulário de Login
  async function sendForm()
  {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var formdata = new FormData();
    formdata.append("email", user);
    formdata.append("password", password);
    formdata.append("device_name", "mobile");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders, 
      body: formdata,
      redirect: 'follow'
    };

    let response=await fetch("http://192.168.1.6:8000/api/sanctum/token", requestOptions,{
    });
    let json=await response.json();
    if(json === 'error'){
        setDisplay('flex');
        setTimeout(()=>{
            setDisplay('none');
        },5000);
        await AsyncStorage.clear();
    }else{
        let userData = await AsyncStorage.setItem('userData', JSON.stringify(json))
        let resData  = await AsyncStorage.getItem('userData')
        console.log(resData)
        navigation.navigate('Rastreio');
    }
      
  }

  return (
    
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}> 

      <View>
        <Text style={ css.login__msg(display) }>Usuário e ou Senha inválidos</Text>
      </View>

      <View style={css.login__form}>
        <TextInput style={css.login__input} placeholder='Usuário' onChangeText={text=> setUser(text)}/>
        <TextInput style={css.login__input} placeholder='Senha' secureTextEntry={true} onChangeText={text=> setPassword(text)}/>

        <TouchableOpacity onPress={()=> sendForm()} style={css.login__button}>
          <Text style={css.login__buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
  
}