import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'native-base';

const {width, height} = Dimensions.get('window')

class Menu extends Component {
    render(){
        return (
            <View style={styles.menu}>

              <View>
                <Text style={styles.section}>PARTIDOS</Text>
              </View>

              <View>
                <TouchableHighlight>
                  <Button style={styles.Button2} onPress={() => this.props.navigation.push('Jornadas')}>
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
                  <Button style={styles.Button1} onPress={() => this.props.navigation.push('Stadistics')}>
                    <Icon name="th-list" style={styles.icon2}/>
                    <Text style={styles.text2}>ESTADISTICAS</Text>
                    <Icon name="chevron-right" style={styles.icon2}/>
                  </Button>
                </TouchableHighlight>
              </View>

              <View>
                <TouchableHighlight>
                  <Button style={styles.Button1}>
                    <Icon name="th-list" style={styles.icon2}/>
                    <Text style={styles.text2}>TABLA DE POSICIONES</Text>
                    <Icon name="chevron-right" style={styles.icon2}/>
                  </Button>
                </TouchableHighlight>
              </View>

              <View>
                <TouchableHighlight>
                  <Button style={styles.Button1}>
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
                  <Button style={styles.Button3} onPress={() => navigation.push('Market')}>
                    <Icon name="dollar" style={styles.icon}/>
                    <Text style={styles.text}>MERCADO DE EQUIPOS</Text>
                    <Icon name="chevron-right" style={styles.icon}/>
                  </Button>
                </TouchableHighlight>
              </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor:"#000"
  },
  section: {
    color: 'white',
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15
  },
  Button1: {
    borderRadius: 35,
    width: 240,
    marginTop: 20,
    backgroundColor: 'white'
  },
  icon: {
    fontSize: 15,
    color: 'white'
  },
  icon2: {
    fontSize: 15,
    color: 'black'
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
    width: 240,
    marginTop: 20,
    backgroundColor: 'green'
  },
  Button3: {
    borderRadius: 35,
    width: 240,
    marginTop: 20,
    backgroundColor: 'red'
  }
})

export default Menu
