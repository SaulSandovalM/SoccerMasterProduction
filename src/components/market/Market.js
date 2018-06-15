/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
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
                        <Text style={styles.icon}>JORNADA</Text>
                        </Body>
                        <Right>
                        </Right>
                    </Header>

                    <Content>

                        <View style={{marginTop: 30}}>

                        </View>

                    </Content>

                    <Footer>
                        <FooterTab>
                            <Button>
                                <Icon name="soccer-ball-o" style={styles.icon}/>
                                <Text style={{color: 'white'}}>Partidos</Text>
                            </Button>
                            <Button>
                                <Icon name="bar-chart-o" style={styles.icon}/>
                                <Text style={{color: 'white'}}>Estadisticas</Text>
                            </Button>
                            <Button>
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
    }
});
