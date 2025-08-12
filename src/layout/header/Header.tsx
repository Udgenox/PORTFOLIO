import {Logo} from "../../components/logo/logo.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {DeskopMenu} from "./headerMenu/deskopMenu/DeskopMenu.tsx";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import {S} from './Header_Styles.ts'
import * as React from "react";



export const Header : React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect( () => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Logo/>

                    {width < breakpoint ? <MobileMenu />
                                        : <DeskopMenu />}
                </FlexWrapper>
            </Container>
        </S.Header>


    );
};

export default Header;