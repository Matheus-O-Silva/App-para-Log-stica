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

    fetch("http://172.29.48.1:8000/api/sanctum/token", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
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