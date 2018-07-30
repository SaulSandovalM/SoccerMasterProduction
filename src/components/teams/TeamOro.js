/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';

export default class TeamOro extends Component {
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
              <Image style={styles.img} source={{uri: 'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/3678.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://i.pinimg.com/originals/02/a5/8b/02a58bd2d8fbf380e1a9fe9d901e5a7d.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Escudo_del_Cruz_Azul_AC.svg/1024px-Escudo_del_Cruz_Azul_AC.svg.png'}}/>
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
