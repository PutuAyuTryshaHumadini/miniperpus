import React, { Component } from "react";
import { StyleSheet, Text, View, Image,TouchableHighlight } from 'react-native';
import Header from './Header';

const foto = require('./2.png')
export default class AboutMe extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <Header/>
      <View style={styles.vfooter}>
        <View style={styles.box4}>
        <Text style={styles.text3}> Profile </Text>
        </View>
        </View>
        <View style={styles.biodata}>
            <View style={styles.biodatafoto}>
                <Image source={2} style={styles.foto} />
            </View>
            <View style={styles.label1}>
                        <Text style={styles.label2}>Nama  : Trysha </Text>
                        <Text style={styles.label2}>Nis   :  14114 </Text>

                    </View>

        </View>
        <View style={styles.motto}>
            <View style={styles.mottobox}>
                <Text style={{fontSize: 26, fontWeight: 'bold'}}>
                </Text>
                <Text style={{fontSize: 24, fontStyle: 'italic'}}>
                </Text>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}
        onPress={() => this.props.navigation.navigate('Upload')}>
            <Text style={styles.buttonText}>UPLOAD FOTO</Text>
            </TouchableHighlight>
           </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  biodata: {
    flex: 2,
    flexDirection: 'row'
  },
  button2Style: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom : 40,
    paddingTop : 30,
    marginTop: 50,
    justifyContent: 'center',
    backgroundColor: "#00FFFF",
    height: 50,
    width: 300,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
},
  biodatafoto: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label1: {
    flex:4,
    alignItems:'stretch',
    justifyContent:'center',
    margin:5
},
  biodatanama: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label2: {
    borderWidth:1,
    fontSize:15,
    paddingLeft:10,
    paddingTop:10,
    paddingRight:10,
    paddingBottom:10
},
  motto: {
    flex: 4,
    alignItems: 'center',
  },
  mottobox:{
      width: '95%',
      height: '65%',
      backgroundColor: '#F0F8FF',
      marginTop: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
  },
  foto:{
      width: '85%',
      height: '85%',
      borderRadius: 10,
  },
  textbio:{
      fontSize: 13,
  },
  box4: {
    flex:0.7,
    backgroundColor:"white",
    alignItems: 'center',
    justifyContent: 'center'
},
vfooter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},
text3:{
  fontSize:20,
  color:'black',
  alignItems: 'center',
  justifyContent: 'center'
},

});
