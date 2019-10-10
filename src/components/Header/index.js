import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Logo, CartIconWrapper, CartIconCounter } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ navigation, cartSize }) => {
    return (
        <Container>
            <Logo />
            <CartIconWrapper onPress={() => navigation.navigate('Cart')}>
                <Icon name="shopping-basket" color="#FFF" size={24} />
                <CartIconCounter>{cartSize}</CartIconCounter>
            </CartIconWrapper>
        </Container>
    );
};

export default connect(
    state => ({
        cartSize: state.cart.length,
    }),
    null
)(Header);
