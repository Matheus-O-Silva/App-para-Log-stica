import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home(props) {

    return (

      //console.log(props);

      <View>
          <Text>Este é o component Home</Text>
          <Button title="Ir para Login" onPress={()=> props.navigation.navigate('Login') } />
      </View>

    );

  }