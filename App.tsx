import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import EditData from './src/pages/EditData';


function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Detalhes da Corrida" component={Home} />
        <Stack.Screen name="Editar Dados" component={EditData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
