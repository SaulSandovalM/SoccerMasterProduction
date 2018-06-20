import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text, Icon, Badge, Left, Body, Right, Switch} from 'native-base';
import {TouchableWithoutFeedback, Animated, Alert, View} from 'react-native';

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
//        this.setState({done:!this.state.done});
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
            <View>
                <ListItem onPress={() => navigation.push('MarketPersonal')}>
                    <Body>
                    <Text>{this.props.item.name}</Text>
                    <Text note>Numero de copas: {this.props.item.cant}</Text>
                    <Text note>Precio: ${this.props.item.price} mil</Text>
                    </Body>
                </ListItem>
            </View>


        );
    }

}

export default RowComponent;