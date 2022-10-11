import React from "react";
import { View,Text, TouchableOpacity } from "react-native";


const ToolsScreen = () => {

    return (
        <View>
                <Text 
                    style = {{
                        fontSize: 30,
                        textAlign: "center",
                        marginTop: "10%",
                        marginBottom: "20%",
                    }}
                    >Herramientas</Text>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate("Notifications")}
                        
                        style={{
                            backgroundColor: "#008E60",
                            alignSelf: "center",
                            padding: 30,
                            marginTop: "10%",
                            width: "60%",
                            height: "25%",
                            textAlign: "center",
                            borderRadius: 30,
                            
                        }} //Styl
                    >
                        <Text
                                style = {{
                                    fontSize: 25,
                                    textAlign: "center",
                                    paddingTop: "16%",
                                    color:  "white",
                                }}
                                
                        >Personal</Text>


                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate("Notifications")}
                        
                        style={{
                            backgroundColor: "#008E60",
                            alignSelf: "center",
                            padding: 30,
                            marginTop: "15%",
                            width: "60%",
                            height: "25%",
                            textAlign: "center",
                            borderRadius: 30,
                            
                        }} //Styl
                    >
                        <Text
                                style = {{
                                    fontSize: 25,
                                    textAlign: "center",
                                    paddingTop: "17%",
                                    color:  "white",
                                }}
                                
                        >Herramienta</Text>


                    </TouchableOpacity>


        </View>
    );
}

export default ToolsScreen
;
