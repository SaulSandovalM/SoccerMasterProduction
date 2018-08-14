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
import PartidosRey from './src/components/matches/PartidosRey/PartidosRey';
import PartidosAfricana from './src/components/matches/PartidosAfricana/PartidosAfricana';
import PartidosAmerica from './src/components/matches/PartidosAmerica/PartidosAmerica';
import PartidosArgentina from './src/components/matches/PartidosArgentina/PartidosArgentina';
import PartidosConfederaciones from './src/components/matches/PartidosConfederaciones/PartidosConfederaciones';
import PartidosFemenil from './src/components/matches/PartidosFemenil/PartidosFemenil';
import PartidosLibertadores from './src/components/matches/PartidosLibertadores/PartidosLibertadores';
import PartidosOro from './src/components/matches/PartidosOro/PartidosOro';
import PartidosSudamericana from './src/components/matches/PartidosSudamericana/PartidosSudamericana';
import Partido from './src/components/matches/Partido';
import MarketTeam from './src/components/market/MarketTeam';
import StadisticsAfricana from './src/components/stadistics/StadisticsAfricana/StadisticsAfricana';
import StadisticsAmerica from './src/components/stadistics/StadisticsAmerica/StadisticsAmerica';
import StadisticsArgentina from './src/components/stadistics/StadisticsArgentina/StadisticsArgentina';
import StadisticsConfederaciones from './src/components/stadistics/StadisticsConfederaciones/StadisticsConfederaciones';
import StadisticsFemenil from './src/components/stadistics/StadisticsFemenil/StadisticsFemenil';
import StadisticsLibertadores from './src/components/stadistics/StadisticsLibertadores/StadisticsLibertadores';
import StadisticsOro from './src/components/stadistics/StadisticsOro/StadisticsOro';
import StadisticsRey from './src/components/stadistics/StadisticsRey/StadisticsRey';
import StadisticsSudamericana from './src/components/stadistics/StadisticsSudamericana/StadisticsSudamericana';
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
import MenuRey from './src/components/comun/MenuRey';
import MenuAfricana from './src/components/comun/MenuAfricana';
import MenuAmerica from './src/components/comun/MenuAmerica';
import MenuArgentina from './src/components/comun/MenuArgentina';
import MenuLibertadores from './src/components/comun/MenuLibertadores';
import MenuFemenil from './src/components/comun/MenuFemenil';
import MenuConfederaciones from './src/components/comun/MenuConfederaciones';
import MenuOro from './src/components/comun/MenuOro';
import MenuSudamericana from './src/components/comun/MenuSudamericana';
import Index from './src/components/login/Index';
import PartidosJugador from './src/components/matches/PartidosJugador/PartidosJugador';
import Profile from './src/components/profile/Profile';

const Routes = createStackNavigator({
  Login: Login,
  Thrashed: Thrashed,
  LoginPlayer: LoginPlayer,
  Copas: Copas,
  Index: Index,
  Menu: Menu,
  MenuRey: MenuRey,
  MenuAfricana: MenuAfricana,
  MenuAmerica: MenuAmerica,
  MenuArgentina: MenuArgentina,
  MenuConfederaciones: MenuConfederaciones,
  MenuFemenil: MenuFemenil,
  MenuLibertadores: MenuLibertadores,
  MenuOro: MenuOro,
  MenuSudamericana: MenuSudamericana,
  TeamAfricana: TeamAfricana,
  PartidosRey: PartidosRey,
  StadisticsAfricana: StadisticsAfricana,
  MarketAfricana: MarketAfricana,
  MarketPersonalAfricana: MarketPersonalAfricana,
  Partido: Partido,
  PartidosJugador: PartidosJugador,
  Profile: Profile,

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
