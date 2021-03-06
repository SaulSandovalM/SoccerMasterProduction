import React from 'react'
import {Text, View, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const HeaderJugador = props => {
    return (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => props.toggle()}>
              <Icon name="bars" color="white" size={25} />
          </TouchableWithoutFeedback>
          <Image style={styles.logo} source={require('../../assets/imgs/Soccer.png')}/>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.push('Profile')}>
            <Icon name="user" color="white" size={25} />
          </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
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
  }
})

export default HeaderJugador
