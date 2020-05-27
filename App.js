import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Statusbar from './src/statusbar';
import Settings from './pages/settings';
import Main from './pages/main';
import Profile from './pages/profile';
import Footer from './src/footer';

function HomeScreen({ navigation }) {
  return (
    <View >
      <Button
        title="Налаштування"
        onPress={() => navigation.navigate('Налаштування')}
        color="green"
      />
      <Button
        title="Профіль"
        onPress={() => navigation.navigate('Профіль')}
        color="green"
      />
      <Main />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Settings />
    </View>
  );
}
function ProfileScreen() {
  return (
    <View>
      <Profile />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Головна">
        <Stack.Screen name="Головна" component={HomeScreen} />
        <Stack.Screen name="Налаштування" component={DetailsScreen} />
        <Stack.Screen name="Профіль" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;