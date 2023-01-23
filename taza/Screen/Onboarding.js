import * as React from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function  Onboarding(props) {
    return (
      <View style={{ flex: 1,  }}>
       <Text> </Text>
        <Image style={{ 
    height: 442, 
    width: 350, 
    borderWidth: 5, 
    borderColor: '#673ab7', 
    borderRadius: 20,
    overflow: 'hidden',
    flex:1
    
  }}  source={{uri:'https://img.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg?w=900&t=st=1674467246~exp=1674467846~hmac=6ee44f824fa7a95bcc846cb1210f8cae2b48b022870872345234bde54cc25f78'}}/>
     
     <TouchableOpacity  
     onPress={()=>{
        props.navigation.navigate('Home');
     }}
     >
     <Text style={{
    backgroundColor: '#edae4e',
    color: 'white',
    padding: 20,
    fontSize: 30,
    borderRadius: 10,
    textAlign: 'center',
    
}}>Welcome to Taza.ai <Ionicons name='md-checkmark-circle' size={32} color='green' /></Text></TouchableOpacity>
      </View>
    );
  }
export default Onboarding;