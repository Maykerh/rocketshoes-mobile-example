import React, { Component } from 'react';

import { View, Image, Text } from 'react-native';

import { Container, Logo } from './styles';

export default class Header extends Component {
    render() {
        return (
            <Container>
                <Logo />
            </Container>
        );
    }
}
