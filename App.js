import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";

// export const data = [
// {
//   id: 1,
//   category: 'SUPERHEROES ACTION',
//   title: 'Black Panther',
//   image: require('https://i.imgur.com/GATJ0sE.jpeg'),
// },
// {
//   id: 2,
//   category: 'SUPERHERO ACTION',
//   title: 'Captain America: Winter Soldier',
//   image: require('https://i.imgur.com/KEfW1tG.jpeg'),
// },
// {
//   id: 3,
//   category: 'SCIENCE FICTION',
//   title: 'Blade Runner Future 2049.',
//   image: { uri: 'https://i.imgur.com/L68FtMA.jpg' },
//   rating: 4.0,
// },
// {
//   id: 4,
//   category: 'SUPERHERO ACTION',
//   title: 'Captain America Civil War.',
//   image: { uri: 'https://i.imgur.com/tAui2H7.jpg' },
//   rating: 3.5,
// },
// {
//   id: 5,
//   category: 'ROMANCE',
//   title: 'Beauty and the Beast.',
//   image: { uri: 'https://i.imgur.com/J5pgFyr.jpg' },
//   rating: 2.5,
// },
// {
//   id: 6,
//   category: 'DRAMA',
//   title: 'Shawshank Redemption.',
//   image: { uri: 'https://i.imgur.com/7YGXDbM.jpg' },
//   rating: 3.0,
// },
// ];


class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  list = [
    {
      title: 'Hello',
      sub_title: 'Hi',
      image: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png'
    },
    {
      title: 'Hello',
      sub_title: 'Hi',
      image: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png'
    },{
      title: 'Hello',
      sub_title: 'Hi',
      image: 'http://sslweb.solidstatelogic.com.s3.amazonaws.com/user-icon.png'
    },{
      title: 'Hello',
      sub_title: 'Hi',
      image: 'https://i.imgur.com/tAui2H7.jpg'
    },{
      title: 'Hello',
      sub_title: 'Hi',
      image: { uri: 'https://i.imgur.com/tAui2H7.jpg' },
    },{
      title: 'Hello',
      sub_title: 'Hi',
      image: { uri: 'https://i.imgur.com/J5pgFyr.jpg' },
    },{
      title: 'Hello',
      sub_title: 'Hi',
      image: { uri: 'https://i.imgur.com/7YGXDbM.jpg' },
    }
  ];

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.list}
          horizontal={true}
          renderItem={({ item }) => (
            <ListItem
              category={`${item.category}`}
              title={`${item.title}`}
              image={{ uri: item.image }}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
        />
      </List>
    );
  }
}

export default FlatListDemo;