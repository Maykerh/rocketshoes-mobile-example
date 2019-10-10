import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import {
    Container,
    CartScrollView,
    CartWrapper,
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductTitle,
    PriceText,
    ProductDescription,
    QuantityBand,
    QuantityActions,
    QuantityButton,
    Quantity,
    Footer,
    TotalText,
    TotalPrice,
    FinishButton,
    ButtonText,
} from './styles';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.renderProduct = this.renderProduct.bind(this);
        this.changeAmount = this.changeAmount.bind(this);

        this.state = {
            quantity: 1,
        };
    }

    changeAmount(product, qt) {
        const newAmount = product.amount + qt;
        console.tron.log(newAmount);

        this.props.updateAmountRequest(product.id, newAmount);
    }

    renderProduct(product) {
        return (
            <ProductCard>
                <ProductInfo>
                    <ProductImage
                        source={{
                            uri: product.image,
                        }}
                    />
                    <ProductDescription>
                        <ProductTitle>{product.title}</ProductTitle>
                        <PriceText>{product.priceFormatted}</PriceText>
                    </ProductDescription>
                </ProductInfo>
                <QuantityBand>
                    <QuantityActions>
                        <QuantityButton
                            onPress={() => {
                                this.changeAmount(product, -1);
                            }}>
                            <Icon
                                name="remove-circle-outline"
                                size={20}
                                color={'#7159c1'}
                            />
                        </QuantityButton>
                        <Quantity
                            keyboardType={'numeric'}
                            value={product.amount && product.amount.toString()}
                            editable={false}
                            maxLength={2}
                        />
                        <QuantityButton
                            onPress={() => {
                                this.changeAmount(product, 1);
                            }}>
                            <Icon
                                name="add-circle-outline"
                                size={20}
                                color={'#7159c1'}
                            />
                        </QuantityButton>
                    </QuantityActions>

                    <PriceText>{product.subTotal}</PriceText>
                </QuantityBand>
            </ProductCard>
        );
    }

    render() {
        const { products, total } = this.props;
        return (
            <Container>
                <CartScrollView>
                    <CartWrapper>
                        {products.map(product => this.renderProduct(product))}
                        <Footer>
                            <TotalText>{'TOTAL'}</TotalText>
                            <TotalPrice>{total}</TotalPrice>
                            <FinishButton>
                                <ButtonText>{'Finalizar pedido'}</ButtonText>
                            </FinishButton>
                        </Footer>
                    </CartWrapper>
                </CartScrollView>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    products: state.cart.map(product => ({
        ...product,
        subTotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
        state.cart.reduce(
            (total, product) => total + product.price * product.amount,
            0
        )
    ),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
