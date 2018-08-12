import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import ListComponent from './ListComponent';
import * as firebase from 'firebase';

export default class TeamArgentina extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      nuevo: '',
      lista: []
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('CopaArgentina/Equipos');
    this.listenForItems(itemsRef);
  }

  listenForItems = (itemsRef) => {
    itemsRef.on('value', (snap) => {
      var lista = [];
      snap.forEach((child) => {
        lista.push({
          nombre: child.val().nombre,
          id: child.key
        });
      });
      this.setState({
        lista: lista
      });
    });
  };

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.logo} source={require('../../../assets/imgs/Soccer.png')}/>
        <Text style={styles.text1}>ELIGE TU EQUIPO</Text>
        <Text style={styles.text2}>TOCA PARA EFECTUAR SELECCIÓN</Text>

        <ScrollView>
          <View style={styles.view}>
            <ListComponent
                lista={this.state.lista}
                changeDone={this.changeDone}
            />
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
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
