import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from 'react-spring';

import Brand from './Brand';
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';

const Navbar = (props) => {
    const barAnimation = useSpring({
        from: { transform: 'translate3d(0, -10rem, 0)' },
        transform: 'translate3d(0, 0, 0)',
    })

    const linkAnimation = useSpring({
        from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.wobbly,
        });

    return (
        <>
            <NavBar style={barAnimation}>
                <FlexContainer>
                    <Brand />
                    <NavLinks style={linkAnimation}>
                        <a href="/">link 1</a>
                        <a href="/">link 2</a>
                        <a href="/">link 3</a>
                        <a href="/">link 4</a>
                    </NavLinks>
                    <BurgerWrapper>
                        <BurgerMenu
                        navbarState={props.navbarState} 
                        handleNavbar={props.handleNavbar}
                        />
                    </BurgerWrapper>
                </FlexContainer>
            </NavBar>
            <CollapseMenu 
            navbarState={props.navbarState} 
            handleNavbar={props.handleNavbar}
            />
        </>
    )
}

export default Navbar;

const NavBar = styled(animated.nav)`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #525f7f;
    z-index: 1;
    font-size: 1.4rem;
`;

const FlexContainer = styled.div`
    max-width: 120rem;
    display: flex;
    margin: auto;
    padding: 0 2rem;
    justify-content: space-between;
    height: 5.5rem;
`;

const NavLinks = styled(animated.ul)`
    justify-self: end;
    list-style-type: none;
    margin: auto 0;

    & a {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: #f3f3f3;
        border-bottom: 1px solid transparent;
        margin: 0 1.5rem;
        transition: all 300ms linear 0s;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: #3ecf8e;
            border-bottom: 1px solid #3ecf8e;
        }

        @media (max-width: 768px) {
            display: none;
        }
    }
`;

const BurgerWrapper = styled.div`
    margin: auto 0;

    @media(min-width: 769px) {
        display: none;
    }
`;