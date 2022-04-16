import React from 'react';
import {Text, View, Image, Button, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/Css';

export default function Home({navigation}) {

    return (
        <View style={css.container2}>
            <TouchableOpacity style={css.button__home}>
                <Button onPress={() => navigation.navigate('Login')} title="Login"></Button>
            </TouchableOpacity>

            <TouchableOpacity >
                <Button onPress={() => navigation.navigate('Rastreio')} title="Rastreio"></Button> 
            </TouchableOpacity>
        </View>
    );
}