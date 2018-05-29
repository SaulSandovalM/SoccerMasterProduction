/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, ImageBackground} from 'react-native';
import {Container, Header, Content, Footer, FooterTab, Button, Icon} from 'native-base';
import img3 from '../../assets/imgs/pasto.jpg';

export default class Home extends Component{
  render() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button vertical active>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 24
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  color: {
    color: 'white',
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    fontWeight: 'bold',
    margin: 8
  },
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60
  },
  margin: {
    marginTop: 10,
    width: '95%',
    backgroundColor: 'grey',
    opacity: 0.8
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 70,
    height: 70
  },
  view2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 85
  }
});
