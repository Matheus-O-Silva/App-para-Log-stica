import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Login, Rastreio} from './views/index'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            title: "Working Logistc",
            headerStyle:{backgroundColor:"rgba(0, 111, 209, 0.8)"},
            headerTintColor:'#333',
            headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

