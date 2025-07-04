import styled from "styled-components";
import photo from '../../../assets/Ava.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"} >
                <div>
                    <span>Hi there</span>
                    <Name>I am Svetlana Dyablo</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

export default Main;

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: antiquewhite;
`

const MainTitle = styled.h1`
    
`

const Name = styled.h2`

`

