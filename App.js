import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Page from './views/Page';
import {css} from './assets/css/Css';

export default function App() {
  return (
    <View style={css.container}>
      <Text>Tela inicial do App</Text>
      <Page empresa='Celerus' />
      <StatusBar style="auto" />
    </View>
  );
}

