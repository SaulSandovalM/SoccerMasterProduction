/**
 * SoccerMaster
 * @HackSite
 */

import React from 'react';
import {StyleSheet, View, Text, Alert, ImageBackground} from 'react-native';
import {Form, Item, Input, Label, Button} from 'native-base';
import firebase from '../firebase/firebase';
import fondo from '../../assets/imgs/pasto.jpg';

export default class Registro extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        passwordConfirm: "",
      };
    }

    onSignupPress = () => {
      if (this.state.password !== this.state.passwordConfirm) {
        Alert.alert("Las contraseñas no coinciden");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            this.props.navigation.push('Login')
        }, (error) => {
            Alert.alert('Llena los campos correctamente');
        });
    }

    render() {
      return (
        <ImageBackground source={fondo} style={styles.viewPager}>
          <View style={styles.view}>

            <Text style={styles.team}>UNETE AL EQUIPO</Text>

            <View style={styles.containerStyle}>
              <Form>
                <Item floatingLabel>
                  <Label style={styles.color}>Correo electrónico</Label>
                  <Input style={styles.color} onChangeText={(text) => {this.setState({email: text})}}
                     keyboardType="email-address"
                     autoCapitalize="none"
                  />
                </Item>
                <Item floatingLabel last>
                  <Label style={styles.color}>Contraseña</Label>
                  <Input style={styles.color} onChangeText={(text) => {this.setState({password: text})}}
                     secureTextEntry={true}
                     autoCapitalize="none"
                     autoCorrect={false}/>
                </Item>

                <Item floatingLabel last>
                  <Label style={styles.color}>Confirmar Contraseña</Label>
                  <Input style={styles.color} onChangeText={(text) => {this.setState({passwordConfirm: text})}}
                     secureTextEntry={true}
                     autoCapitalize="none"
                     autoCorrect={false}/>
                </Item>
              </Form>

              <Button rounded style={styles.buttonStyle} onPress={this.onSignupPress}>
                <Text style={styles.color}>Registrarme</Text>
              </Button>
            </View>
          </View>
        </ImageBackground>
      );
    }
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'orange',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  containerStyle: {
    height: 'auto',
    width: '80%',
    backgroundColor: 'rgba(31, 32, 29, 0.6)',
    borderRadius: 35,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  color: {
    color: 'white'
  },
  viewPager: {
    flex: 1,
    marginTop: 24
  },
  team: {
    fontSize: 30,
    margin: 50,
    marginTop: -50,
    color: 'white'
  }
});
