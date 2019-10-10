import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
    background-color: #141419;
    flex-direction: row;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px 0 15px;
`;

export const Logo = styled.Image.attrs({
    source: logo,
    resizeMode: 'cover',
})`
    width: 230px;
    height: 30px;
    margin-top: -10px;
`;

export const CartIconWrapper = styled.TouchableOpacity`
    margin-right: 15px;
`;

export const CartIconCounter = styled.Text`
    background-color: #7159c1;
    color: #fff;
    text-align: center;
    height: 20px;
    width: 20px;
    font-weight: bold;
    border-radius: 50;
    position: absolute;
    left: 15px;
    bottom: 10px;
`;
