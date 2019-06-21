import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList,TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements'
import axios from 'axios';
import Header from './Header';

export default class ObjekBarang extends Component {
  constructor(props) {
    super(props)

    this.state = {
      barang: [],
    };
  }
  componentDidMount() {
    const id = this.props.navigation.state.params.id
    axios.get(`https://trysha.000webhostapp.com/miniperpus/getDataBuku.php` + id)
      .then(res => {
        const barang = res.data;
        console.log(barang);
        this.setState({ barang });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem
      title={item.nama_barang}
      leftAvatar={{ source: { uri: prefik_url + item.url_gambar } }}
    />
  )
  render() {
    const title = this.props.navigation.getParam('title', 'NO-TITLE');

    return (
      <View style={styles.container} >
        <Header title={title}/>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.barang}
          renderItem={this.renderItem}
        />
        <View style={styles.box1}>
       <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}
        onPress={() => this.props.navigation.navigate('Updatecategory')}>
            <Text style={styles.buttonText}>UPDATE</Text>
            </TouchableHighlight>

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button2Style: {
    justifyContent: 'center',
    backgroundColor: "grey",
    height: 50,
    width: 200,
    borderRadius: 9,
    flexDirection: "column",
    alignItems: "center",
},
box1: {
  flex: 1,
  alignItems: "center"
}
});
