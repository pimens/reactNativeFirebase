import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { db } from './db/ConfigDb'



class ListItemFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            key: []
        };
    }
    componentDidMount() {
        db.ref('/items').on('value', snapshot => {
            let keys = Object.keys(snapshot.val());
            let itemData = Object.values(snapshot.val());
            // console.warn(snapshot.val())
            this.setState({
                items: itemData,
                key: keys
            });
        });
    }
    gg() {
        console.warn(this.state.key[0])

    }
    render() {
        return (
            <View>
                {

                    this.state.items.map((m,i) => {
                        return (<View key={i}>
                        <Text>{i+1}</Text>
                        <Text>{this.state.key[i]}</Text>
                            <Text>{m.name}</Text>

                            <Text>{i=i+1}{m.addres}</Text>
                        </View>
                         
                        )
                    })

                }
                <Text>hahahah</Text>
                <Button
                    title="hapus"
                    onPress={this.gg.bind(this)}
                />
            </View>
        );
    }
}

export default ListItemFirebase;
