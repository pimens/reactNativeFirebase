import React, { Component } from 'react';
import {

  Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View

} from 'react-native';
import { Icon } from 'native-base';
import Hed from './Hed';

class Greet extends Component {
  static navigationOptions = {
    drawerLabel: 'Greet',
    drawerIcon: ({ tintColor }) => (
      <Icon name="settings" />
    ),
  };
  constructor(props) {
    super(props)
  }
  _onPressButton() {

    Alert.alert('You tapped the button!')

  }
  _onLongPressButton() {

    Alert.alert('You long-pressed the button!')

  }
  render() {
    return (
      <View style={styles.gr}>
        <Hed navigation = {this.props.navigation}/>
        <TouchableHighlight onPress={() => this.props.navigation.openDrawer()} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>baaack</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback
          onPress={this._onPressButton}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  gr: {
    flex: 1,
    backgroundColor: 'grey',
    margin: 4,
    borderWidth: 4,
    borderColor: 'red',
    borderRadius: 6,
    height: 'auto',
    justifyContent: 'space-between',


  },
  button: {

    marginBottom: 10,

    width: 'auto',

    alignItems: 'center',

    backgroundColor: '#2196F3'

  },

  buttonText: {

    padding: 20,

    color: 'white'

  }
});
export default Greet;
