import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Text, Image, ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'native-base';

const {width, height} = Dimensions.get('window')

class Menu extends Component {
    render(){
        return (
            <View style={styles.menu}>

              <View>
                <Text style={{color: 'white', fontSize: 20, marginTop: 15}}>Estadisticas</Text>
              </View>

              <View>
                <TouchableHighlight>
                  <Button style={{borderRadius: 35, width: 240, marginTop: 20, backgroundColor: 'blue'}}>
                    <Icon name="th-list" style={{fontSize: 15, color: 'white'}}/>
                    <Text style={{color: 'white', alignSelf: 'center'}}>Tabla de Posiciones</Text>
                    <Icon name="chevron-right" style={{fontSize: 15, color: 'white'}}/>
                  </Button>
                </TouchableHighlight>
              </View>

              <View>
                <TouchableHighlight>
                  <Button style={{borderRadius: 35, width: 240, marginTop: 20, backgroundColor: 'purple'}}>
                    <Icon name="bar-chart" style={{fontSize: 15, color: 'white'}}/>
                    <Text style={{color: 'white', alignSelf: 'center'}}>Tabla de Goleo</Text>
                    <Icon name="chevron-right" style={{fontSize: 15, color: 'white'}}/>
                  </Button>
                </TouchableHighlight>
              </View>

              <View>
                <Text style={{color: 'white', fontSize: 20, marginTop: 15}}>Calendario</Text>
              </View>

              <View>
                <TouchableHighlight>
                  <Button style={{borderRadius: 35, width: 240, marginTop: 20, backgroundColor: 'red'}}>
                    <Icon name="calendar" style={{fontSize: 15, color: 'white'}}/>
                    <Text style={{color: 'white', alignSelf: 'center'}}>Calendario</Text>
                    <Icon name="chevron-right" style={{fontSize: 15, color: 'white'}}/>
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
  cerrarS: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textCerrar: {
    color: '#666666',
    fontSize: 15,
    margin: 10
  },
})

export default Menu
