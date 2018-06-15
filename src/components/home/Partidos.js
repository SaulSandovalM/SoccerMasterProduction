/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Container, Content, Header, Footer, FooterTab, Button, StyleProvider, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../../android/app/src/main/assets/fonts/fonts';

export default class Partidos extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container style={styles.container}>

                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='navicon' style={styles.icon}/>
                            </Button>
                        </Left>
                        <Body>
                        <Text style={styles.icon}>JORNADA</Text>
                        </Body>
                        <Right>
                        </Right>
                    </Header>

                    <Content>

                        <Text style={styles.fecha}>FECHA</Text>

                        <LinearGradient
                            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                            locations={[0.94, 0.95]}
                            colors={['#e31114', '#008641']}
                            style={styles.linearGradient}
                        >

                            <View style={styles.cardStyle}>

                                <Image style={{width: 50, height: 50, marginRight: 5}}
                                       source={{uri: 'http://www.pesstatsdatabase.com/PSD/PSD/Images/Clubs/Mexico/Puebla-FC.png'}}/>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                    onPress={() => this.props.navigation.push('Partido')}> PUEBLA <Text
                                    style={{fontSize: 26, color: 'white',}}> 2 </Text></Text>

                                <Text style={{
                                    fontSize: 16,
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}><Text
                                    style={{fontSize: 26, color: 'white'}}> 6 </Text> PACHUCA
                                </Text>
                                <Image style={{width: 50, height: 50, marginLeft: 5}}
                                       source={{uri: 'http://cruzazulfc.com.mx/wp-content/uploads/2016/06/pachuca-1-128x128.png'}}/>

                            </View>

                        </LinearGradient>
                        <LinearGradient
                            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                            locations={[0.98, 0.99]}
                            colors={['#131e7d', '#272727']}
                            style={styles.linearGradient}
                        >

                            <View style={styles.cardStyle}>

                                <Image style={{width: 50, height: 50, marginRight: 5}}
                                       source={{uri: 'https://www.fifaindex.com/static/FIFA18/images/crest/256/light/111678.png'}}/>
                                <Text onPress={() => this.props.navigation.push('Partido')}
                                      style={{
                                          fontSize: 16,
                                          color: 'white',
                                          fontWeight: 'bold',
                                      }}> TIJUANA <Text
                                    style={{fontSize: 26, color: 'white',}}> 2 </Text></Text>

                                <Text style={{
                                    fontSize: 16,
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}><Text
                                    style={{fontSize: 26, color: 'white'}}> 6 </Text> UNAM
                                </Text>
                                <Image style={{width: 50, height: 50, marginLeft: 5}}
                                       source={{uri: 'http://www.futbol24.com/upload/team/Mexico/UNAM-Pumas.png'}}/>

                            </View>

                        </LinearGradient>
                        <LinearGradient
                            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                            locations={[0.97, 0.98]}
                            colors={['#ffcb0a', '#006ad6']}
                            style={styles.linearGradient}
                        >

                            <View style={styles.cardStyle}>

                                <Image style={{width: 50, height: 50, marginRight: 5}}
                                       source={{uri: 'https://img.vavel.com/b/club-america-icon-1.png'}}/>
                                <Text onPress={() => this.props.navigation.push('Partido')}
                                      style={{
                                          fontSize: 16,
                                          color: 'white',
                                          fontWeight: 'bold',
                                      }}> AMÉRICA <Text
                                    style={{fontSize: 26, color: 'white'}}> 2 </Text></Text>

                                <Text style={{
                                    fontSize: 16,
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}><Text
                                    style={{fontSize: 26, color: 'white'}}> 6 </Text> CHIVAS
                                </Text>
                                <Image style={{width: 50, height: 50, marginLeft: 5}}
                                       source={{uri: 'http://www.futbol24.com/upload/team/Mexico/Guadalajara-Chivas.png'}}/>

                            </View>

                        </LinearGradient>

                        <LinearGradient
                            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                            locations={[0.97, 0.98]}
                            colors={['#008641', '#131e7d']}
                            style={styles.linearGradient}
                        >

                            <View style={styles.cardStyle}>

                                <Image style={{width: 50, height: 50, marginRight: 5}}
                                       source={{uri: 'http://3.bp.blogspot.com/-L1icUlsYWmM/Vf3OUEd96uI/AAAAAAAACSM/bzniL0t46sM/s1600/79.png'}}/>
                                <Text onPress={() => this.props.navigation.push('Partido')}
                                      style={{
                                          fontSize: 16,
                                          color: 'white',
                                          fontWeight: 'bold',
                                      }}> SANTOS <Text
                                    style={{fontSize: 26, color: 'white'}}> 2 </Text></Text>

                                <Text style={{
                                    fontSize: 16,
                                    color: 'white',
                                    fontWeight: 'bold',

                                }}><Text
                                    style={{fontSize: 26, color: 'white'}}> 6 </Text> ATLAS
                                </Text>
                                <Image style={{width: 50, height: 50, marginLeft: 5}}
                                       source={{uri: 'https://4.bp.blogspot.com/-xft_g9dSwHY/WV0RxiA0cKI/AAAAAAABLso/18QyiuHvzsI80J9FkPyRt_4NpsD_a1ibQCLcBGAs/s1600/Atlas%2BFC256x.png'}}/>

                            </View>

                        </LinearGradient>
                        <LinearGradient
                            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                            locations={[0.75, 0.76]}
                            colors={['#e31114', '#008641']}
                            style={styles.linearGradient}
                        >
                            <View style={{flexDirection: 'row'}}>
                                <View style={{width: '50%', height: 300}}>
                                </View>
                                <View style={{width: '50%', height: 300}}>
                                </View>
                            </View>
                        </LinearGradient>

                    </Content>

                    <Footer>
                        <FooterTab>
                            <Button onPress={() => this.props.navigation.push('Equipos')}>
                                <Icon name="soccer-ball-o" style={styles.icon}/>
                                <Text style={{color: 'white'}}>Equipos</Text>
                            </Button>
                            <Button onPress={() => this.props.navigation.push('Stadistics')}>
                                <Icon name="bar-chart-o" style={styles.icon}/>
                                <Text style={{color: 'white'}}>Estadisticas</Text>
                            </Button>
                            <Button onPress={() => this.props.navigation.push('MarketTeam')}>
                                <Icon name="dollar" style={styles.icon}/>
                                <Text style={{color: 'white'}}>Mercado</Text>
                            </Button>
                        </FooterTab>
                    </Footer>

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
        height: 80,
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
    linearGradient: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
});
