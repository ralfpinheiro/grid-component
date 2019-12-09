import React from 'react'
import styled from "styled-components";
import logo from "../../assets/logo-min.png";

const Brand = () => {
    return (
        <Image src={logo} alt="Logo" />
    )
}

export default Brand;

const Image = styled.img`
    height: 65%;
    margin: auto 0;
`;