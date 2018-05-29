import React from 'react';
import {View, Text, ViewPagerAndroid, StyleSheet, ImageBackground} from 'react-native';
import {Button} from 'native-base';
import img1 from '../../assets/imgs/1.jpg';
import img2 from '../../assets/imgs/2.jpg';
import img3 from '../../assets/imgs/3.jpg';

export default class Welcome extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
      return (
        <ViewPagerAndroid style={styles.viewPager} initialPage={0}>

          <View style={styles.pageStyle} key="1">
            <ImageBackground source={img1} style={styles.viewPager}>
              <Text style={styles.textStyle}>Infórmate {'\n'}{'\n'}
                <Text style={styles.textStyle2}>Sobre los horarios y disponibilidad de la cancha.</Text>
              </Text>
            </ImageBackground>
          </View>

          <View style={styles.pageStyle} key="2">
            <ImageBackground source={img2} style={styles.viewPager}>
              <Text style={styles.textStyle}>Navega {'\n'}{'\n'}
                <Text style={styles.textStyle2}>A través de las estadistícas de tus equipos y jugadores favoritos.</Text>
              </Text>
            </ImageBackground>
          </View>

          <View style={styles.pageStyle} key="3">
            <ImageBackground source={img3} style={styles.viewPager}>
              <Text style={styles.textStyle4}>Disfruta {'\n'}{'\n'}
                <Text style={styles.textStyle2}>De la buena experiencia y eficacia de esta plataforma.</Text>
              </Text>
              <Button rounded light style={styles.buttonStyle} onPress={() => this.props.navigation.push('Login')}>
                <Text style={styles.textStyle3}>¡Comencemos!</Text>
              </Button>
            </ImageBackground>
          </View>

        </ViewPagerAndroid>
      );
    } 
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 95,
    width: 200,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle2: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  textStyle3: {
    fontSize: 18,
    alignSelf: 'center',
  },
  textStyle4: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 15,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 140,
  },
});
