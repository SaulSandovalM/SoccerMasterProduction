import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../comun/Header';
import SideMenu from 'react-native-side-menu';
import Menu from '../../comun/Menu';
import Soccer from '../../../assets/imgs/Soccer.png';
import ListComponent from './ListComponent';
import * as firebase from 'firebase';

export default class StadisticsOro extends Component {
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
    const itemsRef = firebase.database().ref('CopaOro/Estadisticas/Equipos');
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
        <SideMenu menu={<Menu/>} isOpen={this.state.isOpen} onChange={(isOpen) => this.updateMenu(isOpen)}>
        <Header toggle={this.toggle.bind(this)}/>
        <Content style={styles.container}>
          <View style={styles.margin}>

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
    backgroundColor: 'black'
  },
  margin: {
    marginTop: 30
  }
});
