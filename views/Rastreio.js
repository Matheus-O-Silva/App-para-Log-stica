import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Rastreio(props) {

    return (

      <View>
          <Text>Este é o component Rastreio</Text>
            <Button 
              title="Ir para Login" 
              onPress={()=> props.navigation.navigate('Login', {
                id: 30
              })} 
            />
      </View>

    );

  }