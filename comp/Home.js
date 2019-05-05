import React, { Component } from 'react';
import { Image, StyleSheet, Button, View, Text } from 'react-native';
import { Content, Container, Header, Left, Icon, Right, Card, CardItem } from 'native-base'
import Hed from './Hed';
import Greet from './Greed';
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
    };
  }

  render() {
    return (
      <Container>      
        <Hed navigation = {this.props.navigation}/>
        <Content style={{ marginTop: 5, backgroundColor: 'grey' }}>
          
          <View style={styles.grid}>
            <View style={styles.col}><Text>hai</Text></View>
            <View style={styles.col}><Text>adsddda</Text></View>
            <View style={styles.col}><Text>adsda</Text></View>
            <View style={styles.col}><Text>adsda</Text></View>
          </View>
          <View style={{
            backgroundColor: 'blue', height: 150, flexDirection: 'row',
            alignItems: 'center', paddingHorizontal: 5, justifyContent: 'space-between',
            margin: 10
          }}>
            <Text> Home basee </Text>
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
