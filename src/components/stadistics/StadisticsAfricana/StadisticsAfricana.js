import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Container, Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListComponent from './ListComponent';
import * as firebase from 'firebase';

export default class StadisticsAfricana extends Component {
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
    const itemsRef = firebase.database().ref('CopaAfricana/Estadisticas/Equipos');
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
          <TouchableWithoutFeedback onPress={() => this.props.navigation.push('MenuAfricana')}>
            <Icon name="bars" color="white" size={25} />
          </TouchableWithoutFeedback>
          <Image style={styles.logo} source={require('../../../assets/imgs/Soccer.png')}/>
          <TouchableWithoutFeedback>
            <Icon name="search" color="black" size={25} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.view0}>
          <Text style={styles.text}> - </Text>
          <Text style={styles.text}>PJ</Text>
          <Text style={styles.text}>PG</Text>
          <Text style={styles.text}>PP</Text>
          <Text style={styles.text}>PTS</Text>
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
    alignItemsñ: 'center',
    justifyContent:'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 15
  },
  logo: {
    width: 120,
    height: 40
  },
  view0: {
    backgroundColor: 'grey'
  },
  text: {
    fontSize: 18,
    color: 'black',
    margin: 5
  }
});
