import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { db } from './db/ConfigDb'


class ListItemFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            key: [],
            posts: []


        };
    }
    componentDidMount() {
        db.ref('/items').on('value', snapshot => {
            let keys = Object.keys(snapshot.val());
            let itemData = Object.values(snapshot.val());
            console.warn(itemData)
            this.setState({
                items: itemData,
                key: keys
            });
        });
    }
    showPost = () => {      
        for (let i = 0; i < this.state.posts.length; i++) {
            for (let j = 0; j < this.state.posts[i].length; j++) {
                // console.warn(this.state.posts[i][j])
                return (
                    <Text>{this.state.posts[i][j]}</Text>
                )
            }
        }

    }
    posti(id) {
        let keys = []
        const idd = this.state.key[id] //ambil id user    
        db.ref('/items/' + idd + '/postingan').on('value', snapshot => { //ambil semua postingan dari satu id
            keys = Object.keys(snapshot.val()); //ambill semua id postingan untuk dicari di tabel postingan
        });
        //mencari semua postingan     
        for (let i = 0; i < keys.length; i++) {
            console.warn(keys[i])
            db.ref('/posts/' + keys[i]).on('value', snapshot => {
                let postItem = Object.values(snapshot.val());
                console.warn(postItem)
                var tmp = this.state.posts.slice();
                tmp.push(postItem)
                this.setState({
                    posts: tmp
                })
            })
        }
    }
    gg() {
        console.warn(this.state.posts)
        // var postData = {
        //     author: "username",
        //     uid: "uid",
        //     body: "body",
        //     title: "title",
        //     starCount: "0",
        //     authorPic: "picture"
        // };

        // // Get a key for a new Post.
        // var newPostKey = db.ref().child('posts').push().key;
        // // Write the new post's data simultaneously in the posts list and the user's post list.
        // var updates = {};
        // updates['/posts/' + newPostKey] = postData;
        // updates['/items/-Le9RvybSdRj-54jbYsy/postingan' + '/' + newPostKey] = postData;
        // db.ref().update(updates);

    }
    render() {
        return (
            <View>                
                {

                    this.state.items.map((m, i = 0) => {
                        return (<View key={i}>
                            <Text>{i + 1}</Text>
                            <Text>{this.state.key[i]}</Text>
                            <Text>{m.name}</Text>
                            <Text>{m.addres}</Text>
                            <Button
                                title={this.state.key[i]}
                                onPress={() => this.posti(i)}
                            />
                        </View>

                        )
                    })

                }               
                <Button
                    title="hapus"
                    onPress={this.gg.bind(this)}
                />                
            </View>
        );
    }
}

export default ListItemFirebase;