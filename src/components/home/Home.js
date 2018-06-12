/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, ImageBackground} from 'react-native';
import {Container, Content, Tab, Tabs, Header, StyleProvider} from 'native-base';
import img3 from '../../assets/imgs/pasto.jpg';
import Index from './Index';
import Stadistics from '../stadistics/Stadistics';
import Market from '../market/MarketTeam';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Home extends Component {


    static navigationOptions = {
        header: null
    };


    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <ImageBackground source={img3} style={styles.viewPager}>

                        <Header hasTabs/>

                        <Tabs initialPage={1}>
                            <Tab heading="Inicio">
                                <Index/>
                            </Tab>
                            <Tab heading="Estadisticas">
                                <Stadistics/>
                            </Tab>
                            <Tab heading="Mercado">
                                <Market/>
                            </Tab>
                        </Tabs>

                    </ImageBackground>
                </Container>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 24
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    color: {
        color: 'white',
        fontWeight: 'bold',
    },
    date: {
        color: 'white',
        fontWeight: 'bold',
        margin: 8
    },
    view: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60
    },
    margin: {
        marginTop: 10,
        width: '95%',
        backgroundColor: 'grey',
        opacity: 0.8
    },
    center: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 70,
        height: 70
    },
    view2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 85
    }
});
