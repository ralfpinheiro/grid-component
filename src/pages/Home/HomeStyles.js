import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: ${px2vw(32)};
    max-width: 100%;

    @media(min-width: 1024px) {
        flex-wrap: ;
    }
`;

export const Box = styled.div`
    display: flex;
    width: ${px2vw(320, 320)};
    flex-direction: column;
    padding: ${px2vw(40)};
    margin: ${px2vw(20)};
    background-color: ${props => props.bgColor};

    @media(min-width: 768px) {
        width: calc(50% - 60px);
    }

    @media(min-width: 1024px) {
        width: calc(25% - 60px);
    }
`;

export const BoxTitle = styled.h3`
    color: #333;
    font-size: 2rem;
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;

    @media(min-width: 1024px) {
        font-size: 1.5rem;
    }
`;

export const BoxText = styled.p`
    margin-top: ${px2vw(20)};
    color: #505050;
    font-size: 1.5rem;

    @media(min-width: 1024px) {
        font-size: 1rem;

    }
`;