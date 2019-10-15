import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    DeleteButton,
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

export default function Cart() {
    const products = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subTotal: formatPrice(product.price * product.amount),
        }))
    );

    const total = useSelector(state =>
        formatPrice(
            state.cart.reduce(
                (total, product) => total + product.price * product.amount,
                0
            )
        )
    );

    const dispatch = useDispatch();

    function changeAmount(product, qt) {
        const newAmount = product.amount + qt;

        dispatch(CartActions.updateAmountRequest(product.id, newAmount));
    }

    function renderProduct(product) {
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
                    <DeleteButton
                        onPress={() =>
                            dispatch(CartActions.removeFromCart(product.id))
                        }>
                        <Icon
                            name="delete-forever"
                            size={24}
                            color={'#7159c1'}
                        />
                    </DeleteButton>
                </ProductInfo>
                <QuantityBand>
                    <QuantityActions>
                        <QuantityButton
                            onPress={() => {
                                changeAmount(product, -1);
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
                                changeAmount(product, 1);
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

    return (
        <Container>
            <CartScrollView>
                <CartWrapper>
                    {products.map(product => renderProduct(product))}
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
