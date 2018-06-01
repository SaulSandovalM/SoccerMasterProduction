/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {List, ListItem, Thumbnail, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MarketTeam extends Component{
  static navigationOptions = {
      header: null
  };

    render() {
      return (
        <View style={styles.container}>

          <ScrollView>

            <List>
              <ListItem onPress={() => this.props.navigation.push('MarketPersonal')}>
                <Thumbnail square size={80} source={{ uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png' }} />
                <Body>
                  <Text>Pachuca</Text>
                  <Text note>Numero de copas: 2</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={{ uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png' }} />
                <Body>
                  <Text>Pachuca</Text>
                  <Text note>Numero de copas: 4</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={{ uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png' }} />
                <Body>
                  <Text>Pachuca</Text>
                  <Text note>Numero de copas: 3</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={{ uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png' }} />
                <Body>
                  <Text>Pachuca</Text>
                  <Text note>Numero de copas: 2</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={{ uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png' }} />
                <Body>
                  <Text>Pachuca</Text>
                  <Text note>Numero de copas: 1</Text>
                </Body>
              </ListItem>
            </List>

          </ScrollView>

        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flexDirection: 'row',
  },
  container3: {
    flexDirection: 'row',
    backgroundColor: '#404040'
  },
  container4: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: '10%'
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 8
  },
  info: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    marginLeft: 8
  },
  direction: {
    flexDirection: 'row',
    marginTop: 10
  },
  height: {
    color: '#c0c0c0',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5
  },
  atr: {
    color: '#c0c0c0',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 8,
    marginTop: 10
  },
  sta: {
    color: '#c0c0c0',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
    marginTop: 5,
  },
  atr2: {
      color: 'white',
      fontSize: 20,
      marginLeft: 8,
      marginTop: 10,
      width: 250
  },
  atr3: {
    color: 'white',
    fontSize: 20,
    marginLeft: 8,
    marginTop: 10
  },
  atr4: {
    color: 'white',
    fontSize: 20,
    marginLeft: 8,
    marginTop: 10,
    width: 150
  },
  direction2: {
    flexDirection: 'column',
  },
  avatar: {
    height: 175,
    width: 175
  },
  team: {
    height: 150,
    width: 150
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  table: {
    width: '90%',
  },
  align: {
    alignItems: 'center'
  },
  color: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  }
});
