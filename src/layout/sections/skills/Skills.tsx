
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import styled from "styled-components";

const skillData = [
    {
        iconId: 'codeSVG',
        title: 'html5',
        description: 'Семантическая верстка, доступность (WAI-ARIA)'
    },
    {
        iconId: 'css',
        title: 'css3',
        description: 'Адаптивный дизайн, Flex/Grid, анимации'
    },
    {
        iconId: 'figma',
        title: 'React',
        description: 'Разработка SPA, хуки, управление состоянием'
    },
    {
        iconId: 'react',
        title: 'typescript',
        description: 'Типизация компонентов, интерфейсы'
    },
    {
        iconId: 'nails',
        title: 'styled components',
        description: 'CSS-in-JS, темизация'
    },
    {
        iconId: 'ts',
        title: 'WEB DESIgN',
        description: 'UI/UX, мобильная адаптация, Figma'
    },
    {
        iconId: 'Python',
        title: 'Python',
        description: 'Скриптинг, автоматизация'
    },
    {
        iconId: 'OOP',
        title: 'OOP',
        description: 'Классы, наследование, SOLID принципы'
    },
]

export const Skills = () => {
    return (
        <StyledSkills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}
                                      description={s.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

export default Skills;

const StyledSkills = styled.section`
    position: relative;
`

