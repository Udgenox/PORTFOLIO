
import {Menu} from "../menu/Menu.tsx";
import {S} from "./../HeaderMenu_Styles"



export const DeskopMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.DeskopMenu>
            <Menu menuItems={props.menuItems}/>
        </S.DeskopMenu>
    );
};

