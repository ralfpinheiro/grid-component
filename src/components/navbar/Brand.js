import React from 'react'
import styled from "styled-components";

const Brand = () => {
    return (
        <Logo>
            <LogoCenter />
        </Logo>
    )
}

export default Brand;

const LogoCenter = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #525f7f;
    box-shadow: 0px -1px 8px 2px rgba(0,0,0,0.2);

    @media(max-width: 768px) {
        width: 12px;
        height: 12px;
    }

`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #fdcb6e, #fdb86e, #fda76e, #fdc66e, #fdd96e, #fdde6e);
	background-size: 400% 400%;
    animation: gradientBG 8s ease infinite;
    box-shadow: 0px -1px 8px 2px rgba(253,203,110,0.3);

    @media(max-width: 768px) {
        width: 35px;
        height: 35px;
    }

}

@keyframes gradientBG {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`;