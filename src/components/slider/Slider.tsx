import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/slider.css'
import {S} from './Slider_Styles.ts'

type SlidePropsType = {
    text: string,
    userName: string
}


const Slide = (props:SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )
}


const items = [
    <Slide userName={"Ivan Ivanow"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et " +
        "dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
    <Slide userName={"Petr Petrow"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et " +
        "dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
    <Slide userName={"Igor Igorew"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et " +
        "dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />
];

export const Slider = () => (
    <S.Slider>
    <AliceCarousel
        mouseTracking
        items={items}
    />
    </S.Slider>
);

// const StyledSlider = styled.div`
//     max-width: 500px;
//     display: flex;
//     flex-direction: column;
//     border: 1px solid red;
// `

// const Text = styled.p`
//
// `
// const Name = styled.span`
//     font-family: 'Josefin Sans', sans-serif;
//     font-weight: 600;
//     font-size: 16px;
//     letter-spacing: 1px;
//     text-transform: uppercase;
//     margin: 22px 0 42px;
//     display: inline-block;
// `


// import styled from "styled-components";
// import {FlexWrapper} from "../FlexWrapper.tsx";
// import {theme} from "../../styles/Theme.ts";
//
//
// export const Slider = () => {
//     return (
//         <StyledSlider>
//             <FlexWrapper>
//                 <Slide>
//                     <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
//                     <Name>@ivan ivanow</Name>
//                 </Slide>
//             </FlexWrapper>
//             <Pagination>
//                 <span> </span>
//                 <span className={"active"}> </span>
//                 <span> </span>
//             </Pagination>
//         </StyledSlider>
//     );
// };
//
// const StyledSlider = styled.div`
//     max-width: 500px;
//     display: flex;
//     flex-direction: column;
//
// `
//
// const Slide = styled.div`
//
//     text-align: center;
// `
// const Text = styled.p`
//
// `
// const Name = styled.span`
//     font-family: 'Josefin Sans', sans-serif;
//     font-weight: 600;
//     font-size: 16px;
//     letter-spacing: 1px;
//     text-transform: uppercase;
//     margin: 22px 0 42px;
//     display: inline-block;
// `
//
// const Pagination = styled.div`
//     span {
//         display: inline-block;
//         width: 7px;
//         height: 7px;
//         margin: 5px;
//         background-color: rgba(255, 255, 255, 0.5);
//         border-radius: 20px;
//
//         & + span {
//             margin-left: 5px;
//         }
//
//         &.active {
//             background: ${theme.colors.accent};
//             width: 20px;
//
//         }
//     }
// `;

