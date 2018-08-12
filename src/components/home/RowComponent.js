import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text, Icon, Badge, Left, Body, Right, Switch} from 'native-base';
import {TouchableWithoutFeedback, Animated, Alert, View, Image, StyleSheet} from 'react-native';

const ACTION_TIMER = 400;

class RowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      pressAction: new Animated.Value(0),
      item: null
    };
  }

  componentWillMount() {
    this._value = 0;
    this.state.pressAction.addListener((v) => this._value = v.value);
  }

  changeDone = (item) => {
    console.log(item);
  }

  pressIn = () => {
    Animated.timing(this.state.pressAction, {
        duration: ACTION_TIMER,
        toValue: 1
    }).start(this.animationActionComplete);
  }

  render() {
    return (
      <View style={styles.view2}>
        <View style={styles.margin}>
          <View style={styles.center}>
            <View style={styles.view}>
              <Text style={styles.color}>{this.props.item.name}</Text>
            </View>
            <Image style={styles.img} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
            <Text style={styles.color}> {this.props.item.horario} </Text>
            <Image style={styles.img} source={{uri: 'http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4245.png'}}/>
            <View style={styles.view}>
              <Text style={styles.color}>{this.props.item.nametwo}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 24
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    color: {
        color: 'white',
        fontWeight: 'bold',
    },
    date: {
        color: 'white',
        fontWeight: 'bold',
        margin: 8
    },
    view: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60
    },
    margin: {
        marginTop: 10,
        width: '95%',
        backgroundColor: 'grey',
        opacity: 0.8
    },
    center: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 70,
        height: 70
    },
    view2: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default RowComponent;
