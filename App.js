import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Copas from './src/components/home/Copas';
import Equipos from './src/components/home/Equipos';
import Jornadas from './src/components/home/Jornadas';
import Partidos from './src/components/home/Partidos';
import Partido from './src/components/home/Partido';
import MarketTeam from './src/components/market/MarketTeam';
import Market from './src/components/market/Market';
import MarketPersonal from './src/components/market/MarketPersonal';
import Stadistics from './src/components/stadistics/Stadistics';
import Footer from './src/components/comun/Footer';
import {YellowBox} from 'react-native';
//import Welcome from './src/components/welcome/Welcome';
//import Inicio from './src/components/welcome/AfterFirstTime';
//import Login from './src/components/login/Login';
//import Registro from './src/components/login/Registro';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Routes = createStackNavigator({
        Copas: Copas,
        Equipos: Equipos,
        Partidos: Partidos,
        MarketTeam: MarketTeam,
        Market: Market,
        Jornadas: Jornadas,
        MarketPersonal: MarketPersonal,
        Stadistics: {screen: Stadistics},
        Partido: Partido,
        Footer: Footer,
    },
    {
        initialRoute: 'Copas',
    });

export default class App extends React.Component {
    render() {
        return (
            <Routes/>
        );
    }
}
