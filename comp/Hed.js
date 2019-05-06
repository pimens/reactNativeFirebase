import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Icon, Right, Left } from 'native-base';

class Hed extends Component {
    render() {
        return (
            <Header style={{ justifyContent:"space-between",backgroundColor: '#2ecc71', height: 50, borderBottomWidth: 2, borderBottomColor: 'black' }}>
                <Left style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                    <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ marginLeft: 3 }} />
                    <Text style={{ marginLeft: 10, fontSize: 20 }} >App Pencatat</Text>
                </Left>
                <View style={{ width: 25, flexDirection: 'row'}}>
                    <Right>
                        <Icon name="person" style={{ marginRight: 5 }} />
                    </Right>
                </View>

            </Header>
        );
    }
}

export default Hed;
