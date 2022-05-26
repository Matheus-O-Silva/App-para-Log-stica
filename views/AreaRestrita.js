import React, {useState,useEffect}  from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AreaRestrita(props) {

    const [user, setUser] = useState();

    useEffect(() => {
        async function getUser()
        {
            let response = await AsyncStorage.getItem('userData');
            let json = JSON.parse(response)
            setUser(json.name);
        }
        getUser();
    },[])

    return (

      <View>
          <Text>Esta é a área restrita</Text>
          <Text>Seja bem vindo {user}</Text>
            <Button 
              title="Ir para Login" 
              onPress={()=> props.navigation.navigate('Login', {
                id: 30
              })} 
            />
      </View>

    );

  }