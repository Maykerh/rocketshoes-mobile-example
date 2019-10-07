import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #141419;
    padding: 15px;
`;

export const CartWrapper = styled.ScrollView`
    background-color: #fff;
    height: auto;
    width: 100%;
    /* margin-right: 15px; */
    border-radius: 5px;
    padding: 20px;
`;

export const ProductCard = styled.View`
    background-color: #fff;
    height: 200px;
    width: 100%;
    margin-right: 15px;
    border-radius: 5px;
`;

export const ProductInfo = styled.View`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    height: 150px;
    width: 100%;
`;

export const ProductImage = styled.Image`
    width: 120px;
    height: 120px;
`;

export const ProductDescription = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;
    height: 120px;
    margin-left: 15px;
`;

export const ProductTitle = styled.Text`
    font-size: 18px;
    color: #333333;
    line-height: 25;
`;

export const PriceText = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export const QuantityBand = styled.View`
    width: 100%;
    background-color: #eee;
    height: 50px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0 15px;
`;

export const Quantity = styled.TextInput`
    background-color: #fff;
    width: 60px;
    height: 35px;
    border: 1px solid #ddd;
    padding: 0 0 0 15px;
    font-size: 18px;
    color: #333333;
    border-radius: 5px;
`;

export const Footer = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 30px;
`;

export const TotalText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #999999;
`;

export const TotalPrice = styled.Text`
    font-size: 35px;
    font-weight: bold;
`;

export const FinishButton = styled.TouchableOpacity`
    background-color: #7159c1;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;
