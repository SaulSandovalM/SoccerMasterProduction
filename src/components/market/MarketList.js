import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

type Props = {};
export default class MarketList extends Component<Props> {
  render() {
    return (
      <View>
        <ScrollView>

          <View style={styles.container}>

            <View style={styles.view}>
              <Image style={styles.image} source={{uri: 'http://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2015/10/01/rostro_atractivo.jpg?itok=MoxSjXLi' }}/>
              <Text style={styles.name}>Saul Sandoval M</Text>
              <Text style={styles.name}>Defenza</Text>
            </View>

            <View style={styles.view}>
              <Image style={styles.image} source={{uri: 'http://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2015/10/01/rostro_atractivo.jpg?itok=MoxSjXLi' }}/>
              <Text style={styles.name}>Saul Sandoval M</Text>
              <Text style={styles.name}>Defenza</Text>
            </View>

          </View>

          <View style={styles.container}>

            <View style={styles.view}>
              <Image style={styles.image} source={{uri: 'http://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2015/10/01/rostro_atractivo.jpg?itok=MoxSjXLi' }}/>
              <Text style={styles.name}>Saul Sandoval M</Text>
              <Text style={styles.name}>Defenza</Text>
            </View>

            <View style={styles.view}>
              <Image style={styles.image} source={{uri: 'http://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2015/10/01/rostro_atractivo.jpg?itok=MoxSjXLi' }}/>
              <Text style={styles.name}>Saul Sandoval M</Text>
              <Text style={styles.name}>Defenza</Text>
            </View>

          </View>

          <View style={styles.container}>

            <View style={styles.view}>
              <Image style={styles.image} source={{uri: 'http://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2015/10/01/rostro_atractivo.jpg?itok=MoxSjXLi' }}/>
              <Text style={styles.name}>Saul Sandoval M</Text>
              <Text style={styles.name}>Defenza</Text>
            </View>

            <View style={styles.view}>
              <Image style={styles.image} source={{uri: 'http://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2015/10/01/rostro_atractivo.jpg?itok=MoxSjXLi' }}/>
              <Text style={styles.name}>Saul Sandoval M</Text>
              <Text style={styles.name}>Defenza</Text>
            </View>

          </View>

          <View style={styles.container}>

            <View style={styles.view}>
              <Image style={styles.image} source={{uri: 'http://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2015/10/01/rostro_atractivo.jpg?itok=MoxSjXLi' }}/>
              <Text style={styles.name}>Saul Sandoval M</Text>
              <Text style={styles.name}>Defenza</Text>
            </View>

            <View style={styles.view}>
              <Image style={styles.image} source={{uri: 'http://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2015/10/01/rostro_atractivo.jpg?itok=MoxSjXLi' }}/>
              <Text style={styles.name}>Saul Sandoval M</Text>
              <Text style={styles.name}>Defenza</Text>
            </View>

          </View>

          <View style={styles.container}>

            <View style={styles.view}>
              <Image style={styles.image} source={{uri: 'http://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2015/10/01/rostro_atractivo.jpg?itok=MoxSjXLi' }}/>
              <Text style={styles.name}>Saul Sandoval M</Text>
              <Text style={styles.name}>Defenza</Text>
            </View>

            <View style={styles.view}>
              <Image style={styles.image} source={{uri: 'http://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2015/10/01/rostro_atractivo.jpg?itok=MoxSjXLi' }}/>
              <Text style={styles.name}>Saul Sandoval M</Text>
              <Text style={styles.name}>Defenza</Text>
            </View>

          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  view: {
    height: 200,
    width: '50%'
  },
  image: {
    height: 150,
    width: '100%'
  },
  name: {
    marginLeft: 10,
    alignSelf: 'center'
  }
});
