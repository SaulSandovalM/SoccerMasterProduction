import React from 'react';
import {View, Text, StyleSheet, Image, Alert, TouchableHighlight} from 'react-native';
import {Container, Input, Label, Button} from 'native-base';
import {NavigationActions} from 'react-navigation';
import fondo from '../../assets/imgs/pasto.jpg';
import firebase from '../firebase/firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Menu extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
      };
    }
    onLoginPress = () => {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            this.props.navigation.push('Home')
        }, (error) => {
            Alert.alert('Ingresa un usuario y contraseña validos');
        });
    };

    render() {
      return (
        <Container style={styles.container}>
          <View style={styles.welcomeWrapper}>
            <Icon name="soccer-ball-o" style={styles.icon}/>
            <Text style={styles.welcomeText}>Bienvenido a {'\n'}Soccer Master</Text>
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.push('PartidosRey')}>
              <Text style={styles.buttonText}>Continua como Jugador</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonContainerFan}>
              <Text style={styles.buttonTextFan}>Continua como Fan</Text>
            </TouchableHighlight>
            <View style={styles.options}>
              <Text style={styles.optionsText}>Nota</Text>
            </View>
            <View style={styles.termsContainer}>
              <Text style={styles.termsText}>Al hacer click en los botones acepta nuestros</Text>
              <TouchableHighlight style={styles.link}>
                <Text style={styles.termsText}> Terminos de Servicio </Text>
              </TouchableHighlight>
              <Text style={styles.termsText}>y</Text>
              <TouchableHighlight style={styles.link}>
                <Text style={styles.termsText}> Politicas de Privacidad</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'black'
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20
  },
  welcomeText: {
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
    marginBottom: 40
  },
  buttonContainer: {
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white'
  },
  icon: {
    fontSize: 50,
    color: 'white',
    marginTop: 40,
    marginBottom: 40
  },
  buttonText: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    color: 'black'
  },
  buttonContainerFan: {
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 15,
  },
  buttonTextFan: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    color: 'white'
  },
  options: {
    marginTop: 15,
  },
  optionsText: {
    color: 'white',
    fontSize: 16
  },
  termsText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600'
  },
  termsContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
  },
  link: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  }
});
