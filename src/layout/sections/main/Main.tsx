import styled from "styled-components";
import photo from '../../../assets/Ava.webp'

export const Main = () => {
    return (
        <div>
            <div>
                <span>Hi there</span>
                <h2>I am Svetlana Dyablo</h2>
                <h1>A Web Developer.</h1>
            </div>

            <Photo src={photo} alt=""/>
        </div>
    );
};

export default Main;

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`