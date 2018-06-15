/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';

export default class Jornadas extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text1}>ELIGE JORNADA</Text>
                <Text style={styles.text2}>TOCA PARA EFECTUAR SELECCIÓN</Text>

                <ScrollView>

                    <View style={styles.view}>
                        <TouchableHighlight onPress={() => this.props.navigation.push('Market')} style={styles.touch}>
                            <Text style={{color:'white'}}>JORNADA</Text>
                            <Text style={{fontSize: 45, fontWeight:'bold', color:'white'}}>1</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
                            <Image style={styles.img}
                                   source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/3678.png'}}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
                            <Image style={styles.img}
                                   source={{uri: 'https://i.pinimg.com/originals/02/a5/8b/02a58bd2d8fbf380e1a9fe9d901e5a7d.png'}}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
                            <Image style={styles.img}
                                   source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Escudo_del_Cruz_Azul_AC.svg/1024px-Escudo_del_Cruz_Azul_AC.svg.png'}}/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.view}>
                        <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
                            <Image style={styles.img}
                                   source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/3981.png'}}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
                            <Image style={styles.img}
                                   source={{uri: 'https://es.onefootball.com/wp-content/uploads/sites/12/2017/06/Necaxa.png'}}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
                            <Image style={styles.img}
                                   source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4248.png'}}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
                            <Image style={styles.img}
                                   source={{uri: 'https://vignette.wikia.nocookie.net/futbol/images/3/3a/FC_Barcelona_Escudo.png/revision/latest?cb=20150709184757'}}/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.view}>
                        <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
                            <Image style={styles.img}
                                   source={{uri: 'https://i.pinimg.com/originals/97/2d/bf/972dbff4aca945be528fc22fae7ccd1d.png'}}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
                            <Image style={styles.img}
                                   source={{uri: 'https://www.deportetotal.mx/wp-content/uploads/2017/04/puebla.png'}}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
                            <Image style={styles.img}
                                   source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Escudo_Millos_70_a%C3%B1os_2.svg/1200px-Escudo_Millos_70_a%C3%B1os_2.svg.png'}}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.push('Partidos')} style={styles.touch}>
                            <Image style={styles.img}
                                   source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/3294/3294.png'}}/>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.margin}/>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    },
    text1: {
        fontSize: 20,
        marginTop: 50,
        color: 'white',
        alignSelf: 'center'
    },
    text2: {
        color: 'grey',
        alignSelf: 'center',
        fontSize: 15,
        marginTop: 10,
        height: 30
    },
    view: {
        flexDirection: 'row'
    },
    touch: {
        width: '23%',
        height: 160,
        margin: '1%',
        alignItems: 'center',

    },
    img: {
        width: '100%',
        height: 160,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey'
    },
    margin: {
        marginTop: 120
    }
});
