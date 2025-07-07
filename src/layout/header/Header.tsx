import styled from "styled-components";
import {Logo} from "../../components/logo/logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

const items =['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>
                    <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>


    );
};

const StyledHeader = styled.header`
    background-color: darkgray;
`



export default Header;