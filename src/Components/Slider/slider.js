import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./8.jpg";
import image2 from "./12.jpg";

const Sliderfile= () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoPlay: true,
    };
  
    return(
      <div>
        <Container>
                <Wrapper>
                        <Carousel {...settings}>
                                <Wrap>
                                        <Div1>
                                                <H3>H e a d s e t   F o r   A l l  S t y l e</H3>
                                                <H1>STARTING $19</H1>
                                                <Button>SHOP NOW</Button>
                                        </Div1>
                                        <img src= {image1}   alt="img1"/>
                                </Wrap>
                                <Wrap>
                                        <Div2>
                                                <H3>F u r n i s h i n g   D e a l s</H3>
                                                <H1>UP TO 70% OFF</H1>
                                                <Button>SHOP NOW</Button>
                                        </Div2>
                                        <img src= {image2}   alt="img2"/>
                                </Wrap>
                        </Carousel>      
                </Wrapper>
       </Container>
      </div>
    )
};

  
export default Sliderfile;


const Carousel = styled(Slider)`
overflow: hidden;
width: 95%;
height: 100%;

& > button {
  height: 100%;
  width: 5vw;
  z-index: 1;
}

ui li button {
  &::before {
    font-size: 10px;
    color: rgb(150, 158, 171);
  }
}
li.slick-active button:before {
  color: white;
}
`;
const Container =styled.div`
height: 63vh;
width: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper =styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrap =styled.div`
height: 100%;
width: 100%;
display: block;
position: relative;

img{
  height: 100%;
  width: 100%;
}
`;
const Div1 =styled.div`
width: 100%;
height: 100%;
position: absolute;
/* background-color: gold; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Div2 =styled.div`
width: 50%;
height: 100%;
position: absolute;
/* background-color: gold; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const H1 =styled.div`
font-size: 50px;
color: black;
`;
const H3 =styled.div`
font-size: 15px;
color: darkslategrey;
margin-top: 10px;
`;
const Button =styled.div`
width: 120px;
height: 40px;
background-color: #3e5067;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
color: white;
font-size: 12px;
cursor: pointer;
`;