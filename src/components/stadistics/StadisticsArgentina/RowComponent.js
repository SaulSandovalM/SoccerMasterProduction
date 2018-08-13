import React, {Component} from 'react';
import {TouchableHighlight, StyleSheet, Text} from 'react-native';

export default class RowComponent extends Component {
  render() {
    return (
      <TouchableHighlight onPress={() => this.props.navigation.push('PartidosAmerica')} style={styles.touch}>
        <Text style={styles.text}>{this.props.item.nombre}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touch: {
    width: '23%',
    height: 160,
    margin: '1%'
  },
  text: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    color: 'white'
  },
});
