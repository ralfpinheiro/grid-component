import React from 'react';
import styled from 'styled-components';

const Burgermenu = (props) => {
    return (
        <Wrapper onClick={props.handleNavbar}>
            <div className={ props.navbarState ? 'open' : '' }>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
            </div>
        </Wrapper>
    )
}

export default Burgermenu;

const Wrapper =styled.div`
    position: relative;
    cursor: pointer;
    display: block;
    height: fit-content;
    width: 40px;
    height: 40px;

    & span {
        background: #fdcb6e;
        display: block;
        position: relative;
        width: 3rem;
        height: .3rem;
        margin-bottom: .7rem;
        transition: all ease-in-out .2s;


    }

    .open {
        width: 100%;
        height: 100%;

    }

    .open span:nth-child(3) {
        transform: rotate(45deg);
        top: 2px;
      }

      .open span:nth-child(2) {
        opacity: 0;
      }
    
    .open span:nth-child(1) {
        transform: rotate(-45deg);
        position: absolute;
        top: 14px;
    }
`;