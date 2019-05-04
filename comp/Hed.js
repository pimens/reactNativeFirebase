import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header,Icon,Right,Left } from 'native-base';

class Hed extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: 'Black', height: 50, borderBottomColor: 'red' }}>
                <Left style={{ flexDirection: 'row' }}>
                    <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ backgroundColor: 'blue', marginRight: 15 }} />
                    <Icon name="md-menu" style={{ marginRight: 15 }} />
                    <Text style={{ backgroundColor: 'blue' }}> Home basee </Text>
                </Left>
                <Right style={{ flexDirection: 'row' }}>
                    <Icon name="add" style={{ backgroundColor: 'blue', marginRight: 50 }} />
                </Right>
            </Header>
        );
    }
}

export default Hed;
