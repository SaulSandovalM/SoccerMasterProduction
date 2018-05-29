import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Welcome from './src/components/welcome/Welcome';
import Home from './src/components/home/Home';
import Login from './src/components/login/Login';
import Registro from './src/components/login/Registro';
import MarketTeam from './src/components/market/MarketTeam';
import MarketPersonal from './src/components/market/MarketPersonal';
import Stadistics from './src/components/stadistics/Stadistics';
//import Inicio from './src/components/welcome/AfterFirstTime';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Routes = createStackNavigator({
      Welcome: Welcome,
      Login: Login,
      Registro: Registro,
      Home: Home,
      MarketTeam: MarketTeam,
      MarketPersonal: MarketPersonal,
      Stadistics: Stadistics,
    },
    {
      initialRoute: 'Welcome',
    });

export default class App extends React.Component {
  render() {
    return (
        <Routes/>
    );
  }
}
