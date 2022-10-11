import React from "react";
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//import { useNavigation } from "@react-navigation/native";

export default function ButtonGradient (){

   // const navigation = useNavigation();
    return(

        <TouchableOpacity style = {styles.container}>
            <LinearGradient

               // onPress={() => navigation.navigate("HomeScreen")}

                colors={['#008E60', '#303030']}
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.button}
                
            >
                <Text style={styles.text}>INGRESAR</Text>
            </LinearGradient>
        </TouchableOpacity>

    );
}


const styles = StyleSheet.create({
        container: {
            width: 200,
            alignContent: "center",
            justifyContent: "center",
            paddingStart: 30
        },


    text: {
        fontSize: 14,
        color: '#ffff',
        fontWeight: "bold",
        
    },

    button: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        paddingStart: 35,
        paddingTop: 12,
        alignContent: "center",
        justifyContent: "center"
        
    },
});
