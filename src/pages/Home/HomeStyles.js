import styled from 'styled-components';
import px2vw from '../utils/px2vw';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: ${px2vw(32)};
    max-width: 100%;

    @media(min-width: 1024px) {
        flex-wrap: nowrap;
    }
`;

export const Box = styled.div`
    display: flex;
    width: ${px2vw(320, 320)};
    min-height: ${px2vw(200, 320)};
    flex-direction: column;
    padding: ${px2vw(20)};
    margin: ${px2vw(20)};
    background-color: ${props => props.bgcolor};
`;

export const BoxTitle = style.h3`
    color: #333;
    font-size: 2rem;
    text-align: center;

    @media(min-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const BoxText = style.p`
margin-top: ${px2vw(20)};
color: #505050;
font-size: 1.5rem;

@media(min-width: 1024px) {
    font-size: 1rem;

}
`;