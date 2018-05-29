/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Footer, FooterTab, Button} from 'native-base';

export default class Stadistics extends Component{
  static navigationOptions = {
    title: "Estadisticas"
  };

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', backgroundColor: 'grey'}}>
          <View style={{width: 35}}>
            <Text style={{fontSize: 15}}>NO</Text>
          </View>
          <View style={{width: 70}}>
            <Text style={{fontSize: 15}}>Equipo</Text>
          </View>
          <View style={{width: 30}}>
            <Text style={{fontSize: 15}}>PJ</Text>
          </View>
          <View style={{width: 30}}>
            <Text style={{fontSize: 15}}>PG</Text>
          </View>
          <View style={{width: 30}}>
            <Text style={{fontSize: 15}}>PE</Text>
          </View>
          <View style={{width: 30}}>
            <Text style={{fontSize: 15}}>PP</Text>
          </View>
          <View style={{width: 30}}>
            <Text style={{fontSize: 15}}>GF</Text>
          </View>
          <View style={{width: 30}}>
            <Text style={{fontSize: 15}}>GC</Text>
          </View>
          <View style={{width: 30}}>
            <Text style={{fontSize: 15}}>DG</Text>
          </View>
          <View style={{width: 30}}>
            <Text style={{fontSize: 15}}>PTS</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{width: 35}}>
            <Text>1</Text>
          </View>
          <View style={{width: 70}}>
            <Text>Pachuca</Text>
          </View>
          <View style={{width: 30}}>
            <Text>4</Text>
          </View>
          <View style={{width: 30}}>
            <Text>4</Text>
          </View>
          <View style={{width: 30}}>
            <Text>0</Text>
          </View>
          <View style={{width: 30}}>
            <Text>0</Text>
          </View>
          <View style={{width: 30}}>
            <Text>8</Text>
          </View>
          <View style={{width: 30}}>
            <Text>2</Text>
          </View>
          <View style={{width: 30}}>
            <Text>6</Text>
          </View>
          <View style={{width: 30}}>
            <Text>12</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{width: 35}}>
            <Text>1</Text>
          </View>
          <View style={{width: 70}}>
            <Text>Pachuca</Text>
          </View>
          <View style={{width: 30}}>
            <Text>4</Text>
          </View>
          <View style={{width: 30}}>
            <Text>4</Text>
          </View>
          <View style={{width: 30}}>
            <Text>0</Text>
          </View>
          <View style={{width: 30}}>
            <Text>0</Text>
          </View>
          <View style={{width: 30}}>
            <Text>8</Text>
          </View>
          <View style={{width: 30}}>
            <Text>2</Text>
          </View>
          <View style={{width: 30}}>
            <Text>6</Text>
          </View>
          <View style={{width: 30}}>
            <Text>12</Text>
          </View>
        </View>

        <Footer>
          <FooterTab>
            <Button onPress={() => this.props.navigation.push('Home')}>
              <Text>Home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.push('MarketTeam')}>
              <Text>Mercado</Text>
            </Button>
            <Button onPress={() => this.props.navigation.push('Stadistics')}>
              <Text>Estadisticas</Text>
            </Button>
          </FooterTab>
        </Footer>

      </View>
    );
  }
}

const styles = StyleSheet.create({

});
