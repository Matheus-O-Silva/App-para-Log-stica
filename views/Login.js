import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, TextInput, Image, KeyboardAvoidingView,Platform, TouchableOpacity} from 'react-native';
import { css } from '../assets/css/Css';

export default function Login({navigation}) {

  const [display, setDisplay]   = useState('none');
  const [user, setUser]         = useState(null);
  const [password, setPassword] = useState(null);
  const [login, setLogin]       = useState(null);

  useEffect(()=>{
      verifyLogin();
  },[]);

  //Verifica se o usuário já possui algum login
  async function verifyLogin()
  {
      let response=await AsyncStorage.getItem('userData');
      let json = await JSON.parse(response);
      if(json !== null){
          setUser('test@mail.com');
          setPassword('password');
          setLogin(true);
          
      }
      
  }

  
  useEffect(()=>{
      if(login === true){
          biometric();
      }
  },[login]);

//Biometria
async function biometric()
{
    let compatible= await LocalAuthentication.hasHardwareAsync();
    if(compatible){
        let biometricRecords = await LocalAuthentication.isEnrolledAsync();
        if(!biometricRecords){
            alert('Biometria não cadastrada');
        }else{
            let result=await  LocalAuthentication.authenticateAsync();
            if(result.success){
                //alert('Biometria não cadastrada')
                sendForm();
            }else{
                setUser(null);
                setPassword(null);
            }
        }
    }
}
  

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
    let json = await response.json();
    if(response.status !== 201){
        setDisplay('flex');
        setTimeout(()=>{
            setDisplay('none');
        },5000);
        await AsyncStorage.clear();
    }else{
        let userData = await AsyncStorage.setItem('userData', JSON.stringify(json.user))
        let resData  = await AsyncStorage.getItem('userData')
        //console.log(json.user)
        //console.log(response.status)
        navigation.navigate('AreaRestrita');
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