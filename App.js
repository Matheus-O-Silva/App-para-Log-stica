import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Page from './views/Page';
import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import Home from './views/Home';

export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

