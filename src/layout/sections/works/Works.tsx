import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from "../../../assets/images/social.png";
import timeImg from "../../../assets/images/timeline.png";

const worksItems = ["All", "Landing page", "React", "spa"];

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify="space-around">
                <Work title={'Social work'} text={'Lorem Ipsum'} src={socialImg}/>
                <Work title={'Timer'} text={'Lorem Ipsum'} src={timeImg}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #e8d5d5

`
