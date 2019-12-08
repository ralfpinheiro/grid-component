import styled, { css } from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Section = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 20px;
    background: #f3f3f3;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: strecth;
    justify-content: space-evenly;
    margin: ${px2vw(32)};
    height: 100%;
    max-width: 100%;

    @media(min-width: 1024px) {
        flex-wrap: ;
    }
`;

export const PageHeading = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5em;
    margin: ${px2vw(60)};
    color: #525f7f;
    font-weight: 800;
    text-align: center;

`;

export const Box = styled.div`
    display: flex;
    width: ${px2vw(320, 320)};
    flex-direction: column;
    justify-content: space-around;
    padding: ${px2vw(40)};
    margin: ${px2vw(12)};
    border-radius: ${px2vw(4)};
    background-color: ${props => props.bgColor};
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2);

    @media(min-width: 768px) {
        width: calc(50% - 24px);
    }

    @media(min-width: 1300px) {
        width: calc(25% - 24px);
    }
`;

export const BoxTitle = styled.h3`
    color: #3ecf8e;
    font-size: 2.2rem;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    margin: ${px2vw(20)} auto ${px2vw(10)} auto;

    @media(min-width: 1024px) {
        font-size: 1.8rem;
    }
`;

export const BoxText = styled.p`
    margin: ${px2vw(10)} auto ${px2vw(20)} auto;
    color: #525f7f;
    font-size: 1.5rem;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    max-width: 400px;

    @media(min-width: 1024px) {
        font-size: 1rem;
    }
`;

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #525f7f;
    color: #525f7f;
    margin: 0 1em;
    padding: 1em 1em;
    margin: 20px auto;
    cursor: pointer;
    width: ${px2vw(320)};
    transition: all .2s ease;
    font-size: 1.2rem;
    
    &:hover {
        background: #525f7f;
        color: #fff;
    }

    @media(min-width: 1024px) {
        width: ${px2vw(200)};
}

  ${props => 
    props.primary && css`
    background: #525f7f;
    color: #fff;
    
    &:hover {
        background: #3ecf8e;;
        color: white;
        border: 2px solid #3ecf8e;
    }
    
    `};
`;
