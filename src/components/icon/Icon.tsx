
import iconSprite from '../../assets/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props:IconPropsType) => {
    return (
        <svg width={props.width || "50"}  height={props.height || "50"} viewBox= {props.viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}></use>
        </svg>
        );
};

