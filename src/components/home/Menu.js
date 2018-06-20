import React, {Component} from 'react'
import {Dimensions, StyleSheet, View, Text, Image, ScrollView, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import {Button} from 'native-base';

const {width, height} = Dimensions.get('window')

class Menu extends Component {
    render(){
        return (
            <View style={styles.menu}>
              <Text style={{color: 'white', fontSize: 20, alignSelf: 'center', width: width/2}}>Menu</Text>
              <View>
                <Button rounded light>
                  <Text>Tabla de Posiciones</Text>
                </Button>
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
})

export default Menu
