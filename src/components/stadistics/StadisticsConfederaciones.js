import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Button, StyleProvider, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import Header from '../comun/Header';
import SideMenu from 'react-native-side-menu';
import Menu from '../comun/Menu';
import Soccer from '../../assets/imgs/Soccer.png';

export default class StadisticsConfederaciones extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateMenu(isOpen){
    this.setState({isOpen})
  }

  static navigationOptions = {
      header: null
  };

  render() {
    return (
      <StyleProvider style={getTheme(material)}>

        <Container style={styles.container}>

          <SideMenu menu={<Menu/>} isOpen={this.state.isOpen} onChange={(isOpen) => this.updateMenu(isOpen)}>

          <Header toggle={this.toggle.bind(this)}/>

          <Content style={styles.container}>

            <View style={styles.margin}>

              <View style={styles.view}>
                <Text style={styles.num}>1</Text>
                <Text style={styles.liner}> - </Text>
                <Image style={styles.img}
                 source={Soccer}/>
                <Text style={styles.copa}>COPA 1</Text>
                <Text style={styles.stadistics}>PJ</Text>
                <Text style={styles.stadistics}>PP</Text>
                <Text style={styles .stadistics}>PTS</Text>
              </View>

              <View style={styles.view0}>
                <Text style={styles.num}>1</Text>
                <Text style={styles.liner}> - </Text>
                <Image style={styles.img}
                 source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                <Text style={styles.team}>PACHUCA</Text>
                <Text style={styles.stadistic}>10</Text>
                <Text style={styles.stadistic}>20</Text>
                <Text style={styles .stadistic}>30</Text>
              </View>

              <View style={styles.view2}>
                <Text style={styles.num}>1</Text>
                <Text style={styles.liner}> - </Text>
                <Image style={styles.img}
                 source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                <Text style={styles.team}>PACHUCA</Text>
                <Text style={styles.stadistic}>10</Text>
                <Text style={styles.stadistic}>20</Text>
                <Text style={styles.stadistic}>30</Text>
              </View>

              <View style={styles.view3}>
                <Text style={styles.num}>1</Text>
                <Text style={styles.liner}> - </Text>
                <Image style={styles.img}
                 source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                <Text style={styles.team}>PACHUCA</Text>
                <Text style={styles.stadistic}>10</Text>
                <Text style={styles.stadistic}>20</Text>
                <Text style={styles.stadistic}>30</Text>
              </View>

              <View style={styles.view4}>
                <Text style={styles.num}>1</Text>
                <Text style={styles.liner}> - </Text>
                <Image style={styles.img}
                 source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                <Text style={styles.team}>PACHUCA</Text>
                <Text style={styles.stadistic}>10</Text>
                <Text style={styles.stadistic}>20</Text>
                <Text style={styles.stadistic}>30</Text>
              </View>

              <View style={styles.view5}>
                <Text style={styles.num}>1</Text>
                <Text style={styles.liner}> - </Text>
                <Image style={styles.img}
                 source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                <Text style={styles.team}>PACHUCA</Text>
                <Text style={styles.stadistic}>10</Text>
                <Text style={styles.stadistic}>20</Text>
                <Text style={styles.stadistic}>30</Text>
              </View>

              <View style={styles.view6}>
                <Text style={styles.num}>1</Text>
                <Text style={styles.liner}> - </Text>
                <Image style={styles.img}
                 source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                <Text style={styles.team}>PACHUCA</Text>
                <Text style={styles.stadistic}>10</Text>
                <Text style={styles.stadistic}>20</Text>
                <Text style={styles.stadistic}>30</Text>
              </View>

            </View>

          </Content>

          </SideMenu>

        </Container>

      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  margin: {
    marginTop: 30
  },
  view0: {
    alignItems: 'center',
    backgroundColor: '#e31114',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -20
  },
  view: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -20
  },
  num: {
    color: 'white',
    fontSize: 20,
    marginTop: -10,
    marginLeft: 10,
    marginRight: 5
  },
  liner: {
    color: 'white',
    fontSize: 20,
    marginTop: -10,
    marginLeft: 5,
    marginRight: 10
  },
  img: {
    width: 40,
    height: 40,
    marginTop: -10,
    marginRight: 5
  },
  team: {
    color: 'white',
    fontSize: 20,
    marginTop: -10,
    width: 150
  },
  stadistic: {
    color: 'white',
    fontSize: 20,
    marginTop: -10,
    marginRight: 10
  },
  view2: {
    alignItems: 'center',
    backgroundColor: '#008641',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -20
  },
  view3: {
    alignItems: 'center',
    backgroundColor: '#131e7d',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -20
  },
  view4: {
    alignItems: 'center',
    backgroundColor: '#272727',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -20
  },
  view5: {
    alignItems: 'center',
    backgroundColor: '#ffcb0a',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -20
  },
  view6: {
    alignItems: 'center',
    backgroundColor: '#006ad6',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -20
  },
  stadistics: {
    color: 'black',
    fontSize: 20,
    marginTop: -10,
    marginRight: 10
  },
  copa: {
    color: 'black',
    fontSize: 20,
    marginTop: -10,
    width: 150
  }
});
