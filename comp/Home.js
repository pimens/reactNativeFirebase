import React, { Component } from 'react';
import { TextInput, StyleSheet, Button, View, Text } from 'react-native';
import { Content, Container, Header, Left, Icon, Item, Label, Form, Input } from 'native-base'
import Hed from './Hed';
import {db} from './db/ConfigDb'



class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      dataStaff: [],
      dat: {
        nama: '',
        alamat: ''
      }
    };
  }
  gas() {
    db.ref('/items').push({
      name: this.state.dat.nama,
      addres: this.state.dat.alamat
    }).then((data)=>{
      console.warn('oiiiii')
    })
      // const email ='kidis';
      // const fname = 'pimen';
      // const lname = 'skom';
      // firebase.database().ref('Users/').set({
      //     email,
      //     fname,
      //     lname
      // }).then((data)=>{
      //     //success callback
      //     console.warn('data ' , data)
      // }).catch((error)=>{
      //     //error callback
      //     console.warn('error ' , error)
      // })
  
  }
  handleC() {
    var tmp = this.state.dataStaff.slice();
    tmp.push(this.state.dat);
    this.setState({
      dataStaff: tmp
    })
    //   for (let userObject of this.state.dataStaff) {
    //     console.warn(userObject.nama);
    // }

    // const fd = new FormData();   
    // fd.append('nama', this.state.dat.nama);
    // fd.append('alamat', this.state.dat.alamat); 
    // // console.warn(fd);
    // Axios.post("http://192.168.1.5/apireact/index.php/tps/tesAdd",fd).then((response)=>{
    //   console.warn(response)
    // })   
  }

  render() {
    return (
      <Container>
        <Hed navigation={this.props.navigation} />
        <Content style={{ marginTop: 5, backgroundColor: 'grey' }}>
          <Text>{this.state.dataStaff.length}</Text>

          {
            this.state.dataStaff.map(m => {
              return <Text>{m.nama}</Text>
            })
          }
          <Input
            style={{ marginTop: 5, backgroundColor: 'white' }}
            onChangeText={(text) => this.setState({
              dat: {
                ...this.state.dat,
                nama: text
              }
            })}
          />
          <TextInput
            style={{ marginTop: 5, backgroundColor: 'white' }}
            onChangeText={(text) => this.setState({
              dat: {
                ...this.state.dat,
                alamat: text
              }
            })}
          />
          <Button
            title='add'
            onPress={this.handleC.bind(this)}
          />
        <Button
            title='firebase'
            onPress={this.gas.bind(this)}
          />
          <View style={styles.grid}>
            <View style={styles.col}><Text>adsddda</Text></View>
            <View style={styles.col}><Text>adsda</Text></View>
            <View style={styles.col}><Text>adsda</Text></View>
          </View>
          <View style={{
            backgroundColor: 'blue', height: 150, flexDirection: 'row',
            alignItems: 'center', paddingHorizontal: 5, justifyContent: 'space-between',
            margin: 10
          }}>
            <Text> Home basede </Text>
            <Button
              title='gasdd drawera'
              onPress={() => this.props.navigation.openDrawer()}
            />
          </View>


        </Content>
      </Container>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  icon: {
    width: 24,
    height: 24,
  },
  grid: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingTop: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  col: {
    flexBasis: 110,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'black',
    height: 40,
    margin: 3,
  },
});
export default Home;
