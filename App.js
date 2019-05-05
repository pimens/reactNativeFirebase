import React from 'react';
import { TouchableOpacity,StyleSheet,Button, View, Text } from 'react-native';
import { createAppContainer, createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation'; // Version can be specified in package.json
import Home from './comp/Home'
import Greed from './comp/Greed'
import ColGrid from './comp/ColGrid'
import { Content, Container, Header, Left, Icon, Right, Card, CardItem, Row, Col } from 'native-base'
import Todo from './comp/Todo';
import ListItemFirebase from './comp/ListItemFirebase';


const CustomContent = (props) => {
  return (
    <Container>
      <Header style={{ backgroundColor: 'brown', height: 90 }}>
      </Header>
      <Content>
       <DrawerItems {...props}/>
      </Content>
    </Container>
  )
}
const styles = StyleSheet.create({
 
  button: {    
    flexDirection:'row',
    width: '100%',
    alignItems: 'center',
    height:'100%',
    
  },

  buttonText: {
    padding: 20,
    color: 'black'
  }
});
const MyDrawerNavigator = createDrawerNavigator({
  Home: { screen: Home },
  Greed : {screen: Greed},
  ColGrid : {screen:ColGrid},
  Todo : {screen:Todo},
  List : {screen:ListItemFirebase}


}, {
    initialRouteName:'Home',
    drawerPosition: 'left',
    contentComponent: CustomContent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


const AppContainer = createAppContainer(MyDrawerNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}