import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Container, Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListComponent from './ListComponent';
import * as firebase from 'firebase';

export default class StadisticsArgentina extends Component {
  constructor(props){
    super(props)
    this.state = {
      nuevo: '',
      lista: []
    }
  }

  static navigationOptions = {
      header: null
  };

  componentDidMount() {
    const itemsRef = firebase.database().ref('CopaArgentina/Estadisticas/Equipos');
    this.listenForItems(itemsRef);
  }

  listenForItems = (itemsRef) => {
    itemsRef.on('value', (snap) => {
      var lista = [];
      snap.forEach((child) => {
        lista.push({
          nombre: child.val().nombre,
          pj: child.val().pj,
          pp: child.val().pp,
          pts: child.val().pts,
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
      <Container style={styles.container}>
        <View style={styles.menuContainer}>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.push('MenuArgentina')}>
            <Icon name="bars" color="white" size={25} />
          </TouchableWithoutFeedback>
          <Image style={styles.logo} source={require('../../../assets/imgs/Soccer.png')}/>
          <TouchableWithoutFeedback>
            <Icon name="search" color="black" size={25} />
          </TouchableWithoutFeedback>
        </View>
        <Content style={styles.container}>
          <View style={styles.margin}>

            <ListComponent
                lista={this.state.lista}
                changeDone={this.changeDone}
            />

          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  margin: {
    marginTop: 30
  },
  menuContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 15
  },
  logo: {
    width: 120,
    height: 40
  },
});
