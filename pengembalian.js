import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList,} from 'react-native';
import {ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Header from './Header';

type Props = {};
export default class pengembalian extends Component<Props> {
  constructor(props) {
    super(props)
    prefik_url = '';
    this.state = {
        categories: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost/miniperpus/tambahAnggota.php`)
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
  <ListItem
    title={item.kategori_nama}
    leftAvatar={{ source: { uri: prefik_url+item.gambar } }}
    onPress={
        () => {
          this.props.navigation.navigate('ObjekBarang', { id: item.kategori_id, title: item.nama_barang})
        }
      }
  />
)
  render() {
    return (

        <View style={styles.container} >
          <View style={{height:100, justifyContent:'center' ,alignItems:'center',backgroundColor: "#00FFFF"}}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>
           Data Pengembalian
        </Text>
          </View>
            <FlatList
               keyExtractor={this.keyExtractor}
               data={this.state.categories}
               renderItem={this.renderItem}
             />

             <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Tambah Kategori" onPress={() => this.props.navigation.navigate('AddCategory')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>


       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
       flex: 1,
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#00FFFF'
  },
  header: {
    height:70,
    backgroundColor:'#00FFFF',
    justifyContent:'center',
    alignItems:'center'
  },
});
