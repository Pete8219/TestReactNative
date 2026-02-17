import React from "react";
import { Text, View, StyleSheet, Pressable, PressableProps, Animated } from "react-native";
import { Radius, Colors, Fonts } from "../shared/tokens";
import { GestureResponderEvent } from "react-native/types_generated/index";


export default function LoginButton ( { text, ...props}: PressableProps & {text : string}) {
    const animatedValue = new Animated.Value(100)
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primaryHover, Colors.primary]
    })

    

    const fadeIn = (e: GestureResponderEvent)=> {
        Animated.timing(animatedValue, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true

            }).start()
            props.onPressIn && props.onPressIn(e)
    }

    const fadeOut = (e: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 100,
            duration: 100,
            useNativeDriver: true

        }).start()
        props.onPressOut && props.onPressOut(e)
    }



    return (
        
            <Pressable 
                {...props} 
                onPressIn={fadeIn} 
                onPressOut={fadeOut} 
               
                >
                <Animated.View style={{...styles.button, backgroundColor: color}}>
                    <Text style={styles.text}>{text}</Text>
                </Animated.View>
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



