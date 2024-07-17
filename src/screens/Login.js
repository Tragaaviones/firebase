// Importamos React para poder utilizar JSX y React components.
import React from 'react';

// Importamos los componentes necesarios de react-native.
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../config/firebase';


// Definimos el componente de Login como una función.
export default function Login({ navigation }) {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


    const auth = getAuth(app);

    // Función que maneja el evento de inicio de sesión.
    const handlerLogin = () => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            console.log('Logueado');
            // const user = auth.currentUser;
            // console.log(user);
            navigation.navigate('Home');
        }).catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    };


    const goSignUp = () => {
        navigation.navigate('Register');
    }

    return (
        // Vista principal del componente de login.
        <View style={styles.container}>
            {/* Texto de bienvenida */}
            <Text style={styles.welcomeText}>Bienvenido</Text>
            {/* Campo de entrada para el correo electrónico */}
            <TextInput style={styles.input}
                placeholder="Correo electronico"
                keyboardType='email'
                onChangeText={(text) => setEmail(text)}
            />
            {/* Campo de entrada para la contraseña */}
            <TextInput style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            {/* Botón para recuperar la contraseña */}
            <TouchableOpacity onPress={goSignUp}>
                <Text style={styles.forgotPasswordText}>Crear una cuenta</Text>
            </TouchableOpacity>
            {/* Botón para iniciar sesión */}
            <TouchableOpacity onPress={handlerLogin} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>INICIAR SESIÓN</Text>
            </TouchableOpacity>
        </View>
    );
}

// Estilos para el componente de login.
const styles = StyleSheet.create({
    // Estilo para el contenedor principal.
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    // Estilo para el texto de bienvenida.
    welcomeText: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    // Estilo para los campos de entrada.
    input: {
        width: '100%',
        height: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 18,
    },
    // Estilo para el texto de recuperación de contraseña.
    forgotPasswordText: {
        fontSize: 16,
        color: '#000',
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    // Estilo para el botón de inicio de sesión.
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#9368EE',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    // Estilo para el texto del botón de inicio de sesión.
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});