/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ViewPagerAndroid} from 'react-native';

export default class MarketPersonal extends Component{
  static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};

        return {
            headerStyle: {
                backgroundColor: 'transparent',
                right: 0,
                left: 0,
                top: 0,
                position: 'absolute',
                borderBottomWidth: 0,
              },
            headerLeft: null,
            headerTitle: "MERCADO DE JUGADORES",
        };
    };

  render() {
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>
        <View style={styles.pageStyle} key="1">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>ALTURA 170 CM</Text>
              <Text style={styles.name2}>PESO 60 KG</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>EDAD 21</Text>
              <Text style={styles.name2}>GOLES 5</Text>
            </View>
            <View style={{alignSelf: 'center', backgroundColor: '#fda300'}}>
              <Text style={styles.name4}>PARTIDOS JUGADOS 3</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>
        </View>

        <View style={styles.pageStyle} key="2">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>

        </View>

        <View style={styles.pageStyle} key="3">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>

        </View>

        <View style={styles.pageStyle} key="4">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>

        </View>

        <View style={styles.pageStyle} key="5">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>

        </View>

        <View style={styles.pageStyle} key="6">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>

        </View>

        <View style={styles.pageStyle} key="7">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>

        </View>

        <View style={styles.pageStyle} key="8">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>

        </View>

        <View style={styles.pageStyle} key="9">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>

        </View>

        <View style={styles.pageStyle} key="10">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>

        </View>

        <View style={styles.pageStyle} key="11">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>

        </View>

        <View style={styles.pageStyle} key="12">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>

        </View>

        <View style={styles.pageStyle} key="13">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>

        </View>

        <View style={styles.pageStyle} key="14">
        <View style={styles.back}>

          <View style={{backgroundColor: '#e6d901', height: '90%', width: '90%', margin: '5%', borderRadius: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>21</Text>
                <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>MED</Text>
                <Image style={{height: 100, width: '50%', marginTop: 5}} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
                <Image style={{height: 50, width: '50%', margin: 5}} source={{uri: 'http://flags.fmcdn.net/data/flags/w580/mx.png'}}/>
              </View>
              <View style={{width: '50%', justifyContent: 'flex-end'}}>
                <Image style={{height: 200, width: '100%'}} source={{uri: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png'}}/>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff4a2'}}>
              <Text style={styles.name}>SAUL SANDOVAL</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#fda300', flexDirection: 'row'}}>
              <Text style={styles.name2}>87 RIT </Text>
              <Text style={styles.name2}> 87 RIT</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              <Text style={styles.name2}>$10,000.00 MXN</Text>
            </View>
          </View>

        </View>

        </View>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    backgroundColor: '#08088A',
    height: '100%'
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 5,
  },
  name2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    justifyContent: 'center',
    width: '50%'
  },
  name4: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    justifyContent: 'center',
    width: '100%'
  },
  name3: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 5,
    justifyContent: 'center',
    width: '100%'
  },
});
