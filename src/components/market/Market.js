/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, Dimensions} from 'react-native';
import {StyleProvider, Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import SideMenu from 'react-native-side-menu';
import Header from '../comun/Header';
import Menu from '../comun/Menu';

const {width, height} = Dimensions.get('window');

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

          <SideMenu menu={
              <View style={styles.menu}>

                  <View>
                      <Text style={styles.section}>MERCADO</Text>
                  </View>

                  <View>
                      <TouchableHighlight>
                          <Button style={styles.Button2} onPress={() => this.props.navigation.push('Jornadas')}>
                              <Icon name="soccer-ball-o" style={styles.icon}/>
                              <Text style={styles.text}>JORNADA</Text>
                              <Icon name="chevron-right" style={styles.icon}/>
                          </Button>
                      </TouchableHighlight>
                  </View>

                  <View>
                      <Text style={styles.section}>ESTADISTICAS</Text>
                  </View>

                  <View>
                      <TouchableHighlight>
                          <Button style={styles.Button1} onPress={() => this.props.navigation.push('Stadistics')}>
                              <Icon name="th-list" style={styles.icon2}/>
                              <Text style={styles.text2}>ESTADISTICAS</Text>
                              <Icon name="chevron-right" style={styles.icon2}/>
                          </Button>
                      </TouchableHighlight>
                  </View>

                  <View>
                      <TouchableHighlight>
                          <Button style={styles.Button1}>
                              <Icon name="th-list" style={styles.icon2}/>
                              <Text style={styles.text2}>TABLA DE POSICIONES</Text>
                              <Icon name="chevron-right" style={styles.icon2}/>
                          </Button>
                      </TouchableHighlight>
                  </View>

                  <View>
                      <TouchableHighlight>
                          <Button style={styles.Button1}>
                              <Icon name="bar-chart" style={styles.icon2}/>
                              <Text style={styles.text2}>TABLA DE GOLEO</Text>
                              <Icon name="chevron-right" style={styles.icon2}/>
                          </Button>
                      </TouchableHighlight>
                  </View>

                  <View>
                      <Text style={styles.section}>ENFRENTAMIENTOS</Text>
                  </View>

                  <View>
                      <TouchableHighlight>
                          <Button style={styles.Button1} onPress={() => this.props.navigation.push('Partidos')}>
                              <Icon name="bar-chart" style={styles.icon2}/>
                              <Text style={styles.text2}>PARTIDOS</Text>
                              <Icon name="chevron-right" style={styles.icon}/>
                          </Button>
                      </TouchableHighlight>
                  </View>

              </View>
          } isOpen={this.state.isOpen} onChange={(isOpen) => this.updateMenu(isOpen)}>

          <Header toggle={this.toggle.bind(this)}/>

          <Content style={styles.container}>

            <View style={styles.container}>
              <Text style={styles.jordana}>EQUIPOS</Text>
            </View>

            <View style={styles.view}>

              <List style={styles.container}>

                <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonal')}>
                  <Left>
                    <Thumbnail square source={{ uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png' }} />
                  </Left>
                  <Body>
                    <Text style={styles.team}>PACHUCA</Text>
                    <Text note style={styles.color}>DESCRIPCION</Text>
                  </Body>
                  <Right>
                    <Text note style={styles.color}>$100,000</Text>
                  </Right>
                </ListItem>

                <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonal')}>
                  <Left>
                    <Thumbnail square source={{ uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10262/10262.png' }} />
                  </Left>
                  <Body>
                    <Text style={styles.team}>CHIVAS</Text>
                    <Text note style={styles.color}>DESCRIPCION</Text>
                  </Body>
                  <Right>
                    <Text note style={styles.color}>$100,000</Text>
                  </Right>
                </ListItem>

                <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonal')}>
                  <Left>
                    <Thumbnail square source={{ uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png' }} />
                  </Left>
                  <Body>
                    <Text style={styles.team}>BARCELONA</Text>
                    <Text note style={styles.color}>DESCRIPCION</Text>
                  </Body>
                  <Right>
                    <Text note style={styles.color}>$100,000</Text>
                  </Right>
                </ListItem>

                <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonal')}>
                  <Left>
                    <Thumbnail square source={{ uri: 'https://i.pinimg.com/originals/c1/5e/6d/c15e6d719debe4b3ed589c06045655dc.png' }} />
                  </Left>
                  <Body>
                    <Text style={styles.team}>REAL MADRID</Text>
                    <Text notestyle={styles.color}>DESCRIPCION</Text>
                  </Body>
                  <Right>
                    <Text note style={styles.color}>$100,000</Text>
                  </Right>
                </ListItem>

                <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonal')}>
                  <Left>
                    <Thumbnail square source={{ uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4246.png' }} />
                  </Left>
                  <Body>
                    <Text style={styles.team}>PUEBLA</Text>
                    <Text note style={styles.color}>DESCRIPCION</Text>
                  </Body>
                  <Right>
                    <Text note style={styles.color}>$100,000</Text>
                  </Right>
                </ListItem>

                <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonal')}>
                  <Left>
                    <Thumbnail square source={{uri: 'http://4.bp.blogspot.com/_aY6uWfdpKTw/ShQmQ-kyVsI/AAAAAAAABc4/07hQ17vHBUI/s400/%C3%81guilas+del+Am%C3%A9rica+%7C+Logo.png'}} />
                  </Left>
                  <Body>
                    <Text style={styles.team}>AMARICA</Text>
                    <Text note style={styles.color}>DESCRIPCION</Text>
                  </Body>
                  <Right>
                    <Text note style={styles.color}>$100,000</Text>
                  </Right>
                </ListItem>

              </List>

            </View>

          </Content>

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
    team: {
        color: 'white'
    },
    jordana: {
      color: 'grey',
      alignSelf: 'center',
      fontSize: 20,
    },
    view: {
      marginTop: 10
    },
    color: {
      color: 'grey'
    },
    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor:"#000"
    },
    section: {
        color: 'white',
        fontSize: 20,
        marginTop: 15,
        marginLeft: 15
    },
    Button1: {
        borderRadius: 35,
        width: 240,
        marginTop: 20,
        backgroundColor: 'white'
    },
    icon2: {
        fontSize: 15,
        color: 'black'
    },
    text: {
        color: 'white',
        alignSelf: 'center'
    },
    text2: {
        color: 'black',
        alignSelf: 'center'
    },
    Button2: {
        borderRadius: 35,
        width: 240,
        marginTop: 20,
        backgroundColor: 'green'
    },
    Button3: {
        borderRadius: 35,
        width: 240,
        marginTop: 20,
        backgroundColor: 'red'
    }
});
