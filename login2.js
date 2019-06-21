import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity,Image} from 'react-native';
import Header from './Header';
export default class login2 extends React.Component {

render(){
    return(
<View style={styles.container}>

    <Text style={styles.logoText}>E-Library</Text>
    <Image  style={{width:50, height:50}} source={require('./book.png')}/>

    <View style={styles.form}>
        <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)' placeholder="Nama :"
        placeholderTextColor = "white" selectionColor="#fff"
        keyboardType="Nis :"
        onSubmitEditing={()=> this.password.focus()}/>

        <TextInput style={styles.inputBox}
        underlineColorAndroid='rgba(0,0,0,0)' placeholder="Nis :"
        secureTextEntry={true}placeholderTextColor = "white"
        ref={(input) => this.password = input}  />

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>Daftar Akun Baru ?</Text>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('signup')}><Text style={styles.signupButton}> SignUp</Text></TouchableOpacity>
    </View>


</View>)

    }

}



const styles = StyleSheet.create({
container : {
    backgroundColor:'#008B8B',
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
borderRadius: 10,
paddingHorizontal:16,
fontSize:16,
color:'white',

},

button: {
width:300,
backgroundColor:'#1c313a',
borderRadius: 10,
marginVertical: 10,
paddingVertical: 13
},

buttonText: {
fontSize:16,
fontWeight:'500',
color:'white',
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
