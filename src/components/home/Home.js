/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, ImageBackground} from 'react-native';
import {Container, Content, Footer, FooterTab, Button, Icon} from 'native-base';
import img3 from '../../assets/imgs/pasto.jpg';

export default class Home extends Component{
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerStyle: {
        backgroundColor: 'transparent',
        right: 0,
        left: 0,
        top: 0,
        position: 'absolute',
        borderBottomWidth: 0,
      },
        headerLeft: null,
        headerTitle: "Inicio",
    };
  };

  render() {
    return (
      <Container>
      <ImageBackground source={img3} style={styles.viewPager}>
        <Content>

        <View style={styles.view2}>
          <View style={styles.margin}>
            <View style={styles.center}>
              <Text style={styles.title}>Proximos Partidos</Text>
            </View>

            <View>
              <Text style={styles.date}>Lunes, 21 de Mayo</Text>
            </View>

            <View style={styles.center}>
              <View style={styles.view}>
                <Text style={styles.color}>Pachuca</Text>
              </View>

              <Image style={styles.img} source={{uri:'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
              <Text style={styles.color}> 7:00 PM </Text>
              <Image style={styles.img} source={{uri:'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>

              <View style={styles.view}>
                <Text style={styles.color}>Pachuca</Text>
              </View>
            </View>

            <View>
              <Text style={styles.date}>Martes, 22 de Mayo</Text>
            </View>

            <View style={styles.center}>
              <View style={styles.view}>
                <Text style={styles.color}>America</Text>
              </View>

              <Image style={styles.img} source={{uri:'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
              <Text style={styles.color}> 9:00 PM </Text>
              <Image style={styles.img} source={{uri:'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>

              <View style={styles.view}>
                <Text style={styles.color}>Cruz Azul</Text>
              </View>
            </View>
          </View>
        </View>

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

        </Content>
      </ImageBackground>
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
