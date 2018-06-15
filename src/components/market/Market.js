/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {Container, Content, Header, Footer, FooterTab, Button, StyleProvider, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Market extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container style={styles.container}>

                    <Header style={styles.header}>
                        <Left>
                            <Button transparent>
                                <Icon name='navicon' style={styles.icon}/>
                            </Button>
                        </Left>
                        <Body>
                        <Text style={styles.icon}>MERCADO</Text>
                        </Body>
                        <Right>
                        </Right>
                    </Header>

                    <Content>

                        <View style={{marginTop: 30}}>
                          <TouchableHighlight onPress={() => this.props.navigation.push('MarketPersonal')}>
                            <View style={styles.back}>
                                <Text style={styles.num}>1</Text>
                                <Text style={styles.space}> - </Text>
                                <Image style={styles.img}
                                       source={{uri: 'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
                                <Text style={styles.team}>PACHUCA</Text>
                            </View>
                          </TouchableHighlight>

                          <TouchableHighlight onPress={() => this.props.navigation.push('MarketPersonal')}>
                            <View style={styles.back}>
                                <Text style={styles.num}>2</Text>
                                <Text style={styles.space}> - </Text>
                                <Image style={styles.img}
                                       source={{uri: 'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
                                <Text style={styles.team}>>CRUZ AZUL</Text>
                            </View>
                          </TouchableHighlight>

                          <TouchableHighlight onPress={() => this.props.navigation.push('MarketPersonal')}>
                            <View style={styles.back}>
                                <Text style={styles.num}>3</Text>
                                <Text style={styles.space}> - </Text>
                                <Image style={styles.img}
                                       source={{uri: 'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
                                <Text style={styles.team}>ATLAS</Text>
                            </View>
                          </TouchableHighlight>

                          <TouchableHighlight onPress={() => this.props.navigation.push('MarketPersonal')}>
                            <View style={styles.back}>
                                <Text style={styles.num}>4</Text>
                                <Text style={styles.space}> - </Text>
                                <Image style={styles.img}
                                       source={{uri: 'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
                                <Text style={styles.team}>PUEBLA</Text>
                            </View>
                          </TouchableHighlight>

                          <TouchableHighlight onPress={() => this.props.navigation.push('MarketPersonal')}>
                            <View style={styles.back}>
                                <Text style={styles.num}>5</Text>
                                <Text style={styles.space}> - </Text>
                                <Image style={styles.img}
                                       source={{uri: 'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
                                <Text style={styles.team}>AMERICA</Text>
                            </View>
                          </TouchableHighlight>

                          <TouchableHighlight onPress={() => this.props.navigation.push('MarketPersonal')}>
                            <View style={styles.back}>
                                <Text style={styles.num}>6</Text>
                                <Text style={styles.space}> - </Text>
                                <Image style={styles.img}
                                       source={{uri: 'https://i.pinimg.com/originals/9a/1d/8d/9a1d8d138b1fccc40c366468eb902437.png'}}/>
                                <Text style={styles.team}>CHIVAS</Text>
                            </View>
                          </TouchableHighlight>

                        </View>

                    </Content>

                    <Footer>
                        <FooterTab>
                            <Button onPress={() => this.props.navigation.push('Partidos')}>
                                <Icon name="soccer-ball-o" style={styles.icon}/>
                                <Text style={{color: 'white'}}>Partidos</Text>
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
    container: {
        backgroundColor: 'black'
    },
    header: {
        marginTop: 24
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
    back: {
        alignItems: 'center',
        backgroundColor: '#9F81F7',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    num: {
        color: 'white',
        fontSize: 20,
        marginTop: -10,
        marginLeft: 10,
        marginRight: 5
    },
    space: {
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
    }
});