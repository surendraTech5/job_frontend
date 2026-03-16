import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/media/logo.png";
import logo from "../assets/media/logo_01.jpeg";
import styled from "styled-components";

const Logo = () => {
    return (
        <Wrapper>
            <Link to="/">
                <img src={logo} alt="Hunter logo"/>
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    max-width: 130px; /* keep same so header doesn't grow */
    display: flex;
    align-items: center;

    @media screen and (max-width: 600px) {
        max-width: 100px;
    }

    a {
        text-decoration: none;
        display: inline-block;
    }

    img {
        width: 100%;
        object-fit: contain;
        transform: scale(1.3);
        transform-origin: center;
    }
`;

export default Logo;
