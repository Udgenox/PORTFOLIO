import {Link} from "../../../../components/Link.tsx";
import {Button} from "../../../../components/Button.tsx";
import {S} from './../Works_Styles.ts'

type WorkPropsType = {
    title: string,
    text: string,
    src: string
}


export const Work = (props : WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=''/>
                <Button>View Project</Button>
            </S.ImageWrapper>

            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link active href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </S.Description>

        </S.Work>
    );
};

