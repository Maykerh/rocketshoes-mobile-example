import React, { Component } from 'react';
import { connect } from 'react-redux';

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

import { formatPrice } from '../../util/format';
import { addToCartRequest } from '../../store/modules/cart/actions';
import api from '../../services/api';

class Home extends Component {
    constructor(props) {
        super(props);

        this.loadProducts = this.loadProducts.bind(this);
        this.renderProducts = this.renderProducts.bind(this);
        this.addProductToCart = this.addProductToCart.bind(this);

        this.state = {
            products: [],
        };
    }

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

    addProductToCart(id) {
        this.props.addToCartRequest(id);
    }

    renderProducts(product) {
        const { amount } = this.props;

        return (
            <ProductCard key={product.item.id}>
                <ProductImage source={{ uri: product.item.image }} />
                <ProductTitle>{product.item.titleFormated}</ProductTitle>
                <PriceText>{product.item.priceFormatted}</PriceText>
                <AddButton
                    onPress={() => {
                        this.addProductToCart(product.item.id);
                    }}>
                    <QuantityWrapper>
                        <ButtonText>{amount[product.item.id] || 0}</ButtonText>
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

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;

        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch => ({
    addToCartRequest: id => dispatch(addToCartRequest(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
