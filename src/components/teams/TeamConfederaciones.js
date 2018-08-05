import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';

export default class TeamConfederaciones extends Component {
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
            <TouchableHighlight onPress={() => this.props.navigation.push('PartidosConfederaciones')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://i.pinimg.com/originals/97/2d/bf/972dbff4aca945be528fc22fae7ccd1d.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('PartidosConfederaciones')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://www.deportetotal.mx/wp-content/uploads/2017/04/puebla.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('PartidosConfederaciones')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Escudo_Millos_70_a%C3%B1os_2.svg/1200px-Escudo_Millos_70_a%C3%B1os_2.svg.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('PartidosConfederaciones')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/3294/3294.png'}}/>
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
