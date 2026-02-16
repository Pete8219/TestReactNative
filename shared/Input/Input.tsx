import { Pressable, StyleSheet, TextInput } from "react-native";
import { TextInputProps } from "react-native";
import { Colors, Radius } from "../tokens";
import { useState } from "react";
import EyeOpened from "../../assets/icons/EyeOpened";
import EyeClosedIcon from "../../assets/icons/eye-closed";
import { View } from "react-native";

export default function Input(props: TextInputProps & { isPassword?: boolean}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

    return (
        <View>
            <TextInput 
                style={styles.input}
                secureTextEntry={props.isPassword && !isPasswordVisible}
                {...props}/>

            {props.isPassword && 
            <Pressable style={styles.eyeIcon} onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                            >
                    {isPasswordVisible ? <EyeOpened/> : <EyeClosedIcon/>}
                </Pressable>}    
        
        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        height:58,
        backgroundColor:'#2E2D3D',
        paddingHorizontal:24,
        borderRadius: Radius.r10,
        alignItems:'stretch',
        marginBottom:10,
        fontSize:16,
        color:Colors.grey
    },
    eyeIcon: {
        position:'absolute',
        right:0,
        paddingHorizontal:20,
        paddingVertical:18  
  
    }
})