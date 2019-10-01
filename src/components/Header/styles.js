import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
    background-color: #141419;
    justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
    source: logo,
    resizeMode: 'cover',
})`
    width: 185px;
    height: 24px;
`;
