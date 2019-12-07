import styled, { css } from 'styled-components';
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
    margin: ${px2vw(20)};
    color: #505050;
    font-size: 1.5rem;
    text-align: center;

    @media(min-width: 1024px) {
        font-size: 1rem;
    }
`;

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid white;
    color: white;
    margin: 0 1em;
    padding: 1em 1em;
    margin: 12px auto;
    cursor: pointer;
    width: ${px2vw(320)};
    transition: all .2s ease;

    &:hover {
        background: white;
        color: black;
    }

    @media(min-width: 1024px) {
        font-size: 1rem;
        width: ${px2vw(200)};
}

  ${props => 
    props.primary && css`
    background: white;
    color: black;   
    
    &:hover {
        background: black;
        color: white;
        border: 2px solid black;
    }
    
    `};
`;
