/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Container, Content, Header, Footer, FooterTab, Button, StyleProvider, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Partidos extends Component{
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

          <Text style={styles.fecha}>FECHA</Text>

          <View style={{flexDirection: 'row', marginTop: 30}}>
            <View style={{backgroundColor: '#9F81F7', width: '50%', height: 80, justifyContent: 'flex-end', flexDirection: 'row'}}>
              <View style={{justifyContent: 'center'}}>
                <Text onPress={() => this.props.navigation.push('Partido')} style={{fontSize: 14, color: 'white'}}> PUEBLA <Text style={{fontSize: 26, color: 'white'}}> 2 </Text></Text>
              </View>
            </View>
            <View style={{backgroundColor: 'blue', width: '50%', height: 80, justifyContent: 'center'}}>
              <Text style={{fontSize: 14, color: 'white'}}><Text style={{fontSize: 26, color: 'white'}}> 6 </Text> PACHUCA </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{backgroundColor: 'blue', width: '50%', height: 80}}>
            </View>
            <View style={{backgroundColor: '#01DFA5', width: '50%', height: 80}}>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{backgroundColor: '#9F81F7', width: '50%', height: 100}}>
            </View>
            <View style={{backgroundColor: 'blue', width: '50%', height: 100}}>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{backgroundColor: 'blue', width: '50%', height: 300}}>
            </View>
            <View style={{backgroundColor: 'red', width: '50%', height: 300}}>
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
