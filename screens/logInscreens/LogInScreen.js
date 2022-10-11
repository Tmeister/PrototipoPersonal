import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import ButtonGradient from "./ButtonGradient";


export default function LogInScreen() {





    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>CFE ASSET</Text>
            <Text style={styles.subTitle}>Ingrese con su cuenta</Text>
            <TextInput
                placeholder="name@cfe.org"
                style={styles.textinput}
            />
            <TextInput placeholder="Contraseña"
                style={styles.textinput}
            />
            <Text style={styles.forgotPass}> Olvidaste tu contraseña ?</Text>
            <ButtonGradient/>
            <StatusBar style="auto" />
        </View>
    );

    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        },

        titulo: {
            fontSize: 80,
            color: '#008E60',
            fontWeight: 'bold',
        },

        subTitle: {
            fontSize: 20,
            color: 'gray'
        },

        textinput: {
            fontSize: 15,
            borderWidth: 1,
            borderColor: 'gray',
            paddingStart: 20,
            padding: 5,
            width: '80%',
            height: 50,
            marginTop: 24,
            borderRadius: 30,
        },

        forgotPass: {
            fontSize: 12,
            marginTop: 32,
            marginBottom: 12,
            color: "gray",
            fontWeight: 'bold'


        }

    });