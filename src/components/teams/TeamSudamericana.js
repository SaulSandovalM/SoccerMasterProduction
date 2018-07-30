/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';

export default class TeamSudamericana extends Component {
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
              <Image style={styles.img} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/3981.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://es.onefootball.com/wp-content/uploads/sites/12/2017/06/Necaxa.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4248.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://vignette.wikia.nocookie.net/futbol/images/3/3a/FC_Barcelona_Escudo.png/revision/latest?cb=20150709184757'}}/>
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
