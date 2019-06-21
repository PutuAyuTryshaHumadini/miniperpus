import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity,Image} from 'react-native';

export default class login2 extends React.Component {

render(){
    return(
<View style={styles.container}>
    <Image  style={{width:140, height: 70}} source={require('./Logo.jpg')}/>
    <Text style={styles.logoText}>Welcome to My app.</Text>
        
    <View style={styles.form}>
        <TextInput style={styles.inputBox} 
        underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email" 
        placeholderTextColor = "#ffffff" selectionColor="#fff"
        keyboardType="email-address"
        onSubmitEditing={()=> this.password.focus()}/>
        
        <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password"
        secureTextEntry={true}placeholderTextColor = "#ffffff"
        ref={(input) => this.password = input}  />

        <TouchableOpacity onPress={() => this.props.navigation.navigate('login2')} style={styles.button}>
        <Text style={styles.buttonText}>register</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => this.props.navigation.navigate('login')}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
    </View>
        
    
</View>)

    }

}



const styles = StyleSheet.create({
container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
},
        
form : {
marginVertical:40,
justifyContent:'center',
alignItems: 'center'
},

inputBox: {
marginVertical:10,
width:300,
backgroundColor:'rgba(255, 255,255,0.2)',
borderRadius: 25,
paddingHorizontal:16,
fontSize:16,
color:'#ffffff',

},

button: {
width:300,
backgroundColor:'#1c313a',
borderRadius: 25,
marginVertical: 10,
paddingVertical: 13
},

buttonText: {
fontSize:16,
fontWeight:'500',
color:'#ffffff',
textAlign:'center'

},
signupTextCont : {
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
    
    },
    
    signupText: {
    marginVertical:10,
    color:'rgba(255,255,255,0.6)',
    fontSize:16
    },
    
    signupButton: {
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
    },
    container2 : {
        flexGrow: 1,
        justifyContent:'flex-end',
        alignItems: 'center'
        },
        logoText : {
        fontSize:18,
        color:'rgba(255, 255, 255, 0.7)'
        }

});