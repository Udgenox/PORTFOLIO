import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 5px;
    margin-bottom: 90px;
    
    position: relative;
    
    &::before {
        content: '';
        display: block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        ma
        
    }
`;