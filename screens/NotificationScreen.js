import React from "react";
import { View,Text,TouchableOpacity } from "react-native";


const NotificationScreen = () => {

    return (
        <View>
                <Text 
                    style = {{
                        fontSize: 30,
                        textAlign: "center",
                        marginTop: "10%",
                        marginBottom: "10%",
                        
                    }}
                    >NOTIFICACIONES</Text>


                <TouchableOpacity
                    style={{
                        backgroundColor: "#008E60",
                        alignSelf: "center",
                        marginTop: "10%",
                        width: "60%",
                        height: "20%",
                        textAlign: "center",
                        borderRadius: 30,
                        
                    }}



                    >
                    <Text
                            style = {{
                                fontSize: 25,
                                textAlign: "center",
                                paddingTop: "22%",
                                color:  "white",
                            }}
                    >Personal</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: "#008E60",
                        alignSelf: "center",
                        marginTop: "10%",
                        width: "60%",
                        height: "20%",
                        textAlign: "center",
                        borderRadius: 30,
                        
                    }}



                    >
                    <Text
                            style = {{
                                fontSize: 25,
                                textAlign: "center",
                                paddingTop: "22%",
                                color:  "white",
                            }}
                    >Herramientas</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: "#008E60",
                        alignSelf: "center",
                        marginTop: "10%",
                        width: "60%",
                        height: "20%",
                        textAlign: "center",
                        borderRadius: 30,
                        
                    }}



                    >
                    <Text
                            style = {{
                                fontSize: 25,
                                textAlign: "center",
                                paddingTop: "22%",
                                color:  "white",
                            }}
                    >Vehiculo</Text>
                </TouchableOpacity>

                
        </View>
    );
}

export default NotificationScreen;
