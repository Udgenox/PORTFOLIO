import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";
import {font} from "../../styles/Common.ts";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Evgeniy</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}  iconId={"instagram"} />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}  iconId={"telegram"} />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}  iconId={"vk"} />
                        </SocialLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}  iconId={"linkedin"} />
                        </SocialLink>
                    </SocialItem>


                </SocialList>
                <Copyright>© 2025 Evgeniy Kovalev, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
    position: relative;
`;
const Name = styled.span`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
    
`
const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accent};
    
    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: ${theme.colors.font};
    opacity: 0.5;
`
const SocialItem = styled.li`
    
`
