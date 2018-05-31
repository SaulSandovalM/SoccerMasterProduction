/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Button} from 'native-base';

export default class Stadistics extends Component{
  static navigationOptions = {
      header: null
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.view}>
            <Text style={styles.text}>NO</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text}>Equipo</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text}>PJ</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text}>PG</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text}>PE</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text}>PP</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text}>GF</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text}>GC</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text}>DG</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text}>PTS</Text>
          </View>
        </View>

        <View style={styles.viewContainer}>
          <View style={styles.view}>
            <Text>1</Text>
          </View>
          <View style={styles.view2}>
            <Text>Pachuca</Text>
          </View>
          <View style={styles.view3}>
            <Text>4</Text>
          </View>
          <View style={styles.view3}>
            <Text>4</Text>
          </View>
          <View style={styles.view3}>
            <Text>0</Text>
          </View>
          <View style={styles.view3}>
            <Text>0</Text>
          </View>
          <View style={styles.view3}>
            <Text>8</Text>
          </View>
          <View style={styles.view3}>
            <Text>2</Text>
          </View>
          <View style={styles.view3}>
            <Text>6</Text>
          </View>
          <View style={styles.view3}>
            <Text>12</Text>
          </View>
        </View>

        <View style={styles.viewContainer}>
          <View style={styles.view}>
            <Text>1</Text>
          </View>
          <View style={styles.view2}>
            <Text>Pachuca</Text>
          </View>
          <View style={styles.view3}>
            <Text>4</Text>
          </View>
          <View style={styles.view3}>
            <Text>4</Text>
          </View>
          <View style={styles.view3}>
            <Text>0</Text>
          </View>
          <View style={styles.view3}>
            <Text>0</Text>
          </View>
          <View style={styles.view3}>
            <Text>8</Text>
          </View>
          <View style={styles.view3}>
            <Text>2</Text>
          </View>
          <View style={styles.view3}>
            <Text>6</Text>
          </View>
          <View style={styles.view3}>
            <Text>12</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'grey'
  },
  view: {
    width: 35
  },
  text: {
    fontSize: 15
  },
  viewContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  view2: {
    width: 70
  },
  view3: {
    width: 30
  }
});
