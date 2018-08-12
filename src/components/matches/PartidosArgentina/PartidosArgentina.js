import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Content} from 'native-base';
import Header from '../../comun/Header';
import SideMenu from 'react-native-side-menu';
import Menu from '../../comun/Menu';
import ListComponent from './ListComponent';
import * as firebase from 'firebase';

export default class PartidosArgentina extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      nuevo: '',
      lista: []
    }
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateMenu(isOpen){
    this.setState({isOpen})
  }

  static navigationOptions = {
      header: null
  };

  componentDidMount() {
    const itemsRef = firebase.database().ref('CopaArgentina/Jornada1/Partidos');
    this.listenForItems(itemsRef);
  }

  listenForItems = (itemsRef) => {
    itemsRef.on('value', (snap) => {
      var lista = [];
      snap.forEach((child) => {
        lista.push({
          equipo1: child.val().equipo1,
          equipo2: child.val().equipo2,
          goles1: child.val().goles1,
          goles2: child.val().goles2,
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
        <SideMenu menu={<Menu/>} isOpen={this.state.isOpen} onChange={(isOpen) => this.updateMenu(isOpen)}>
          <Header toggle={this.toggle.bind(this)}/>
            <Content style={styles.container}>
              <View style={styles.container}>
                <Text style={styles.jordana}>JORNADA</Text>
                <Text style={styles.fecha}>FECHA</Text>
              </View>

              <View style={styles.container}>

                <ListComponent
                  lista={this.state.lista}
                  changeDone={this.changeDone}
                />

              </View>
            </Content>
          </SideMenu>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  header: {
    marginTop: 24
  },
  fecha: {
    color: 'grey',
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  jordana: {
    color: 'grey',
    alignSelf: 'center',
    fontSize: 20,
  },
});
