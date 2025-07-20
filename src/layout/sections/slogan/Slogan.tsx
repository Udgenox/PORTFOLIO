import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction="column" align={"center"}>
                    <SectionTitle> I Am Available for Freelance</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>

        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: rgba(20,195,173,0.53);
    display: flex;
    align-items: center;
`