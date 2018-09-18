import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, ImageBackground} from 'react-native';
import firebase from '../firebase/firebase';

export default class Profile extends Component {
    static navigationOptions = {
      title: "Perfil"
    };

    constructor(props){
      super(props)
      this.state = {
        nuevo: '',
        lista: []
      }
    }

    componentDidMount() {
      const itemsRef = firebase.database().ref('CopaAmericana/Jornada1/Partidos');
      this.listenForItems(itemsRef);
    }

    listenForItems = (itemsRef) => {
      itemsRef.on('value', (snap) => {
        var lista = [];
        snap.forEach((child) => {
          lista.push({
            equipo1: child.val().equipo1,
            equipo2: child.val().equipo2,
            goles1: child.val().goles1,
            goles2: child.val().goles2,
            id: child.key
          });
        });
        this.setState({
          lista: lista
        });
      });
    };

    render() {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.container2}>
              <View style={{width: '50%'}}>
                <Text style={styles.name}>Saul{'\n'}Sandoval</Text>
                  <View style={styles.direction}>
                    <Text style={styles.info}>21{'\n'}<Text style={styles.name}>MED</Text></Text>
                      <View style={styles.direction2}>
                        <Text style={styles.height}>ALTURA{'\n'}170 CM</Text>
                        <Text style={styles.height}>PESO{'\n'}60 KG</Text>
                      </View>
                  </View>
              </View>

              <View>
                <Image style={styles.avatar} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>

                <View style={styles.align}>
                  <View style={styles.table}>
                    <View style={styles.center}>
                      <Text style={styles.atr}>INFORMACION</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.container2}>
                  <View style={{alignItems: 'center'}}>
                    <Image style={styles.team}
                       source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                    <Text style={styles.sta}>PACHUCA</Text>
                  </View>

                  <View style={{width: '60%'}}>
                    <View style={styles.container4}>
                        <Text style={styles.sta}>EDAD</Text>
                    </View>
                    <View style={styles.container4}>
                        <Text style={styles.color}>21</Text>
                    </View>
                    <View style={styles.container4}>
                        <Text style={styles.sta}>PARTIDOS JUGADOS</Text>
                    </View>
                    <View style={styles.container4}>
                        <Text style={styles.color}>0</Text>
                    </View>
                    <View style={styles.container4}>
                        <Text style={styles.sta}>GOLES</Text>
                    </View>
                    <View style={styles.container4}>
                        <Text style={styles.color}>0</Text>
                    </View>
                  </View>
              </View>

              <View style={styles.align}>
                <View style={styles.table}>
                  <View style={styles.container3}>
                    <Text style={styles.atr4}>VALOR</Text>
                    <Text style={styles.atr3}>$ 10,000.00 MXN</Text>
                  </View>
                </View>
              </View>

            </ScrollView>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  container2: {
    flexDirection: 'row',
    marginTop: 15
  },
  container3: {
    flexDirection: 'row',
    marginTop: 15
  },
  container4: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: '10%'
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 8
  },
  info: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
    marginLeft: 8
  },
  direction: {
    flexDirection: 'row',
    marginTop: 10
  },
  height: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5
  },
  atr: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 8,
    marginTop: 10
  },
  sta: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
    marginTop: 5,
  },
  atr2: {
    color: 'black',
    fontSize: 20,
    marginLeft: 8,
    marginTop: 10,
    width: 250
  },
  atr3: {
    color: 'black',
    fontSize: 20,
    marginLeft: 8,
    marginTop: 10
  },
  atr4: {
    color: 'black',
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
    alignItems: 'center',
  },
  color: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  viewPager: {
    flex: 1,
  },
});
