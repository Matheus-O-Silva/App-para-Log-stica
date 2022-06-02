import React, {useState,useEffect}  from 'react';
import {View, Text, Button} from 'react-native';
import {Profile, Cadastro, Edicao} from '../views/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { css } from '../assets/css/Css';

export default function AreaRestrita(props) {

    const Tab = createMaterialBottomTabNavigator();
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

      <Tab.Navigator
      activeColor='#999'
      inactiveColor='#fff'
      barStyle={css.area__tab}
      >
        <Tab.Screen 
          name="Profile"
          component={Profile}
          options={{
          tabBarIcon:()=>(
              <MaterialCommunityIcons  name="users" size={20} color="#999" />
          )
          }}
        />
        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
          tabBarIcon:()=>(
              <MaterialCommunityIcons  name="archive" size={20} color="#999" />
          )
          }}
        />
        <Tab.Screen 
          name="Edicao"
          component={Edicao}
          options={{
          tabBarIcon:()=>(
              <MaterialCommunityIcons  name="edit" size={20} color="#999" />
          )
          }}
        />
      </Tab.Navigator>

    );

  }