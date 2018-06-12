/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Header, Footer, FooterTab, Button, StyleProvider, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Stadistics extends Component{
  static navigationOptions = {
    header: null
};

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container style={styles.container}>

        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='navicon' style={styles.icon}/>
            </Button>
          </Left>
          <Body>
            <Text style={styles.icon}>JORNADA</Text>
          </Body>
          <Right>
          </Right>
        </Header>

        <Content>

          <View style={{marginTop: 30}}>
            <View style={{alignItems: 'center',  backgroundColor: '#9F81F7', width: '100%', height: 100, flexDirection: 'row', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginLeft: 10, marginRight: 5}}>1</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginLeft: 5, marginRight: 10}}> - </Text>
              <Image style={{width: 40, height: 40, marginTop: -10, marginRight: 5}} source={{uri:'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, width: 150}}>PACHUCA</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>10</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>20</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>30</Text>
            </View>
            <View style={{alignItems: 'center',  backgroundColor: 'red', width: '100%', height: 100, flexDirection: 'row', borderTopLeftRadius: 15, borderTopRightRadius: 15, marginTop: -20}}>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginLeft: 10, marginRight: 5}}>1</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginLeft: 5, marginRight: 10}}> - </Text>
              <Image style={{width: 40, height: 40, marginTop: -10, marginRight: 5}} source={{uri:'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, width: 150}}>PACHUCA</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>10</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>20</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>30</Text>
            </View>
            <View style={{alignItems: 'center',  backgroundColor: 'blue', width: '100%', height: 100, flexDirection: 'row', borderTopLeftRadius: 15, borderTopRightRadius: 15, marginTop: -20}}>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginLeft: 10, marginRight: 5}}>1</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginLeft: 5, marginRight: 10}}> - </Text>
              <Image style={{width: 40, height: 40, marginTop: -10, marginRight: 5}} source={{uri:'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, width: 150}}>PACHUCA</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>10</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>20</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>30</Text>
            </View>
            <View style={{alignItems: 'center',  backgroundColor: 'yellow', width: '100%', height: 100, flexDirection: 'row', borderTopLeftRadius: 15, borderTopRightRadius: 15, marginTop: -20}}>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginLeft: 10, marginRight: 5}}>1</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginLeft: 5, marginRight: 10}}> - </Text>
              <Image style={{width: 40, height: 40, marginTop: -10, marginRight: 5}} source={{uri:'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, width: 150}}>PACHUCA</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>10</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>20</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>30</Text>
            </View>
            <View style={{alignItems: 'center',  backgroundColor: 'grey', width: '100%', height: 100, flexDirection: 'row', borderTopLeftRadius: 15, borderTopRightRadius: 15, marginTop: -20}}>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginLeft: 10, marginRight: 5}}>1</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginLeft: 5, marginRight: 10}}> - </Text>
              <Image style={{width: 40, height: 40, marginTop: -10, marginRight: 5}} source={{uri:'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, width: 150}}>PACHUCA</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>10</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>20</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>30</Text>
            </View>
            <View style={{alignItems: 'center',  backgroundColor: 'green', width: '100%', height: 100, flexDirection: 'row', borderTopLeftRadius: 15, borderTopRightRadius: 15, marginTop: -20}}>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginLeft: 10, marginRight: 5}}>1</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginLeft: 5, marginRight: 10}}> - </Text>
              <Image style={{width: 40, height: 40, marginTop: -10, marginRight: 5}} source={{uri:'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, width: 150}}>PACHUCA</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>10</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>20</Text>
              <Text style={{color: 'white', fontSize: 20, marginTop: -10, marginRight: 10}}>30</Text>
            </View>
          </View>

        </Content>

        <Footer>
          <FooterTab>
            <Button>
              <Icon name="soccer-ball-o" style={styles.icon}/>
              <Text style={{color: 'white'}}>Partidos</Text>
            </Button>
            <Button>
              <Icon name="bar-chart-o" style={styles.icon}/>
              <Text style={{color: 'white'}}>Estadisticas</Text>
            </Button>
            <Button>
              <Icon name="dollar" style={styles.icon}/>
              <Text style={{color: 'white'}}>Mercado</Text>
            </Button>
          </FooterTab>
        </Footer>

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
  }
});
