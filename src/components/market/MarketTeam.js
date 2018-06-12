/**
 * SoccerMaster
 * @HackSite
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, ImageBackground} from 'react-native';
import ListComponent from './MarketList';
import * as firebase from 'firebase';
import img3 from '../../assets/imgs/cancha2.jpg';

export default class MarketTeam extends Component {
    constructor() {
        super();

        this.state = {
            nuevo: '',
            lista: [],
        }

    };

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
                    price: child.val().price,
                    cant:child.val().cant,
                    done: child.val().done,
                    id: child.key
                });
            });

            this.setState({
                lista: lista
            });

        });
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('products');
        this.listenForItems(itemsRef);
    }

    render() {
        return (
            <View style={styles.container}>

                <ScrollView>

                    <ListComponent
                        lista={this.state.lista}
                        changeDone={this.changeDone}
                    />

                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flexDirection: 'row',
    },
    container3: {
        flexDirection: 'row',
        backgroundColor: '#404040'
    },
    container4: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: '10%'
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 8
    },
    info: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50,
        marginLeft: 8
    },
    direction: {
        flexDirection: 'row',
        marginTop: 10
    },
    height: {
        color: '#c0c0c0',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 5
    },
    atr: {
        color: '#c0c0c0',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 8,
        marginTop: 10
    },
    sta: {
        color: '#c0c0c0',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 8,
        marginTop: 5,
    },
    atr2: {
        color: 'white',
        fontSize: 20,
        marginLeft: 8,
        marginTop: 10,
        width: 250
    },
    atr3: {
        color: 'white',
        fontSize: 20,
        marginLeft: 8,
        marginTop: 10
    },
    atr4: {
        color: 'white',
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
        alignItems: 'center'
    },
    color: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    }
});
