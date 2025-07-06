import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";


export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle> I Am Available for Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: rgba(20,195,173,0.53);
    display: flex;
    flex-direction: column;
    align-items: center;
`