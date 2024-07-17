// Importamos React para poder utilizar JSX y React components.
import React from "react";

// Importamos el componente para crear un Bottom Tab Navigator de @react-navigation/bottom-tabs.
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importamos NavigationContainer de @react-navigation/native para envolver nuestra estructura de navegación.
import { NavigationContainer } from '@react-navigation/native';

// Importamos el componente para crear un Native Stack Navigator de @react-navigation/native-stack.
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importamos los iconos de MaterialCommunityIcons de @expo/vector-icons.
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Add from '../screens/Add';

// Creamos una instancia del Bottom Tab Navigator.
const Tab = createBottomTabNavigator();

// Definimos el componente Mytabs como una función que retorna el Tab Navigator configurado.
function Mytabs() {
    return (
        // Definimos el Tab Navigator con sus pantallas y opciones.
        <Tab.Navigator
            // Configuramos opciones globales para las pantallas del Tab Navigator.
            screenOptions={{
                headerShown: false, // No mostrar el encabezado por defecto.
                tabBarActiveTintColor: 'purple', // Color de los iconos activos en la barra de navegación.
                tabBarStyle: {
                    bottom: 5, // Ajusta este valor para subir la barra de navegación.
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 60,
                    paddingBottom: 10
                },
            }}>
            {/* Definimos cada pantalla en el Tab Navigator */}
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Inicio', // Etiqueta de la pestaña.
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home-variant-outline" size={24} color="black" />
                    ),
                    headerShown: true, // Mostrar el encabezado para esta pantalla.
                    headerStyle: {
                        backgroundColor: '#9368EE' // Color de fondo del encabezado.
                    },
                }}
            />
            <Tab.Screen
                name="Productos"
                component={Add}
                options={{
                    tabBarLabel: 'Productos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="inbox-multiple" size={24} color="black" />
                    ),
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#9368EE'
                    },
                }}
            />
        </Tab.Navigator>
    );
}

// Exportamos el componente Mytabs para que pueda ser utilizado en otros lugares.
export default Mytabs;