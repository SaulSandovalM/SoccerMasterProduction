import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Container, Content, List, ListItem, Left, Body, Right, Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MarketConfederaciones extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.menuContainer}>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.push('MenuConfederaciones')}>
            <Icon name="bars" color="white" size={25} />
          </TouchableWithoutFeedback>
          <Image style={styles.logo} source={require('../../assets/imgs/Soccer.png')}/>
          <TouchableWithoutFeedback>
            <Icon name="search" color="black" size={25} />
          </TouchableWithoutFeedback>
        </View>
        <Content style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.jordana}>EQUIPOS</Text>
          </View>
          <View style={styles.view}>
            <List style={styles.container}>
              <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonalConfederaciones')}>
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

              <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonalConfederaciones')}>
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

              <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonalConfederaciones')}>
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

              <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonalConfederaciones')}>
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

              <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonalConfederaciones')}>
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

              <ListItem avatar onPress={() => this.props.navigation.push('MarketPersonalConfederaciones')}>
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
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  menuContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 15
  },
  logo: {
    width: 120,
    height: 40
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
