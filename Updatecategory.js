import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import Textarea from 'react-native-textarea';
import axios from 'axios';
import Header from './Header'

export default class Updatecategory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id_barang: "",
      nama_barang: "",
      harga_barang: "",
      stok_barang: "",
      kategori_id: ""
    }
  }

  _simpan = () => {
    axios.post('https://mndy1212.000webhostapp.com/projectuas/updateData.php', {
      id_barang: this.state.id_barang,
      nama_barang: this.state.nama_barang,
      harga_barang: this.state.harga_barang,
      stok_barang: this.state.stok_barang,
      kategori_id: this.state.kategori_id
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title='Edit Kategori' />
        <View style={{ flex: 1, marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>ID Barang : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'black', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(id_barang) => this.setState({ id_barang })}
              value={this.state.id_barang}
            />
          </View>
          <View style={{ flex: 1, marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Nama Barang : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'black', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(nama_barang) => this.setState({ nama_barang })}
              value={this.state.nama_barang}
            />
          </View>
          <View style={{ flex: 1, marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Harga Barang : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'black', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(harga_barang) => this.setState({ harga_barang })}
              value={this.state.harga_barang}
            />
          </View>
          <View style={{ flex: 1, marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Stok Barang : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'black', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(stok_barang) => this.setState({ stok_barang })}
              value={this.state.stok_barang}
            />
          </View>
          <View style={{ flex: 1, marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>ID kategori : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'black', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(kategori_id) => this.setState({kategori_id })}
              value={this.state.kategori_id}
            />
          </View>
          <TouchableHighlight
            style={{
              width: '70%', marginHorizontal: '5%', borderRadius: 20, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey'
            }}
            onPress={
              () => {
                this._simpan();
                this.props.navigation.navigate('Category')
              }
            }
            underlayColor='#F4511E'
          >
            <Text style={{ fontSize: 24, color: 'white' }}>SIMPAN EDIT</Text>
          </TouchableHighlight>
          </View>
        </View>
     </View>
  </View>
  </View>
</View>
    )
  }
}