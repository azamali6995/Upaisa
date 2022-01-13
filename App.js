import React from 'react';
import {View, Text} from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Transfer from './src/screens/Transfer/Transfer'
import UpaisaWallet from './src/screens/Transfer/UpaisaWallet';
import ContactList from './src/screens/Transfer/ContactList';

const Stack = createStackNavigator()

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="UpaisaWallet" component={UpaisaWallet} />
      <Stack.Screen name="ContactList" component={ContactList} />

   {/* //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Transfer" component={Transfer} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  

  );
}

export default App;



// <View>
//    <UpaisaWallet />
// </View>