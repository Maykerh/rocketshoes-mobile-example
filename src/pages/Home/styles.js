import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
    flex: 1;
    background-color: #141419;
    padding: 15px;
`;

export const ProductList = styled.FlatList.attrs({
    horizontal: true,
})``;

export const ProductCard = styled.View`
    background-color: #fff;
    height: 410px;
    width: 250px;
    margin-right: 15px;
    border-radius: 5px;
    padding: 10px;
`;

export const ProductImage = styled.Image`
    height: 230px;
    width: 100%;
`;

export const ProductTitle = styled.Text`
    font-size: 18px;
    color: #333333;
    line-height: 25;
    margin-left: 10px;
`;

export const PriceText = styled.Text`
    font-size: 25px;
    margin-top: 10px;
    margin-left: 10px;
    font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
    background-color: #7159c1;
    height: 50px;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 13px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const ButtonTextWrapper = styled.View`
    background-color: #7159c1;
    height: 50px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const QuantityWrapper = styled.View`
    background-color: ${darken(0.03, '#7159c1')};
    height: 45px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;
