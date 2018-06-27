import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Footer, FooterTab, Button, StyleProvider} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Footers extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Footer>
                    <FooterTab>
                        <Button onPress={() => navigation.push('Equipos')}>
                            <Icon name="soccer-ball-o" style={styles.icon}/>
                            <Text style={styles.color}>Equipos</Text>
                        </Button>
                        <Button onPress={() => this.props.navigation.push('Stadistics')}>
                            <Icon name="bar-chart-o" style={styles.icon}/>
                            <Text style={styles.color}>Estadisticas</Text>
                        </Button>
                        <Button onPress={() => this.props.navigation.push('Market')}>
                            <Icon name="dollar" style={styles.icon}/>
                            <Text style={styles.color}>Mercado</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        color: 'white',
        fontSize: 20,
    },
    color: {
        color: 'white'
    }
});
