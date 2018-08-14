import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import {Container, Content, Button} from 'native-base';
import {NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MenuSudamericana extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <Icon name="remove" color="black" size={25} style={styles.remove}/>
          </TouchableWithoutFeedback>
          <Text style={styles.title}>Menu</Text>
          <TouchableWithoutFeedback>
            <Icon name="search" color="black" size={25} />
          </TouchableWithoutFeedback>
        </View>

        <View>
          <View>
            <Text style={styles.section}>PARTIDOS</Text>
          </View>

          <View>
            <TouchableHighlight>
              <Button style={styles.Button2} onPress={() => this.props.navigation.push('PartidosSudamericana')}>
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
              <Button style={styles.Button1} onPress={() => this.props.navigation.push('StadisticsSudamericana')}>
                <Icon name="th-list" style={styles.icon2}/>
                <Text style={styles.text2}>ESTADISTICAS</Text>
                <Icon name="chevron-right" style={styles.icon2}/>
              </Button>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight>
              <Button style={styles.Button1} onPress={() => this.props.navigation.push('Thrashed')}>
                <Icon name="bar-chart" style={styles.icon2}/>
                <Text style={styles.text2}>TABLA DE GOLEO</Text>
                <Icon name="chevron-right" style={styles.icon2}/>
              </Button>
            </TouchableHighlight>
          </View>

          <View>
            <Text style={styles.section}>MERCADO</Text>
          </View>

          <View>
            <TouchableHighlight>
              <Button style={styles.Button3} onPress={() => this.props.navigation.push('MarketSudamericana')}>
                <Icon name="dollar" style={styles.icon}/>
                <Text style={styles.text}>MERCADO DE EQUIPOS</Text>
                <Icon name="chevron-right" style={styles.icon}/>
              </Button>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'black',
  },
  section: {
    color: 'white',
    fontSize: 20,
    marginLeft: 15,
    marginTop: 15
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  Button1: {
    borderRadius: 35,
    width: '100%',
    marginTop: 20,
    backgroundColor: 'white'
  },
  icon: {
    fontSize: 15,
    color: 'white',
    marginLeft: 15
  },
  icon2: {
    fontSize: 15,
    color: 'black',
    marginLeft: 15
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
    width: '100%',
    marginTop: 20,
    backgroundColor: 'green'
  },
  Button3: {
    borderRadius: 35,
    width: '100%',
    marginTop: 20,
    backgroundColor: 'red'
  },
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor: 'black',
  },
  view: {
    padding: 20
  },
  remove: {
    marginLeft: 15
  }
});
