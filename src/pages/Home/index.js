import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

export default function Home() {
    const [products, setProducts] = useState([]);
    const amount = useSelector(state => {
        return state.cart.reduce((amount, product) => {
            amount[product.id] = product.amount;

            return amount;
        }, {});
    });

    const dispatch = useDispatch();

    useEffect(() => {
        async function loadProducts() {
            const result = await api.get('/products');

            const data = result.data.map(product => ({
                ...product,
                titleFormated: product.title.substr(0, 40),
                priceFormatted: formatPrice(product.price),
            }));

            setProducts(data);
        }

        loadProducts();
    }, []);

    function addProductToCart(id) {
        dispatch(addToCartRequest(id));
    }

    function renderProducts(product) {
        return (
            <ProductCard key={product.item.id}>
                <ProductImage source={{ uri: product.item.image }} />
                <ProductTitle>{product.item.titleFormated}</ProductTitle>
                <PriceText>{product.item.priceFormatted}</PriceText>
                <AddButton
                    onPress={() => {
                        addProductToCart(product.item.id);
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

    return (
        <Container>
            <ProductList data={products} renderItem={renderProducts} />
        </Container>
    );
}
