import { StyleSheet, Text, View,  Image ,  Alert }from 'react-native';
import  LoginButton  from './components/LoginButton'
import Input from './shared/Input/Input';
import { Colors } from './shared/tokens';
import ErrorNotification from './components/ErrorNotification/ErrorNotification';
import { useState } from 'react';



export default function App() {
  const [error, setError] = useState<string | undefined>()

  const alert = () => {
    setError('Wrong login or password')
  }

  return (
    <View style={styles.container}>
      <ErrorNotification error ={error}/>
  
      <View style={styles.content}>

          <Image
            source={require('./assets/icons/logo.png')}
            style={styles.logo}
          />

        <View style={styles.form}>
          <Input 
            placeholder='Email'
            placeholderTextColor={Colors.grey}
          />
          <Input 
            placeholder='Password'
            isPassword 
            placeholderTextColor={Colors.grey}
          />
         <LoginButton text='Войти' onPressIn={alert}/>
          
        </View>
         <Text style={styles.formText}>Восстановить пароль</Text>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.black,
    padding:55,
    justifyContent: 'center',
    
  },
  content: {
    alignItems:'center',
    gap:50
  },

  logo: {
    resizeMode:'center'
  },

  form:{
    alignSelf:'stretch'
  
  },

  formText: {
    color:Colors.link
  }
 
  

});
