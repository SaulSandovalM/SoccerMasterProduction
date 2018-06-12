import React from 'react';
import {createStackNavigator} from 'react-navigation';
//import Welcome from './src/components/welcome/Welcome';
import Copas from './src/components/home/Copas';
import Equipos from './src/components/home/Equipos';
import Partidos from './src/components/home/Partidos';
//import Login from './src/components/login/Login';
//import Registro from './src/components/login/Registro';
import MarketTeam from './src/components/market/MarketTeam';
import Market from './src/components/market/Market';
import MarketPersonal from './src/components/market/MarketPersonal';
import Stadistics from './src/components/stadistics/Stadistics';
//import Inicio from './src/components/welcome/AfterFirstTime';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Routes = createStackNavigator({
      Copas: Copas,
      Equipos: Equipos,
      Partidos: Partidos,
      MarketTeam: MarketTeam,
      Market: Market,
      MarketPersonal: MarketPersonal,
      Stadistics: Stadistics,
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
