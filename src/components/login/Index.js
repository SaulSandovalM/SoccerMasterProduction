import React, {Component} from 'react';
import {firebaseAuth} from '../firebase/firebase';
import {Container} from 'native-base';
import Login from './Login';
import PartidosRey from '../matches/PartidosRey';

export default class Inicio extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    });
  }

  render() {
    return (
      <Container>
        {this.state.loggedIn
          ? <Login/>
          : <PartidosRey/>}
      </Container>
    );
  }
}
