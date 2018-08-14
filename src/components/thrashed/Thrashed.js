import React, {Component} from 'react';
import {Container, Content, Button, Left, Right, Body} from 'native-base';
import {StyleSheet, Text, View, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Thrashed extends Component {
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
          <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
            <Icon name="bars" color="white" size={25} />
          </TouchableWithoutFeedback>
          <Image style={styles.logo} source={require('../../assets/imgs/Soccer.png')}/>
          <TouchableWithoutFeedback>
            <Icon name="search" color="black" size={25} />
          </TouchableWithoutFeedback>
        </View>
        <Content style={styles.container}>
          <View style={styles.row}>
            <ScrollView horizontal={true}>
              <View style={{width: 150, height: 150, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey', margin: 3}}>
                <Image style={{width: '50%', height: 100, alignSelf: 'center'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                   <Text style={{color: 'black', fontSize: 15, alignSelf: 'center'}}>Saul Sandoval</Text>
                   <Text style={{color: 'black', fontSize: 20, alignSelf: 'center'}}>Goles: 10</Text>
                </View>
              </View>
              <View style={{width: 150, height: 150, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey', margin: 3}}>
                <Image style={{width: '50%', height: 100, alignSelf: 'center'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                   <Text style={{color: 'black', fontSize: 15, alignSelf: 'center'}}>Saul Sandoval</Text>
                   <Text style={{color: 'black', fontSize: 20, alignSelf: 'center'}}>Goles: 8</Text>
                </View>
              </View>
              <View style={{width: 150, height: 150, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey', margin: 3}}>
                <Image style={{width: '50%', height: 100, alignSelf: 'center'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                   <Text style={{color: 'black', fontSize: 15, alignSelf: 'center'}}>Saul Sandoval</Text>
                   <Text style={{color: 'black', fontSize: 20, alignSelf: 'center'}}>Goles: 6</Text>
                </View>
              </View>
              <View style={{width: 150, height: 150, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey', margin: 3}}>
                <Image style={{width: '50%', height: 100, alignSelf: 'center'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                   <Text style={{color: 'black', fontSize: 15, alignSelf: 'center'}}>Saul Sandoval</Text>
                   <Text style={{color: 'black', fontSize: 20, alignSelf: 'center'}}>Goles: 4</Text>
                </View>
              </View>
              <View style={{width: 150, height: 150, backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: 'grey', margin: 3}}>
                <Image style={{width: '50%', height: 100, alignSelf: 'center'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
                <View>
                   <Text style={{color: 'black', fontSize: 15, alignSelf: 'center'}}>Saul Sandoval</Text>
                   <Text style={{color: 'black', fontSize: 20, alignSelf: 'center'}}>Goles: 2</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <Text style={{color: 'black', fontWeight: 'bold', margin: 5}}>LOS MEJORES EQUIPOS GOLEADORES</Text>

          <View style={{alignSelf: 'center'}}>
            <View style={{backgroundColor: 'red', height: 40, width: 330, margin: 5, flexDirection: 'row'}}>
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>Pachuca</Text>
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>10</Text>
            </View>
            <View style={{backgroundColor: 'blue', height: 40, width: 330, margin: 3, flexDirection: 'row'}}>
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>America </Text>
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>8</Text>
            </View>
            <View style={{backgroundColor: 'green', height: 40, width: 330, margin: 3, flexDirection: 'row'}}>
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>Puebla </Text>
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>6</Text>
            </View>
            <View style={{backgroundColor: 'orange', height: 40, width: 330, margin: 3, flexDirection: 'row'}}>
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>Pumas </Text>
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>4</Text>
            </View>
            <View style={{backgroundColor: 'black', height: 40, width: 330, margin: 3, flexDirection: 'row'}}>
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>Chivas </Text>
              <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>2</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  icon: {
    color: 'white',
    fontSize: 20
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
  img: {
    width: 40,
    height: 40,
    marginTop: -10,
    marginRight: 5
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    margin: 4
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
});
