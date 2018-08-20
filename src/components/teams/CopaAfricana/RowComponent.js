import React, {Component} from 'react';
import {TouchableHighlight, StyleSheet, Text} from 'react-native';

export default class RowComponent extends Component {
  constructor() {
    super();
    this.state = {
      styleIndex: 0
    }
  }

  press() {
    if (this.state.styleIndex === 0) {
      this.setState({styleIndex: 1})
     }else {
       this.setState({styleIndex: 0})
     }
  }

  render() {
    return (
      <TouchableHighlight style={styles.touch} onPress={this.press.bind(this)}>
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
