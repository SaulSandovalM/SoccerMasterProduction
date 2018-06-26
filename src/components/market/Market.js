/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {Container, Content, Button, StyleProvider, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import SideMenu from 'react-native-side-menu';
import Header from '../comun/Header';
import Footer from '../comun/Footer';
import Menu from '../comun/Menu';

export default class Market extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
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

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={styles.container}>

          <SideMenu menu={<Menu/>} isOpen={this.state.isOpen} onChange={(isOpen) => this.updateMenu(isOpen)}>

          <Header toggle={this.toggle.bind(this)}/>

          <Content style={styles.container}>

            <View style={styles.fondo}>
              <Text style={styles.jordana}>EQUIPOS</Text>
            </View>

            <View style={{marginTop: 10}}>
              <TouchableHighlight onPress={() => this.props.navigation.push('MarketPersonal')}>
                <View style={styles.back}>
                    <Text style={styles.num}>1</Text>
                    <Text style={styles.space}> - </Text>
                    <Image style={styles.img}
                           source={{uri: 'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
                    <Text style={styles.team}>PACHUCA</Text>
                    <Text style={{ color: 'white', fontSize: 15, marginTop: -10}}>$ 100,000.00 MXN</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.props.navigation.push('MarketPersonal')}>
                <View style={styles.back}>
                    <Text style={styles.num}>2</Text>
                    <Text style={styles.space}> - </Text>
                    <Image style={styles.img}
                           source={{uri: 'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
                    <Text style={styles.team}>CRUZ AZUL</Text>
                    <Text style={{ color: 'white', fontSize: 15, marginTop: -10}}>$ 100,000.00</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.props.navigation.push('MarketPersonal')}>
                <View style={styles.back}>
                    <Text style={styles.num}>3</Text>
                    <Text style={styles.space}> - </Text>
                    <Image style={styles.img}
                           source={{uri: 'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
                    <Text style={styles.team}>ATLAS</Text>
                    <Text style={{ color: 'white', fontSize: 15, marginTop: -10}}>$ 100,000.00</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.props.navigation.push('MarketPersonal')}>
                <View style={styles.back}>
                    <Text style={styles.num}>4</Text>
                    <Text style={styles.space}> - </Text>
                    <Image style={styles.img}
                           source={{uri: 'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
                    <Text style={styles.team}>PUEBLA</Text>
                    <Text style={{ color: 'white', fontSize: 15, marginTop: -10}}>$ 100,000.00</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.props.navigation.push('MarketPersonal')}>
                <View style={styles.back}>
                    <Text style={styles.num}>5</Text>
                    <Text style={styles.space}> - </Text>
                    <Image style={styles.img}
                           source={{uri: 'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
                    <Text style={styles.team}>AMERICA</Text>
                    <Text style={{ color: 'white', fontSize: 15, marginTop: -10}}>$ 100,000.00</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.props.navigation.push('MarketPersonal')}>
                <View style={styles.back}>
                    <Text style={styles.num}>6</Text>
                    <Text style={styles.space}> - </Text>
                    <Image style={styles.img}
                           source={{uri: 'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
                    <Text style={styles.team}>CHIVAS</Text>
                    <Text style={{ color: 'white', fontSize: 15, marginTop: -10}}>$ 100,000.00</Text>
                </View>
              </TouchableHighlight>

            </View>

          </Content>

          <Footer/>

          </SideMenu>

          </Container>
        </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    header: {
        marginTop: 24
    },
    icon: {
        color: 'white',
        fontSize: 20
    },
    fecha: {
        color: 'grey',
        alignSelf: 'center',
        fontSize: 15,
        marginTop: 15
    },
    back: {
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    num: {
        color: 'white',
        fontSize: 20,
        marginTop: -10,
        marginLeft: 10,
        marginRight: 5
    },
    space: {
        color: 'white',
        fontSize: 20,
        marginTop: -10,
        marginLeft: 5,
        marginRight: 10
    },
    img: {
      width: 40,
      height: 40,
      marginTop: -10,
      marginRight: 5
    },
    team: {
      color: 'white',
      fontSize: 15,
      marginTop: -10,
    },
    jordana: {
      color: 'grey',
      alignSelf: 'center',
      fontSize: 20,
    },
    fondo: {
      backgroundColor: 'black'
    },
});
