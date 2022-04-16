import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, KeyboardAvoidingView,Platform, TouchableOpacity} from 'react-native';
import { css } from '../assets/css/Css';

export default function Login(props) {

  const [display, setDisplay]   = useState('none');
  const [user, setUser]         = useState(null);
  const [password, setPassword] = useState(null);
  const [login, setLogin]       = useState(null);

  //Envia o formulário de Login
  async function sendForm()
  {
    let response = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user,
        password: password,
      })
    })
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