/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';

export default class TeamLibertadores extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.logo} source={require('../../assets/imgs/Soccer.png')}/>
        <Text style={styles.text1}>ELIGE TU EQUIPO</Text>
        <Text style={styles.text2}>TOCA PARA EFECTUAR SELECCIÓN</Text>

        <ScrollView>
          <View style={styles.view}>
            <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'http://www.caratulasylogos.com/sites/default/files/arminia_bielefeld.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://www.ligafutbol.net/wp-content/2009/04/escudo-madrid.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://ugc.kn3.net/i/origin/http://lh4.ggpht.com/_gHhBxs3JECA/TO7EInnjZhI/AAAAAAAAALc/dhysgzqUE_I/Arsenal.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://2.bp.blogspot.com/-DKUYPdrFp-A/V4083cnMsPI/AAAAAAAAFxA/2TLsXUyui4Iu29RaOafaAaR_4_-iQQ71ACLcB/s1600/BocaJuniors.pngg'}}/>
            </TouchableHighlight>
          </View>

          <View style={styles.margin}/>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  text1: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
  text2: {
    color: 'grey',
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 10,
    height: 30
  },
  view: {
    flexDirection: 'row'
  },
  touch: {
    width: '23%',
    height: 160,
    margin: '1%'
  },
  img: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey'
  },
  margin: {
    marginTop: 120
  },
  logo: {
    width: 120,
    height: 40,
    alignSelf: 'center'
  }
});
