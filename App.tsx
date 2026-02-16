import { StyleSheet, Text, View, Button, TouchableOpacity, Modal, Image , TextInput} from 'react-native';
import  LoginButton  from './components/LoginButton'
import Input from './shared/Input/Input';
import { Colors } from './shared/tokens';



export default function App() {

  return (
    <View style={styles.container}>
  
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
         <LoginButton text='Войти'/>
          
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
