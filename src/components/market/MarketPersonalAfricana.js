import React, {Component} from 'react';
import {Container, Content, Header, Footer, FooterTab, Button, StyleProvider, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class MarketPersonalAfricana extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={styles.container}>

          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='chevron-left' style={styles.icon}/>
              </Button>
            </Left>
            <Body>
              <Text style={styles.icon}>MERCADO</Text>
            </Body>
            <Right>
            </Right>
          </Header>

          <Content>

            <View style={styles.row}>
              <View style={{width: '48%', height: 255, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey', margin: 3}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                   <Text style={{color: 'black', fontSize: 20, marginLeft: 40}}>Nombre</Text>
                   <Text style={{color: 'black', fontSize: 20, marginLeft: 40}}>$ 10,000</Text>
                </View>
              </View>
              <View style={{width: '48%', height: 255, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey',  margin: 3}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                  <Text style={{color: 'black', fontSize: 20, marginLeft: 40}}>Nombre</Text>
                  <Text style={{color: 'black', fontSize: 20, marginLeft: 40}}>$ 10,000</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <View style={{width: '48%', height: 250, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey'}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
               <View>
                 <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>Nombre</Text>
                 <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>$ 10,000</Text>
                </View>
              </View>
              <View style={{width: '48%', height: 250, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey'}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                  <View>
                    <Text style={{color: 'black', fontSize: 20}}>Nombre</Text>
                    <Text style={{color: 'black', fontSize: 20}}>$ 10,000</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <View style={{width: '48%', height: 250, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey'}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                  <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>Nombre</Text>
                  <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>$ 10,000</Text>
                </View>
              </View>
              <View style={{width: '48%', height: 250, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey'}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                  <Text style={{color: 'black', fontSize: 20}}>Nombre</Text>
                  <Text style={{color: 'black', fontSize: 20}}>$ 10,000</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <View style={{width: '48%', height: 250, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey'}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                 <View>
                   <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>Nombre</Text>
                   <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>$ 10,000</Text>
                 </View>
              </View>
              <View style={{width: '48%', height: 250, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey'}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                  <Text style={{color: 'black', fontSize: 20}}>Nombre</Text>
                  <Text style={{color: 'black', fontSize: 20}}>$ 10,000</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <View style={{width: '48%', height: 250, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey'}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                   <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>Nombre</Text>
                   <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>$ 10,000</Text>
                </View>
              </View>
              <View style={{width: '48%', height: 250, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey'}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                  <Text style={{color: 'black', fontSize: 20}}>Nombre</Text>
                  <Text style={{color: 'black', fontSize: 20}}>$ 10,000</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <View style={{width: '48%', height: 250, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey'}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                 <View>
                   <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>Nombre</Text>
                   <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>$ 10,000</Text>
                 </View>
              </View>
              <View style={{width: '48%', height: 250, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey'}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                  <Text style={{color: 'black', fontSize: 20}}>Nombre</Text>
                  <Text style={{color: 'black', fontSize: 20}}>$ 10,000</Text>
                </View>
              </View>
            </View>

            <View style={styles.row}>
              <View style={{width: '48%', height: 250, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey'}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                   <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>Nombre</Text>
                   <Text style={{color: 'black', fontSize: 20, marginLeft: 10}}>$ 10,000</Text>
                </View>
              </View>
              <View style={{width: '48%', height: 250, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey'}}>
                <Image style={{width: '100%', height: 200}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                  <Text style={{color: 'black', fontSize: 20, }}>Nombre</Text>
                  <Text style={{color: 'black', fontSize: 20}}>$ 10,000</Text>
                </View>
              </View>
            </View>

          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
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
    backgroundColor: '#9F81F7',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
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
    fontSize: 20,
    marginTop: -10,
    width: 150
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    margin: 4
  }
});
