import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {StyleProvider, Container, Content, List, ListItem, Left, Body, Right, Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import SideMenu from 'react-native-side-menu';
import Header from '../comun/Header';
import Menu from '../comun/Menu';

export default class MarketRey extends Component {
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

            <View style={styles.container}>
              <Text style={styles.jordana}>EQUIPOS</Text>
            </View>

            <View style={styles.view}>

              <List style={styles.container}>

                <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonalRey')}>
                  <Left>
                    <Thumbnail square source={{ uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png' }} />
                  </Left>
                  <Body>
                    <Text style={styles.team}>PACHUCA</Text>
                    <Text note style={styles.color}>PLANTILLA</Text>
                  </Body>
                  <Right>
                    <Text note style={styles.color}>$100,000</Text>
                  </Right>
                </ListItem>

                <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonalRey')}>
                  <Left>
                    <Thumbnail square source={{ uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10262/10262.png' }} />
                  </Left>
                  <Body>
                    <Text style={styles.team}>CHIVAS</Text>
                    <Text note style={styles.color}>PLANTILLA</Text>
                  </Body>
                  <Right>
                    <Text note style={styles.color}>$100,000</Text>
                  </Right>
                </ListItem>

                <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonalRey')}>
                  <Left>
                    <Thumbnail square source={{ uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/3.png' }} />
                  </Left>
                  <Body>
                    <Text style={styles.team}>BARCELONA</Text>
                    <Text note style={styles.color}>PLANTILLA</Text>
                  </Body>
                  <Right>
                    <Text note style={styles.color}>$100,000</Text>
                  </Right>
                </ListItem>

                <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonalRey')}>
                  <Left>
                    <Thumbnail square source={{ uri: 'https://i.pinimg.com/originals/c1/5e/6d/c15e6d719debe4b3ed589c06045655dc.png' }} />
                  </Left>
                  <Body>
                    <Text style={styles.team}>REAL MADRID</Text>
                    <Text notestyle={styles.color}>PLANTILLA</Text>
                  </Body>
                  <Right>
                    <Text note style={styles.color}>$100,000</Text>
                  </Right>
                </ListItem>

                <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonalRey')}>
                  <Left>
                    <Thumbnail square source={{ uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4246.png' }} />
                  </Left>
                  <Body>
                    <Text style={styles.team}>PUEBLA</Text>
                    <Text note style={styles.color}>PLANTILLA</Text>
                  </Body>
                  <Right>
                    <Text note style={styles.color}>$100,000</Text>
                  </Right>
                </ListItem>

                <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonalRey')}>
                  <Left>
                    <Thumbnail square source={{uri: 'http://4.bp.blogspot.com/_aY6uWfdpKTw/ShQmQ-kyVsI/AAAAAAAABc4/07hQ17vHBUI/s400/%C3%81guilas+del+Am%C3%A9rica+%7C+Logo.png'}} />
                  </Left>
                  <Body>
                    <Text style={styles.team}>AMARICA</Text>
                    <Text note style={styles.color}>PLANTILLA</Text>
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
  }
});
