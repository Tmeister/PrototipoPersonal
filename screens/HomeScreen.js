import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";




const HomeScreen = () => {

const navigation = useNavigation();

    return (
        <View>
                <Text 
                    style = {{
                        fontSize: 30,
                        textAlign: "center",
                        marginTop: "10%",
                        marginBottom: "10%",
                    }}
                    >HOME</Text>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("Notifications")}
                        
                        style={{
                            backgroundColor: "#008E60",
                            alignSelf: "center",
                            padding: 30,
                            marginTop: "10%",
                            width: "60%",
                            height: "20%",
                            textAlign: "center",
                            borderRadius: 30,
                            
                        }} //Styl
                    >
                        <Text
                                style = {{
                                    fontSize: 25,
                                    textAlign: "center",
                                    paddingTop: "12%",
                                    color:  "white",
                                }}
                                
                        >Notificaciones</Text>


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
                    >Seguimiento</Text>


                    </TouchableOpacity>

                    <TouchableOpacity
                    style={{
                        backgroundColor: "#008E60",
                        alignSelf: "center",
                        padding: 30,
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
                                paddingTop: "12%",
                                color:  "white",
                            }}
                    >Mi Informacion</Text>


                    </TouchableOpacity>




                                </View>
                            );
                        }

export default HomeScreen;