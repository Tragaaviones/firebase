import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Navigation from './src/navigation/Navigation';
import Register from './src/screens/Register';
import Home from './src/screens/Home'
import Add from './src/screens/Add';
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
     // NavigationContainer envuelve toda la estructura de navegación para proporcionar el contexto necesario.
     <NavigationContainer>
     {/* Definimos el Stack Navigator con las pantallas de la aplicación */}
     <Stack.Navigator
         // Definimos la pantalla inicial de la aplicación.
         initialRouteName='Login'
         // Opciones globales para las pantallas, en este caso desactivamos el header.
         screenOptions={{
             headerShown: false
         }}>
         {/* Definimos cada pantalla en el Stack Navigator */}
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Add" component={Add} />
         <Stack.Screen name="navigation" component={Navigation} />
         <Stack.Screen name="Register" component={Register} />
     </Stack.Navigator>
 </NavigationContainer>
  );
}
