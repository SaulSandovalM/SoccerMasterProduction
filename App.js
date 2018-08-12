import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from './src/components/login/Login';
import LoginPlayer from './src/components/login/LoginPlayer';
import Copas from './src/components/glasses/Copas';
import TeamAfricana from './src/components/teams/CopaAfricana/TeamAfricana';
import TeamAmerica from './src/components/teams/CopaAmerica/TeamAmerica';
import TeamArgentina from './src/components/teams/CopaArgentina/TeamArgentina';
import TeamConfederaciones from './src/components/teams/CopaConfederaciones/TeamConfederaciones';
import TeamFemenil from './src/components/teams/CopaFemenil/TeamFemenil';
import TeamLibertadores from './src/components/teams/CopaLibertadores/TeamLibertadores';
import TeamOro from './src/components/teams/CopaOro/TeamOro';
import TeamRey from './src/components/teams/CopaRey/TeamRey';
import TeamSudamericana from './src/components/teams/CopaSudamericana/TeamSudamericana';
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
import StadisticsAfricana from './src/components/stadistics/StadisticsAfricana';
import StadisticsAmerica from './src/components/stadistics/StadisticsAmerica';
import StadisticsArgentina from './src/components/stadistics/StadisticsArgentina';
import StadisticsConfederaciones from './src/components/stadistics/StadisticsConfederaciones';
import StadisticsFemenil from './src/components/stadistics/StadisticsFemenil';
import StadisticsLibertadores from './src/components/stadistics/StadisticsLibertadores';
import StadisticsOro from './src/components/stadistics/StadisticsOro';
import StadisticsRey from './src/components/stadistics/StadisticsRey';
import StadisticsSudamericana from './src/components/stadistics/StadisticsSudamericana';
import MarketAfricana from './src/components/market/MarketAfricana';
import MarketAmerica from './src/components/market/MarketAmerica';
import MarketArgentina from './src/components/market/MarketArgentina';
import MarketConfederaciones from './src/components/market/MarketConfederaciones';
import MarketFemenil from './src/components/market/MarketFemenil';
import MarketLibertadores from './src/components/market/MarketLibertadores';
import MarketOro from './src/components/market/MarketOro';
import MarketRey from './src/components/market/MarketRey';
import MarketSudamericana from './src/components/market/MarketSudamericana';
import MarketPersonalAfricana from './src/components/market/MarketPersonalAfricana';
import MarketPersonalAmerica from './src/components/market/MarketPersonalAmerica';
import MarketPersonalArgentina from './src/components/market/MarketPersonalArgentina';
import MarketPersonalConfederaciones from './src/components/market/MarketPersonalConfederaciones';
import MarketPersonalFemenil from './src/components/market/MarketPersonalFemenil';
import MarketPersonalLibertadores from './src/components/market/MarketPersonalLibertadores';
import MarketPersonalOro from './src/components/market/MarketPersonalOro';
import MarketPersonalRey from './src/components/market/MarketPersonalRey';
import MarketPersonalSudamericana from './src/components/market/MarketPersonalSudamericana';
import Thrashed from './src/components/thrashed/Thrashed';
import Menu from './src/components/comun/Menu';
import Index from './src/components/login/Index';

const Routes = createStackNavigator({
  Login: Login,
  LoginPlayer: LoginPlayer,
  Copas: Copas,
  Index: Index,
  Menu: Menu,
  TeamAfricana: TeamAfricana,
  PartidosRey: PartidosRey,
  StadisticsAfricana: StadisticsAfricana,
  MarketAfricana: MarketAfricana,
  MarketPersonalAfricana: MarketPersonalAfricana,
  Thrashed: Thrashed,
  Partido: Partido,

  TeamAmerica: TeamAmerica,
  TeamArgentina: TeamArgentina,
  TeamConfederaciones: TeamConfederaciones,
  TeamFemenil: TeamFemenil,
  TeamLibertadores: TeamLibertadores,
  TeamOro: TeamOro,
  TeamRey: TeamRey,
  TeamSudamericana: TeamSudamericana,
  PartidosAmerica: PartidosAmerica,
  PartidosOro: PartidosOro,
  PartidosLibertadores: PartidosLibertadores,
  PartidosAfricana: PartidosAfricana,
  PartidosArgentina: PartidosArgentina,
  PartidosConfederaciones: PartidosConfederaciones,
  PartidosSudamericana: PartidosSudamericana,
  PartidosFemenil: PartidosFemenil,
  StadisticsAmerica: StadisticsAmerica,
  StadisticsArgentina: StadisticsArgentina,
  StadisticsConfederaciones: StadisticsConfederaciones,
  StadisticsFemenil: StadisticsFemenil,
  StadisticsLibertadores: StadisticsLibertadores,
  StadisticsOro: StadisticsOro,
  StadisticsRey: StadisticsRey,
  StadisticsSudamericana: StadisticsSudamericana,
  MarketAmerica: MarketAmerica,
  MarketArgentina: MarketArgentina,
  MarketConfederaciones: MarketConfederaciones,
  MarketFemenil: MarketFemenil,
  MarketLibertadores: MarketLibertadores,
  MarketOro: MarketOro,
  MarketRey: MarketRey,
  MarketSudamericana: MarketSudamericana,
  MarketPersonalAmerica: MarketPersonalAmerica,
  MarketPersonalArgentina: MarketPersonalArgentina,
  MarketPersonalConfederaciones: MarketPersonalConfederaciones,
  MarketPersonalFemenil: MarketPersonalFemenil,
  MarketPersonalLibertadores: MarketPersonalLibertadores,
  MarketPersonalOro: MarketPersonalOro,
  MarketPersonalRey: MarketPersonalRey,
  MarketPersonalSudamericana: MarketPersonalSudamericana,
}, {
  initialRoute: 'Login',
});

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}
