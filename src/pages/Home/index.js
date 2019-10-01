import React, { Component } from 'react';

import { View, Text } from 'react-native';
import Header from '../../components/Header';

import { Container } from './styles';

import api from '../../services/api';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.loadProducts = this.loadProducts.bind(this);

        this.state = {
            products: [],
        };
    }

    static navigationOptions = {
        headerTitle: <Header />,
    };

    componentDidMount() {
        this.loadProducts();
    }

    async loadProducts() {
        const result = await api.get('/products');
        alert(result);
        console.tron.log(result);
    }

    render() {
        return (
            <Container>
                <Text>{'product'}</Text>
            </Container>
        );
    }
}
