import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, KeyboardAvoidingView,Platform, TouchableOpacity} from 'react-native';
import { css } from '../assets/css/Css';

export default function Login(props) {

  const [display, setDisplay]=useState('none');

  return (
    
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}> 

      <View>
        <Text style={ css.login__msg(display) }>Usuário e ou Senha inválidos</Text>
      </View>

      <View style={css.login__form}>
        <TextInput style={css.login__input} placeholder='Usuário'/>
        <TextInput style={css.login__input} placeholder='Senha' secureTextEntry={true}/>

        <TouchableOpacity onPress={()=> setDisplay('flex')} style={css.login__button}>
          <Text style={css.login__buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
  
}