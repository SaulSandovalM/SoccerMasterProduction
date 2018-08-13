import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class RowComponent extends Component {
  render() {
    return (
      <View style={styles.view0}>
        <Text style={styles.liner}> - </Text>
        <Image style={styles.img}
         source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
        <Text style={styles.team}>{this.props.item.nombre}</Text>
        <Text style={styles.stadistic}>{this.props.item.pj}</Text>
        <Text style={styles.stadistic}>{this.props.item.pp}</Text>
        <Text style={styles .stadistic}>{this.props.item.pts}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view0: {
    alignItems: 'center',
    backgroundColor: '#e31114',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -20
  },
  num: {
    color: 'white',
    fontSize: 20,
    marginTop: -10,
    marginLeft: 10,
    marginRight: 5
  },
  liner: {
    color: 'white',
    fontSize: 20,
    marginTop: -10,
    marginLeft: 5,
    marginRight: 10
  },
  img: {
    width: 40,
    height: 40,
    marginTop: -10,
    marginRight: 5
  },
  team: {
    color: 'white',
    fontSize: 20,
    marginTop: -10,
    width: 150
  },
  stadistic: {
    color: 'white',
    fontSize: 20,
    marginTop: -10,
    marginRight: 10
  },
});
