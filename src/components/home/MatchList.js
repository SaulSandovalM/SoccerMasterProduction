import React, { Component } from 'react';
import { Container, Content} from 'native-base';
import RowComponent from './RowComponent';


export default class MatchList extends Component {
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