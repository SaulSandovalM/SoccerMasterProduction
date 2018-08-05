import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Copas from './src/components/glasses/Copas';
import TeamAfricana from './src/components/teams/TeamAfricana';
import TeamAmerica from './src/components/teams/TeamAmerica';
import TeamArgentina from './src/components/teams/TeamArgentina';
import TeamConfederaciones from './src/components/teams/TeamConfederaciones';
import TeamFemenil from './src/components/teams/TeamFemenil';
import TeamLibertadores from './src/components/teams/TeamLibertadores';
import TeamOro from './src/components/teams/TeamOro';
import TeamRey from './src/components/teams/TeamRey';
import TeamSudamericana from './src/components/teams/TeamSudamericana';
import PartidosRey from './src/components/matches/PartidosRey';
import PartidosAfricana from './src/components/matches/PartidosAfricana';
import PartidosAmerica from './src/components/matches/PartidosAmerica';
import PartidosArgentina from './src/components/matches/PartidosArgentina';
import PartidosConfederaciones from './src/components/matches/PartidosConfederaciones';
import PartidosFemenil from './src/components/matches/PartidosFemenil';
import PartidosLibertadores from './src/components/matches/PartidosLibertadores';
import PartidosOro from './src/components/matches/PartidosOro';
import PartidosSudamericana from './src/components/matches/PartidosSudamericana';
import Partido from './src/components/matches/Partido';
import MarketTeam from './src/components/market/MarketTeam';
import Market from './src/components/market/Market';
import MarketPersonal from './src/components/market/MarketPersonal';
import Stadistics from './src/components/stadistics/Stadistics';
//import Inicio from './src/components/welcome/AfterFirstTime';

const Routes = createStackNavigator({
  Copas: Copas,
  Market: Market,
  Stadistics: Stadistics,
  TeamAfricana: TeamAfricana,
  TeamAmerica: TeamAmerica,
  TeamArgentina: TeamArgentina,
  TeamConfederaciones: TeamConfederaciones,
  TeamFemenil: TeamFemenil,
  TeamLibertadores: TeamLibertadores,
  TeamOro: TeamOro,
  TeamRey: TeamRey,
  TeamSudamericana: TeamSudamericana,
  Market: Market,
  PartidosRey: PartidosRey,
  PartidosAmerica: PartidosAmerica,
  PartidosOro: PartidosOro,
  PartidosLibertadores: PartidosLibertadores,
  PartidosAfricana: PartidosAfricana,
  PartidosArgentina: PartidosArgentina,
  PartidosConfederaciones: PartidosConfederaciones,
  PartidosSudamericana: PartidosSudamericana,
  PartidosFemenil: PartidosFemenil,
  MarketTeam: MarketTeam,
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
