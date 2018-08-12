import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import RowComponent from './RowComponent';

export default class ListComponent extends Component {
  render() {
    return (
      <View style={styles.view}>
        {this.props.lista.map(
          item =>
            <RowComponent
              key={item.id}
              item={item}
              changeDone={this.props.changeDone}
            />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row'
  },
});
