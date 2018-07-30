/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, ImageBackground} from 'react-native';
import {Container, Content, Tab, Tabs, Button, Icon} from 'native-base';
import img3 from '../../assets/imgs/cancha.jpg';
import ListComponent from './MatchList';
import * as firebase from 'firebase';

export default class Index extends Component {
    constructor() {
        super();

        this.state = {
            nuevo: '',
            lista: []
        }
    }

    static navigationOptions = {
        header: null
    };

    listenForItems = (itemsRef) => {
        itemsRef.on('value', (snap) => {

            // get children as an array
            var lista = [];
            snap.forEach((child) => {
                lista.push({
                    name: child.val().name,
                    nametwo: child.val().nametwo,
                    horario: child.val().horario,
                    photos: child.val().photos,
                    done: child.val().done,
                    id: child.key
                });
            });

            this.setState({
                lista: lista
            });

        });
    };

    componentDidMount() {
        const itemsRef = firebase.database().ref('partidos');
        this.listenForItems(itemsRef);
    }

    render() {
        return (
            <Container>
                <ImageBackground source={img3} style={styles.viewPager}>
                    <Content>
                        <ListComponent
                            lista={this.state.lista}
                            changeDone={this.changeDone}
                        />
                    </Content>
                </ImageBackground>
            </Container>
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
    }
});
