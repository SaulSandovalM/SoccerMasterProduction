import React, {Component} from 'react';
import {TouchableHighlight, Animated, Alert, View, StyleSheet, ScrollView, Text} from 'react-native';

const ACTION_TIMER = 400;

class RowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      pressAction: new Animated.Value(0),
      item: null
    };
  }

  componentWillMount() {
    this._value = 0;
    this.state.pressAction.addListener((v) => this._value = v.value);
  }

  pressIn = () => {
    Animated.timing(this.state.pressAction, {
      duration: ACTION_TIMER,
      toValue: 1
    }).start(this.animationActionComplete);
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this.props.navigation.push('PartidosRey')} style={styles.touch}>
        <Text style={styles.text}>{this.props.item.nombre}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
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

export default RowComponent;
