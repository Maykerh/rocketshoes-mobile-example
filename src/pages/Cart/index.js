import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';

import {
    Container,
    CartWrapper,
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductTitle,
    PriceText,
    ProductDescription,
    QuantityBand,
    Quantity,
    Footer,
    TotalText,
    TotalPrice,
    FinishButton,
    ButtonText,
} from './styles';

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1,
        };
    }
    static navigationOptions = {
        headerTitle: <Header />,
    };

    render() {
        return (
            <Container>
                <CartWrapper>
                    <ProductCard>
                        <ProductInfo>
                            <ProductImage
                                source={{
                                    uri:
                                        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                                }}
                            />
                            <ProductDescription>
                                <ProductTitle>
                                    {'Meu tenis bacana'}
                                </ProductTitle>
                                <PriceText>{'R$ 179,90'}</PriceText>
                            </ProductDescription>
                        </ProductInfo>
                        <QuantityBand>
                            <Quantity
                                keyboardType={'numeric'}
                                value={this.state.quantity || 0}
                                maxLength={2}
                                onChangeText={text => {
                                    this.setState({
                                        quantity: text.replace(/[^0-9]/g, ''),
                                    });
                                }}
                            />

                            <PriceText>{'R$ 179,90'}</PriceText>
                        </QuantityBand>
                    </ProductCard>
                    <Footer>
                        <TotalText>{'TOTAL'}</TotalText>
                        <TotalPrice>{'R$ 179,90'}</TotalPrice>
                        <FinishButton>
                            <ButtonText>{'Finalizar pedido'}</ButtonText>
                        </FinishButton>
                    </Footer>
                </CartWrapper>
            </Container>
        );
    }
}
