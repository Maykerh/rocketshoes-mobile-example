import React, { Component } from 'react';

import { View, Text } from 'react-native';
import Header from '../../components/Header';

import { formatPrice } from '../../util/format';

import {
    Container,
    ProductCard,
    ProductList,
    ProductImage,
    ProductTitle,
    AddButton,
    ButtonText,
    QuantityWrapper,
    ButtonTextWrapper,
    PriceText,
} from './styles';

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

        const data = result.data.map(product => ({
            ...product,
            titleFormated: product.title.substr(0, 40),
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({
            products: data,
        });
    }

    renderProducts(product) {
        console.tron.log(product);
        return (
            <ProductCard key={product.item.id}>
                <ProductImage source={{ uri: product.item.image }} />
                <ProductTitle>{product.item.titleFormated}</ProductTitle>
                <PriceText>{product.item.priceFormatted}</PriceText>
                <AddButton>
                    <QuantityWrapper>
                        <ButtonText>{0}</ButtonText>
                    </QuantityWrapper>
                    <ButtonTextWrapper>
                        <ButtonText>{'Adicionar'}</ButtonText>
                    </ButtonTextWrapper>
                </AddButton>
            </ProductCard>
        );
    }

    render() {
        const { products } = this.state;
        return (
            <Container>
                <ProductList data={products} renderItem={this.renderProducts} />
            </Container>
        );
    }
}
