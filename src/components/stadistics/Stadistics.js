/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableHighlight} from 'react-native';
import {Container, Content, Button, StyleProvider, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../comun/Header';
import SideMenu from 'react-native-side-menu';
import Menu from '../comun/Menu';
import Soccer from '../../assets/imgs/Soccer.png';

const {width, height} = Dimensions.get('window')


export default class Stadistics extends Component {
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
                                <Text style={styles.section}>ESTADÍSTICAS</Text>
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
                                <Text style={styles.section}>ENFRENTAMIENTOS</Text>
                            </View>

                            <View>
                                <TouchableHighlight>
                                    <Button style={styles.Button1}
                                            onPress={() => this.props.navigation.push('Partidos')}>
                                        <Icon name="th-list" style={styles.icon2}/>
                                        <Text style={styles.text2}>PARTIDOS</Text>
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

                        <Content style={styles.container}>

                            <View style={styles.margin}>

                                <View style={styles.view}>
                                    <Text style={styles.num}>1</Text>
                                    <Text style={styles.liner}> - </Text>
                                    <Image style={styles.img}
                                           source={Soccer}/>
                                    <Text style={styles.copa}>COPA 1</Text>
                                    <Text style={styles.stadistics}>PJ</Text>
                                    <Text style={styles.stadistics}>PP</Text>
                                    <Text style={styles.stadistics}>PTS</Text>
                                </View>

                                <View style={styles.view0}>
                                    <Text style={styles.num}>1</Text>
                                    <Text style={styles.liner}> - </Text>
                                    <Image style={styles.img}
                                           source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                                    <Text style={styles.team}>PACHUCA</Text>
                                    <Text style={styles.stadistic}>10</Text>
                                    <Text style={styles.stadistic}>20</Text>
                                    <Text style={styles.stadistic}>30</Text>
                                </View>

                                <View style={styles.view2}>
                                    <Text style={styles.num}>1</Text>
                                    <Text style={styles.liner}> - </Text>
                                    <Image style={styles.img}
                                           source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                                    <Text style={styles.team}>PACHUCA</Text>
                                    <Text style={styles.stadistic}>10</Text>
                                    <Text style={styles.stadistic}>20</Text>
                                    <Text style={styles.stadistic}>30</Text>
                                </View>

                                <View style={styles.view3}>
                                    <Text style={styles.num}>1</Text>
                                    <Text style={styles.liner}> - </Text>
                                    <Image style={styles.img}
                                           source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                                    <Text style={styles.team}>PACHUCA</Text>
                                    <Text style={styles.stadistic}>10</Text>
                                    <Text style={styles.stadistic}>20</Text>
                                    <Text style={styles.stadistic}>30</Text>
                                </View>

                                <View style={styles.view4}>
                                    <Text style={styles.num}>1</Text>
                                    <Text style={styles.liner}> - </Text>
                                    <Image style={styles.img}
                                           source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                                    <Text style={styles.team}>PACHUCA</Text>
                                    <Text style={styles.stadistic}>10</Text>
                                    <Text style={styles.stadistic}>20</Text>
                                    <Text style={styles.stadistic}>30</Text>
                                </View>

                                <View style={styles.view5}>
                                    <Text style={styles.num}>1</Text>
                                    <Text style={styles.liner}> - </Text>
                                    <Image style={styles.img}
                                           source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                                    <Text style={styles.team}>PACHUCA</Text>
                                    <Text style={styles.stadistic}>10</Text>
                                    <Text style={styles.stadistic}>20</Text>
                                    <Text style={styles.stadistic}>30</Text>
                                </View>

                                <View style={styles.view6}>
                                    <Text style={styles.num}>1</Text>
                                    <Text style={styles.liner}> - </Text>
                                    <Image style={styles.img}
                                           source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                                    <Text style={styles.team}>PACHUCA</Text>
                                    <Text style={styles.stadistic}>10</Text>
                                    <Text style={styles.stadistic}>20</Text>
                                    <Text style={styles.stadistic}>30</Text>
                                </View>

                            </View>
                        </Content>

                    </SideMenu>

                </Container>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    margin: {
        marginTop: 30
    },
    view0: {
        alignItems: 'center',
        backgroundColor: '#e31114',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -20
    },
    view: {
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: 80,
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -20
    },
    num: {
        color: 'white',
        fontSize: 20,
        marginTop: -10,
        marginLeft: 10,
        marginRight: 5
    },
    liner: {
        color: 'white',
        fontSize: 20,
        marginTop: -10,
        marginLeft: 5,
        marginRight: 10
    },
    img: {
        width: 40,
        height: 40,
        marginTop: -10,
        marginRight: 5
    },
    team: {
        color: 'white',
        fontSize: 20,
        marginTop: -10,
        width: 150
    },
    stadistic: {
        color: 'white',
        fontSize: 20,
        marginTop: -10,
        marginRight: 10
    },
    view2: {
        alignItems: 'center',
        backgroundColor: '#008641',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -20
    },
    view3: {
        alignItems: 'center',
        backgroundColor: '#131e7d',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -20
    },
    view4: {
        alignItems: 'center',
        backgroundColor: '#272727',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -20
    },
    view5: {
        alignItems: 'center',
        backgroundColor: '#ffcb0a',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -20
    },
    view6: {
        alignItems: 'center',
        backgroundColor: '#006ad6',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: -20
    },
    icon: {
        color: 'white',
        fontSize: 20
    },
    fecha: {
        color: 'grey',
        alignSelf: 'center',
        fontSize: 15,
        marginTop: 15
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    stadistics: {
        color: 'black',
        fontSize: 20,
        marginTop: -10,
        marginRight: 10
    },
    copa: {
        color: 'black',
        fontSize: 20,
        marginTop: -10,
        width: 150
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
