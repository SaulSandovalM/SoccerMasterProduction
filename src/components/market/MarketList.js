import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Badge, Left, Body, Right, Switch, Button } from 'native-base';
import RowComponent from './RowComponent';


export default class MarketList extends Component {
    render() {
        return (
            <Container>
                <Content>
                    {this.props.lista.map(
                        item => <RowComponent
                            key={item.id}
                            item={item}
                            changeDone={this.props.changeDone}
                        />
                    )}
                </Content>
            </Container>
        );
    }
}