import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerBar}>
            <Text style={styles.headerText}> {props.judul} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: "#00FFFF",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: 20,
        fontWeight: 'bold',
    },
    headerText: {
        fontSize: 18,
        color: "black",
        textAlign: "center"
    },

});
export default Header;
