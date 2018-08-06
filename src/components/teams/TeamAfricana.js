import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';

export default class TeamAfricana extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.logo} source={require('../../assets/imgs/Soccer.png')}/>
        <Text style={styles.text1}>ELIGE TU EQUIPO</Text>
        <Text style={styles.text2}>TOCA PARA EFECTUAR SELECCIÓN</Text>

        <ScrollView>
          <View style={styles.view}>
            <TouchableHighlight onPress={() => this.props.navigation.push('PartidosAfricana')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Ghana_Football_Association_logo.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('PartidosAfricana')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://images.vexels.com/media/users/3/152421/isolated/preview/8281001357d2cefc870c6c315e89132a-logotipo-del-equipo-de-ftbol-de-egipto-by-vexels.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('PartidosAfricana')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://clipart.info/images/ccovers/1503438048nigeria-football-logo-png.png'}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.push('PartidosAfricana')} style={styles.touch}>
              <Image style={styles.img} source={{uri: 'https://i.pinimg.com/originals/5a/74/0c/5a740cc3d15c612e19f0573ef6835408.png'}}/>
            </TouchableHighlight>
          </View>

          <View style={styles.margin}/>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  text1: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
  text2: {
    color: 'grey',
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 10,
    height: 30
  },
  view: {
    flexDirection: 'row'
  },
  touch: {
    width: '23%',
    height: 160,
    margin: '1%'
  },
  img: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey'
  },
  margin: {
    marginTop: 120
  },
  logo: {
    width: 120,
    height: 40,
    alignSelf: 'center'
  }
});
