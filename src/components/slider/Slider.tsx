import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <Name>@ivan ivanow</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span className={"active"}> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    
`

const Slide = styled.div`
    
    text-align: center;
`
const Text = styled.p`
    
`
const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 42px;
    display: inline-block;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        margin: 5px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 20px;

        & + span {
            margin-left: 5px;
        }

        &.active {
            background: ${theme.colors.accent};
            width: 20px;
            
        }
    }
`;

