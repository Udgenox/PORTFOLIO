import styled, {css} from "styled-components";
import {theme} from "../styles/Theme.ts";


export const Link = styled.a<{active?:boolean}>`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    position: relative;
    z-index: 0;
    
    &:hover {
        &::before{
            height: 10px;
        }
    }

    &::before {
        content: "";
        display: inline-block;
        //height: 10px;
        background-color: ${theme.colors.accent};

        position: absolute;
        bottom: 5px;
        left: 0 ;
        right: 0 ;
        z-index: -1;
        
        ${props => props.active && css<{active?: boolean}>`
            height: 10px;
        `}

    }
`