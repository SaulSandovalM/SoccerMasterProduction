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
            <TouchableHighlight onPress={() => this.props.navigation.push('PartidosOro')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Logo_de_la_Federaci%C3%B3n_de_F%C3%BAtbol_de_Chile.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('PartidosOro')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://i.pinimg.com/originals/97/2d/bf/972dbff4aca945be528fc22fae7ccd1d.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('PartidosOro')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://i.pinimg.com/originals/7c/0d/fd/7c0dfd384a11734ff1bc862f139c7292.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('PartidosOro')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://4.bp.blogspot.com/-LGLSdcViu5Q/WVvDAEW-zkI/AAAAAAABLc4/SVYr8Th0Xcwx7s8Y2OBoWfQrVTJvPALXQCLcBGAs/s1600/Hebei%2BChina%2BFortune%2BFC.png'}}/>
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
    backgroundColor: 'black',
    flex: 1
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
