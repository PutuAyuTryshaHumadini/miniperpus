import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput, Platform, Image} from "react-native";
import Header from './Header';
export default class Home extends React.Component {

        render() {
            return (
            <View style={styles.container}>
              <Header judul={"Welcome to E-Library"} />
                <Header/>
                <View style={styles.box1}>
                <Image  style={{width:50, height:50}} source={require('./2.png')}/>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}
        onPress={() => this.props.navigation.navigate('AboutMe')}>
            <Text style={styles.buttonText}>Profile</Text>
            </TouchableHighlight>

                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}
        onPress={() => this.props.navigation.navigate('Category')}>
            <Text style={styles.buttonText}>Data Anggota</Text>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}
        onPress={() => this.props.navigation.navigate('bukucategori')}>
            <Text style={styles.buttonText}>Data Buku </Text>
            </TouchableHighlight>

            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}
        onPress={() => this.props.navigation.navigate('pengembalian')}>
            <Text style={styles.buttonText}>Data Pengembalian Buku</Text>
            </TouchableHighlight>

            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}
        onPress={() => this.props.navigation.navigate('login2')}>
            <Text style={styles.buttonText}>Log Out </Text>
            </TouchableHighlight>
        </View>
        </View>


);
}
}
// define your styles
const styles = StyleSheet.create({
    container: {

    },
    box1: {
        flexDirection: "column",
        alignItems: "center"
    },
    vHeader: {
        backgroundColor:'#194B95',
        alignItems:'center',
        justifyContent:'center',
    },   txtHeader: {
        fontSize:20,
        color : 'white'
    },
    gambar:{
        alignItems: "center"
    },
     buttonStyle: {
         paddingLeft: 10,
         paddingRight: 10,
         paddingBottom : 20,
         justifyContent: 'center',
         backgroundColor: "#90EE90",
         borderRadius: 10,
         flexDirection: "column",
         alignItems: "center",
    },
    button2Style: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom : 40,
        marginTop: 30,
        justifyContent: 'center',
        backgroundColor: "#90EE90",
        height: 50,
        width: 300,
        flexDirection: "column",
        alignItems: "center",
    },
    buttonText: {
        textAlign: "center",
        height: 25,
        width: "100%",
        marginTop: 20,
        color: "black",
        fontSize: 18
    },
    box3: {
        flex: 2,
        width: 10,
        paddingTop: 20,
        paddingBottom:50,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "column",
        alignItems: "center"
    },
    textInput: {
        width: 300,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: 'black'
    },
});
