import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
    const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

    if (props.navbarState === true) {
        return (
          <CollapseWrapper style={{
            transform: open.interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
          }}
          >
            <NavLinks>
              <li><a href="/" onClick={props.handleNavbar}>link 1</a></li>
              <li><a href="/" onClick={props.handleNavbar}>link 2</a></li>
              <li><a href="/" onClick={props.handleNavbar}>link 3</a></li>
              <li><a href="/" onClick={props.handleNavbar}>link 4</a></li>
            </NavLinks>
          </CollapseWrapper>
        );
      }
      return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
    background: #525f7f;
    position: fixed;
    top: 4.5rem;
    left: 0;
    right: 0;
`;

const NavLinks = styled.ul`
    list-style-type: none;
    padding: 2rem 1rem 2rem 2rem;
    font-family: 'Montserrat', sans-serif;

    & li {
        transition: all .3s linear 0s;
    }

    & a {
        font-size: 1.4rem;
        line-height: 2.5;
        color: #dfe6e9;
        text-transform: uppeercase;
        text-decoration: none;
        cursor: pointer;
        text-align: center;
        display: block;
        max-width: 400px;
        margin: 0 auto;

        &:hover {
            color: #fdcb6e;
            border-bottom: 1px solid #fdcb6e;
        }
    }
`;