/**
 * SoccerMaster
 * @HackSite
 */

import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Copas from './src/components/glasses/Copas';
import TeamAfricana from './src/components/teams/TeamAfricana';
import TeamAmericana from './src/components/teams/TeamAmerica';
import TeamArgentina from './src/components/teams/TeamArgentina';
import TeamConfederaciones from './src/components/teams/TeamConfederaciones';
import TeamFemenil from './src/components/teams/TeamFemenil';
import TeamLibertadores from './src/components/teams/TeamLibertadores';
import TeamOro from './src/components/teams/TeamOro';
import TeamRey from './src/components/teams/TeamRey';
import TeamSudamericana from './src/components/teams/TeamSudamericana';
import Jornadas from './src/components/home/Jornadas';
import Partidos from './src/components/matches/Partidos';
import Partido from './src/components/matches/Partido';
import MarketTeam from './src/components/market/MarketTeam';
import Market from './src/components/market/Market';
import MarketPersonal from './src/components/market/MarketPersonal';
import Stadistics from './src/components/stadistics/Stadistics';
//import Inicio from './src/components/welcome/AfterFirstTime';

const Routes = createStackNavigator({
  Copas: Copas,
  TeamAfricana: TeamAfricana,
  TeamAmerica: TeamAmericana,
  TeamArgentina: TeamArgentina,
  TeamConfederaciones: TeamConfederaciones,
  TeamFemenil: TeamFemenil,
  TeamLibertadores: TeamLibertadores,
  TeamOro: TeamOro,
  TeamRey: TeamRey,
  TeamSudamericana: TeamSudamericana,
  Market: Market,
  Stadistics: Stadistics,
  Partidos: Partidos,
  MarketTeam: MarketTeam,
  Jornadas: Jornadas,
  MarketPersonal: MarketPersonal,
  Partido: Partido,
}, {
  initialRoute: 'Copas',
});

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}
