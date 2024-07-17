import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
// Importa componentes necesarios de react-native.
import { useState } from 'react';
// Importa useState de react para manejar el estado.

import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
//import { initializeApp } from 'firebase/app';
import { app } from '../config/firebase';

export default function Register({ navigation }) {

    // Estados para almacenar los datos del formulario.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSubmit = async () => {
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            console.log('Cuenta creada');
            // const user = auth.currentUser;
            // console.log(user);
            Alert.alert("Registro","cuenta creada exitosamente");
            navigation.navigate('Login');
        }).catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crea una cuenta</Text>
            <TextInput style={styles.input}
                placeholder="Correo electronico"
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                onChangeText={(text) => setPassword(text)} />

            <TouchableOpacity onPress={handleSubmit}>
                {/* Botón para enviar el formulario. */}
                <Text style={styles.linkText}>Crear cuenta</Text>
            </TouchableOpacity>

            <Text style={styles.link}>¿Ya tienes una cuenta?</Text>

            {/* Texto para usuarios que ya tienen una cuenta. */}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                {/* Botón para navegar a la pantalla de inicio de sesión. */}
                <Text style={styles.linkText}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    // Definición de estilos para el componente.
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    link: {
        marginTop: 10,
        textAlign: 'center',
    },
    linkText: {
        color: '#2522AF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
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
});