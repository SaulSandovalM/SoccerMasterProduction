/**
 * SoccerMaster
 * @HackSite
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Container, Content, Button, StyleProvider, Left, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../comun/Header';
import Footer from '../comun/Footer';

export default class Stadistics extends Component {
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

          <Header/>

          <Content>
              <View style={{marginTop: 30}}>

                <View style={{
                    alignItems: 'center',
                    backgroundColor: '#e31114',
                    width: '100%',
                    height: 100,
                    flexDirection: 'row',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    marginTop: -20
                }}>

                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    marginTop: -10,
                    marginLeft: 10,
                    marginRight: 5
                }}>1</Text>

                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginLeft: 5,
                                    marginRight: 10
                                }}> - </Text>
                                <Image style={{width: 40, height: 40, marginTop: -10, marginRight: 5}}
                                       source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    width: 150
                                }}>PACHUCA</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>10</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>20</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>30</Text>
                            </View>

                            <View style={{
                                alignItems: 'center',
                                backgroundColor: '#008641',
                                width: '100%',
                                height: 100,
                                flexDirection: 'row',
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                                marginTop: -20
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginLeft: 10,
                                    marginRight: 5
                                }}>1</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginLeft: 5,
                                    marginRight: 10
                                }}> - </Text>
                                <Image style={{width: 40, height: 40, marginTop: -10, marginRight: 5}}
                                       source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    width: 150
                                }}>PACHUCA</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>10</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>20</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>30</Text>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                backgroundColor: '#131e7d',
                                width: '100%',
                                height: 100,
                                flexDirection: 'row',
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                                marginTop: -20
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginLeft: 10,
                                    marginRight: 5
                                }}>1</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginLeft: 5,
                                    marginRight: 10
                                }}> - </Text>
                                <Image style={{width: 40, height: 40, marginTop: -10, marginRight: 5}}
                                       source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    width: 150
                                }}>PACHUCA</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>10</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>20</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>30</Text>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                backgroundColor: '#272727',
                                width: '100%',
                                height: 100,
                                flexDirection: 'row',
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                                marginTop: -20
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginLeft: 10,
                                    marginRight: 5
                                }}>1</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginLeft: 5,
                                    marginRight: 10
                                }}> - </Text>
                                <Image style={{width: 40, height: 40, marginTop: -10, marginRight: 5}}
                                       source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    width: 150
                                }}>PACHUCA</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>10</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>20</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>30</Text>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                backgroundColor: '#ffcb0a',
                                width: '100%',
                                height: 100,
                                flexDirection: 'row',
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                                marginTop: -20
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginLeft: 10,
                                    marginRight: 5
                                }}>1</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginLeft: 5,
                                    marginRight: 10
                                }}> - </Text>
                                <Image style={{width: 40, height: 40, marginTop: -10, marginRight: 5}}
                                       source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    width: 150
                                }}>PACHUCA</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>10</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>20</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>30</Text>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                backgroundColor: '#006ad6',
                                width: '100%',
                                height: 100,
                                flexDirection: 'row',
                                borderTopLeftRadius: 15,
                                borderTopRightRadius: 15,
                                marginTop: -20
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginLeft: 10,
                                    marginRight: 5
                                }}>1</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginLeft: 5,
                                    marginRight: 10
                                }}> - </Text>
                                <Image style={{width: 40, height: 40, marginTop: -10, marginRight: 5}}
                                       source={{uri: 'https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11/11.png'}}/>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    width: 150
                                }}>PACHUCA</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>10</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>20</Text>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginTop: -10,
                                    marginRight: 10
                                }}>30</Text>
                            </View>
                        </View>
                    </Content>

                    <Footer/>

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
    icon: {
        color: 'white',
        fontSize: 20
    },
    fecha: {
        color: 'grey',
        alignSelf: 'center',
        fontSize: 15,
        marginTop: 15
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
});
