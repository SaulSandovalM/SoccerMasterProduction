import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import {Container, Content, Button, StyleProvider, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../comun/Header';
import SideMenu from 'react-native-side-menu';
import Menu from '../comun/Menu';

export default class PartidosSudamericana extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateMenu(isOpen){
    this.setState({isOpen})
  }

  static navigationOptions = {
      header: null
  };

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={styles.container}>

          <SideMenu menu={<Menu/>} isOpen={this.state.isOpen} onChange={(isOpen) => this.updateMenu(isOpen)}>

            <Header toggle={this.toggle.bind(this)}/>

              <Content>

                <View style={styles.container}>
                  <Text style={styles.jordana}>JORNADA</Text>
                  <Text style={styles.fecha}>FECHA</Text>
                </View>

                <View style={styles.container}>
                <TouchableHighlight onPress={() => this.props.navigation.push('Partido')}>
                  <LinearGradient
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    locations={[0.94, 0.95]}
                    colors={['#e31114', '#008641']}
                    style={styles.linearGradient}
                  >
                    <View style={styles.cardStyle}>

                      <Image style={styles.img} source={{uri: 'http://www.pesstatsdatabase.com/PSD/PSD/Images/Clubs/Mexico/Puebla-FC.png'}}/>
                      <Text style={styles.textTeam}> PUEBLA <Text style={styles.num}> 2 </Text></Text>
                      <Text style={styles.textTeam}><Text style={styles.num}> 6 </Text> PACHUCA</Text>
                      <Image style={styles.img} source={{uri: 'http://cruzazulfc.com.mx/wp-content/uploads/2016/06/pachuca-1-128x128.png'}}/>

                    </View>
                  </LinearGradient>
                </TouchableHighlight>

                  <LinearGradient
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    locations={[0.94, 0.95]}
                    colors={['#131e7d', '#272727']}
                    style={styles.linearGradient}
                  >
                  <TouchableHighlight onPress={() => this.props.navigation.push('Partido')}>
                    <View style={styles.cardStyle}>

                      <Image style={styles.img} source={{uri: 'https://www.fifaindex.com/static/FIFA18/images/crest/256/light/111678.png'}}/>
                      <Text onPress={() => this.props.navigation.push('Partido')} style={styles.textTeam}> TIJUANA <Text style={styles.num}> 2 </Text></Text>
                      <Text style={styles.textTeam}><Text style={styles.num}> 6 </Text> UNAM </Text>
                      <Image style={styles.img} source={{uri: 'http://www.futbol24.com/upload/team/Mexico/UNAM-Pumas.png'}}/>

                    </View>
                    </TouchableHighlight>
                  </LinearGradient>

                  <LinearGradient
                      start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                      locations={[0.94, 0.95]}
                      colors={['#ffcb0a', '#006ad6']}
                      style={styles.linearGradient}
                  >
                  <TouchableHighlight onPress={() => this.props.navigation.push('Partido')}>
                    <View style={styles.cardStyle}>

                      <Image style={styles.img} source={{uri: 'https://img.vavel.com/b/club-america-icon-1.png'}}/>
                      <Text onPress={() => this.props.navigation.push('Partido')} style={styles.textTeam}> AMÉRICA <Text style={styles.num}> 2 </Text></Text>
                      <Text style={styles.textTeam}><Text style={styles.num}> 6 </Text> CHIVAS </Text>
                      <Image style={styles.img} source={{uri: 'http://www.futbol24.com/upload/team/Mexico/Guadalajara-Chivas.png'}}/>

                    </View>
                    </TouchableHighlight>
                  </LinearGradient>

                  <LinearGradient
                      start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                      locations={[0.94, 0.95]}
                      colors={['#008641', '#131e7d']}
                      style={styles.linearGradient}
                  >
                  <TouchableHighlight onPress={() => this.props.navigation.push('Partido')}>
                    <View style={styles.cardStyle}>

                      <Image style={styles.textTeam} source={{uri: 'http://3.bp.blogspot.com/-L1icUlsYWmM/Vf3OUEd96uI/AAAAAAAACSM/bzniL0t46sM/s1600/79.png'}}/>
                      <Text onPress={() => this.props.navigation.push('Partido')} style={styles.textTeam}> SANTOS <Text style={styles.num}> 2 </Text></Text>
                      <Text style={styles.textTeam}><Text style={styles.num}> 6 </Text> ATLAS </Text>
                      <Image style={styles.textTeam} source={{uri: 'https://4.bp.blogspot.com/-xft_g9dSwHY/WV0RxiA0cKI/AAAAAAABLso/18QyiuHvzsI80J9FkPyRt_4NpsD_a1ibQCLcBGAs/s1600/Atlas%2BFC256x.png'}}/>

                    </View>
                    </TouchableHighlight>
                  </LinearGradient>

                  <LinearGradient
                      start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                      locations={[0.94, 0.95]}
                      colors={['#e31114', '#008641']}
                      style={styles.linearGradient}
                  >
                  <TouchableHighlight onPress={() => this.props.navigation.push('Partido')}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{width: '50%', height: 300}}>
                      </View>
                      <View style={{width: '50%', height: 300}}>
                      </View>
                    </View>
                    </TouchableHighlight>
                  </LinearGradient>

                </View>

              </Content>

            </SideMenu>

          </Container>
        </StyleProvider>
      );
    }
}

const styles = StyleSheet.create({
  cardStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: 'black'
  },
  header: {
    marginTop: 24
  },
  icon: {
    color: 'white',
    fontSize: 20,
  },
  fecha: {
    color: 'grey',
    alignSelf: 'center',
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  jordana: {
    color: 'grey',
    alignSelf: 'center',
    fontSize: 20,
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -10
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  textTeam: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  num: {
    fontSize: 26,
    color: 'white'
  }
});
