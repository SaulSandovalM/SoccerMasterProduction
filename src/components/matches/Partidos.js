/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Button, Container, Content, StyleProvider} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../comun/Header';
import SideMenu from 'react-native-side-menu';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window')


export default class Partidos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    updateMenu(isOpen) {
        this.setState({isOpen})
    }

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container style={styles.container}>

                    <SideMenu menu={
                        <View style={styles.menu}>

                            <View>
                                <Text style={styles.section}>PARTIDOS</Text>
                            </View>

                            <View>
                                <TouchableHighlight>
                                    <Button style={styles.Button2}
                                            onPress={() => this.props.navigation.push('Jornadas')}>
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
                                    <Button style={styles.Button1}
                                            onPress={() => this.props.navigation.push('Stadistics')}>
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
                                    <Button style={styles.Button3} onPress={() => this.props.navigation.push('Market')}>
                                        <Icon name="dollar" style={styles.icon}/>
                                        <Text style={styles.text}>MERCADO DE EQUIPOS</Text>
                                        <Icon name="chevron-right" style={styles.icon}/>
                                    </Button>
                                </TouchableHighlight>
                            </View>

                        </View>
                    } isOpen={this.state.isOpen} onChange={(isOpen) => this.updateMenu(isOpen)}>

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

                                            <Image style={styles.img}
                                                   source={{uri: 'http://www.pesstatsdatabase.com/PSD/PSD/Images/Clubs/Mexico/Puebla-FC.png'}}/>
                                            <Text style={styles.textTeam}> PUEBLA <Text
                                                style={styles.num}> 2 </Text></Text>
                                            <Text style={styles.textTeam}><Text
                                                style={styles.num}> 6 </Text> PACHUCA</Text>
                                            <Image style={styles.img}
                                                   source={{uri: 'http://cruzazulfc.com.mx/wp-content/uploads/2016/06/pachuca-1-128x128.png'}}/>

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

                                            <Image style={styles.img}
                                                   source={{uri: 'https://www.fifaindex.com/static/FIFA18/images/crest/256/light/111678.png'}}/>
                                            <Text onPress={() => this.props.navigation.push('Partido')}
                                                  style={styles.textTeam}> TIJUANA <Text
                                                style={styles.num}> 2 </Text></Text>
                                            <Text style={styles.textTeam}><Text style={styles.num}> 6 </Text> UNAM
                                            </Text>
                                            <Image style={styles.img}
                                                   source={{uri: 'http://www.futbol24.com/upload/team/Mexico/UNAM-Pumas.png'}}/>

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

                                            <Image style={styles.img}
                                                   source={{uri: 'https://img.vavel.com/b/club-america-icon-1.png'}}/>
                                            <Text onPress={() => this.props.navigation.push('Partido')}
                                                  style={styles.textTeam}> AMÉRICA <Text
                                                style={styles.num}> 2 </Text></Text>
                                            <Text style={styles.textTeam}><Text style={styles.num}> 6 </Text> CHIVAS
                                            </Text>
                                            <Image style={styles.img}
                                                   source={{uri: 'http://www.futbol24.com/upload/team/Mexico/Guadalajara-Chivas.png'}}/>

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

                                            <Image style={styles.textTeam}
                                                   source={{uri: 'http://3.bp.blogspot.com/-L1icUlsYWmM/Vf3OUEd96uI/AAAAAAAACSM/bzniL0t46sM/s1600/79.png'}}/>
                                            <Text onPress={() => this.props.navigation.push('Partido')}
                                                  style={styles.textTeam}> SANTOS <Text
                                                style={styles.num}> 2 </Text></Text>
                                            <Text style={styles.textTeam}><Text style={styles.num}> 6 </Text> ATLAS
                                            </Text>
                                            <Image style={styles.textTeam}
                                                   source={{uri: 'https://4.bp.blogspot.com/-xft_g9dSwHY/WV0RxiA0cKI/AAAAAAABLso/18QyiuHvzsI80J9FkPyRt_4NpsD_a1ibQCLcBGAs/s1600/Atlas%2BFC256x.png'}}/>

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
    },
    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: "#000"
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
});
