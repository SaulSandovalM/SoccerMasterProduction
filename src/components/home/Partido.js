/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Button} from 'native-base';

export default class Partido extends Component{
  static navigationOptions = {
    header: null
};

  render() {
    return (
      <View style={{backgroundColor: 'black'}}>

        <View style={{flexDirection: 'row'}}>
          <View style={{backgroundColor: 'red', width: '50%', height: 650}}>
            <Text style={{color: 'white', fontSize: 80, marginTop: 80, alignSelf: 'center'}}>0</Text>
            <Text style={{color: 'white', fontSize: 20, marginTop: 10, alignSelf: 'center'}}>TIJUANA</Text>
          </View>
          <View style={{backgroundColor: 'blue', width: '50%', height: 650}}>
            <Text style={{color: 'white', fontSize: 80, marginTop: 80, alignSelf: 'center'}}>3</Text>
            <Text style={{color: 'white', fontSize: 20, marginTop: 10, alignSelf: 'center'}}>PACHUCA</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

});
