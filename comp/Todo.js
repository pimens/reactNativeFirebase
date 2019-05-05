import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content, Icon, Right, Left } from 'native-base';
import Hed from './Hed';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Hed navigation={this.props.navigation} />
                <Content style={{ backgroundColor: '#dfe4ea' }}>
                    <View style={{
                        alignItems: 'center', backgroundColor: 'blue', flexDirection: 'row',
                        justifyContent: 'space-between', marginTop: 2, marginLeft: 6, marginRight: 6

                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="md-menu" />
                            <View>
                                <Text>
                                    Nama
                            </Text>
                                <Text>
                                    isi tesh
                            </Text>
                            </View>
                        </View>

                        <View>
                            <Text>
                                tgg tesh
                            </Text>
                            <Text>
                                jmlh tesh
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: '#f1f2f6', flexDirection: 'row',
                        marginTop: 2, marginLeft: 6, marginRight: 6, borderRadius: 5,
                        borderBottomColor: 'black', borderBottomWidth: 5

                    }}>
                        <Left style={{ backgroundColor:'red', flexDirection: 'row', margin: 5 }}>
                            <Image
                                style={{ height: 65, width: 65, borderRadius: 50 }}
                                source={require('./assets/images/3x4.jpg')}
                            />
                            <Left style={{ marginLeft: 15 }}>
                                <Text>
                                    Nama
                                </Text>
                                <Text>
                                    isi tesh
                                </Text>
                            </Left>
                        </Left>
                        <Right style={{ backgroundColor:'red' }}>
                            <Text>
                                tgg tesh
                            </Text>
                            <Text>
                                jmlh tesh
                            </Text>
                        </Right>
                    </View>



                </Content>
            </Container>
        );
    }
}

export default Todo;
