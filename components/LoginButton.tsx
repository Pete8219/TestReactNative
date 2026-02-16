import React from "react";
import { Text, View, StyleSheet, Pressable, PressableProps } from "react-native";
import { Radius, Colors, Fonts } from "../shared/tokens";


export default function LoginButton ( { text, ...props}: PressableProps & {text : string}) {


    return (
        
            <Pressable {...props}>
                <View style={styles.button}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </Pressable>    


        
    )
}

    const styles = StyleSheet.create({

        button:{
            backgroundColor: Colors.primary,
            height:58,
            borderRadius:Radius.r10,
            justifyContent:'center',
            alignItems:'center',
        },
        text:{
            color:Colors.white,
            fontSize:Fonts.f18
        }

    })



