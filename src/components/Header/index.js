import React, { Component } from 'react';

import { View, Image, Text } from 'react-native';

import { Container, Logo, CartIconWrapper, CartIconCounter } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component {
    render() {
        return (
            <Container>
                <Logo />
                <CartIconWrapper
                    onPress={() => this.props.navigation.navigate('Cart')}>
                    <Icon name="shopping-basket" color="#FFF" size={24} />
                    <CartIconCounter>{5}</CartIconCounter>
                </CartIconWrapper>
            </Container>
        );
    }
}
