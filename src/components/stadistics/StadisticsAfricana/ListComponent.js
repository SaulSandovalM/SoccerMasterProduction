import React, { Component } from 'react';
import {View} from 'react-native';
import RowComponent from './RowComponent';

export default class ListComponent extends Component {
  render() {
    return (
      <View>
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
