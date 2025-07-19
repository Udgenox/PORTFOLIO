import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Skill iconId={"codeSVG"} title={'html5'} description={'Первый скилл'}/>
                    <Skill iconId={"css"} title={'css3'} description={'Второй'}/>
                    <Skill iconId={"figma"} title={'React'} description={'Третий'}/>
                    <Skill iconId={"react"} title={'typescript'} description={'Четрвертый'}/>
                    <Skill iconId={"nails"} title={'styled components'} description={'Пятый'}/>
                    <Skill iconId={"ts"} title={'WEB DESIgN'} description={'Шестой'}/>
                    <Skill iconId={'Python'} title={'Python'} description={'Python skills'}/>
                    <Skill iconId={'OOP'} title={'OOP'} description={'Object Oriented Programming'} />
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

export default Skills;


const StyledSkills = styled.section``

