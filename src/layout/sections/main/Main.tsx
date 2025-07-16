import styled from "styled-components";
import photo from '../../../assets/Ava.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme.ts";



export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} >
                    <div>
                        <SmallText>Hi there</SmallText>
                        <Name>I am <span>Evgeniy Kovalev</span> </Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

export default Main;

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #ddd;
    display: flex;
`

const MainTitle = styled.h1`
    li
    font-weight: 400;
    font-style: Regular;
    font-size: 27px;
    leading-trim: NONE;
    line-height: 100%;
    letter-spacing: 0%;

`

const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;
    
    span {
        position: relative;
        z-index: 0;
        
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent}; 
            
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

const SmallText = styled.h2`
    /* Hi There */
    font-weight: 400;
    font-size: 14px;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        position: absolute;
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        top: -24px;
        left: 24px;
        z-index: -1;
        
    }
`



