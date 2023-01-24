import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import EditData from './src/pages/EditData';
const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Editar Dados" component={EditData} />
        <Stack.Screen name="Detalhes da Corrida" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
