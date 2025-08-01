import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type TabmenuPropsType = {
    tabsItems: Array<{status: TabsStatusType, title: string}>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
}

export const Tabmenu = (props: TabmenuPropsType) => {
    return (
            <StyledTabMenu>
                <ul>
                    {props.tabsItems.map((item, index)  =>{
                        return <ListItem key={index}>
                                    <Link active={props.currentFilterStatus === item.status} as={"button"}
                                          onClick={()=> {props.changeFilterStatus(item.status)}}>{item
                                        .title}</Link>
                                </ListItem>
                            })}
                </ul>
            </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        //gap: 20px;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        border: 1px solid red;
        margin: 0 auto 40px;
    }
`

const ListItem = styled.li`
    
`




