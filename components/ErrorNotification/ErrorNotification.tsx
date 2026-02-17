import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ErrorNotificationProps } from './ErrorNotificationProps'
import { Colors, Fonts } from '../../shared/tokens'

const ErrorNotification = ({error}: ErrorNotificationProps) => {
    //const windowWidth = Dimensions.get('window').width

    const [isShown, setIsShow] = useState<boolean>(false)
    const animatedValue = new Animated.Value(-100)
    const onEnter = ()=> {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        if(!error) {
            return
        }

        setIsShow(true)
        
        const timerId = setTimeout(() => {
            setIsShow(false)
        }, 3000)

        return () => {
            clearTimeout(timerId)
        }
    },[error])

    if(!isShown) {
        return <></>
    }

  return (
    <Animated.View style = {{...styles.error, transform: [
        {translateY: animatedValue}
    ]}} onLayout={onEnter}>
      <Text style={ styles.errorText}>{error}</Text>
    </Animated.View>
  )
}

export default ErrorNotification

const styles = StyleSheet.create({
    error: {
        position: 'absolute',
        top:40,
        width: Dimensions.get('window').width,
        backgroundColor: Colors.red,
        padding: 15

    },
    errorText: {
        color:'white',
        fontSize:Fonts.f16,
        textAlign:'center'
    }
})