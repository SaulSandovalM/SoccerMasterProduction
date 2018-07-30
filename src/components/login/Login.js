import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, Alert} from 'react-native';
import {Form, Item, Input, Label, Button} from 'native-base';
import {NavigationActions} from 'react-navigation';
import fondo from '../../assets/imgs/pasto.jpg';
import icon from '../../assets/imgs/icon.png';
import firebase from '../firebase/firebase';

export default class Login extends React.Component {
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
        <ImageBackground source={fondo} style={styles.viewPager}>

          <View style={styles.container}>
            <View style={styles.containerStyle}>
              <Image source={icon} style={styles.imageStyle}/>

              <Form>
                <Item floatingLabel>
                  <Label style={styles.color}>Correo electrónico</Label>
                  <Input style={styles.color} onChangeText={(text) => {this.setState({email: text})}}
                    keyboardType="email-address"
                    autoCapitalize="none"/>
                </Item>
                <Item floatingLabel last>
                  <Label style={styles.color}>Contraseña</Label>
                  <Input style={styles.color} onChangeText={(text) => {this.setState({password: text})}}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}/>
                </Item>
              </Form>

              <View>
                <Button rounded style={styles.buttonStyle} onPress={this.onLoginPress}>
                  <Text style={styles.color}>Iniciar Sesión</Text>
                </Button>
                <Button rounded bordered warning style={styles.buttonStyle2}>
                  <Text style={styles.color} onPress={() => this.props.navigation.push('Registro')}>Regístrate</Text>
                </Button>
              </View>

            </View>
          </View>
        </ImageBackground>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  viewPager: {
    flex: 1,
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'orange',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  buttonStyle2: {
    alignSelf: 'center',
    marginTop: 20,
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
  imageStyle: {
    width: '27%',
    height: '27%',
    alignSelf: 'center',
    marginTop: 16,
  },
  color: {
    color: 'white'
  }
});
