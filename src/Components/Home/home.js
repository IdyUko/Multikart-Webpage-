import React from "react";
import styled from "styled-components";
import Slide  from "../Slider/slider";
import {CgCode} from "react-icons/cg"
import {TfiTruck} from "react-icons/tfi"
import {BsMegaphone} from "react-icons/bs"
import {IoIosTimer} from "react-icons/io"


const Home = () =>{
  return(
        <Container>
                <Slide/>

                <Section1>
                <Wrap>
                <Div1> 
                        <Left></Left>
                        <Right><P>SAVE 30%</P><B>CAMERA</B></Right>
                </Div1>
                <Div2>
                        <Left></Left>
                        <Right><P>SAVE 60%</P><B>BAGS</B></Right>
                </Div2>
                <Div3>
                        <Left></Left>
                        <Right><P>SAVE 60%</P><B>TOYS</B></Right>
                </Div3>
                <Div4>
                        <Left></Left>
                        <Right><P>SAVE 60%</P><B>SHOES</B></Right>
                </Div4>
                </Wrap>
                </Section1>

                <Section2>
                        <H3>Special Offer</H3>
                        <H1>TOP COLLECTION</H1>
                        <U></U>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been<br/>the industry's standard dummy text ever since the 1500s.</Text>
                </Section2> 

                <Section3>
                        <Wrap3>
                                <Card>
                                        <Top></Top>
                                        <Bottom>
                                                <P1></P1>
                                                <P2></P2>
                                                <P3></P3>
                                        </Bottom>
                                </Card>
                                <Card>
                                        <Top></Top>
                                        <Bottom>
                                                <P1></P1>
                                                <P2></P2>
                                                <P3></P3>
                                        </Bottom>
                                </Card>
                                <Card>
                                        <Top></Top>
                                        <Bottom>
                                                <P1></P1>
                                                <P2></P2>
                                                <P3></P3>
                                        </Bottom>
                                </Card>
                                <Card>
                                        <Top></Top>
                                        <Bottom>
                                                <P1></P1>
                                                <P2></P2>
                                                <P3></P3>
                                        </Bottom>
                                </Card>
                        </Wrap3>
                </Section3>

                <Section4>
                        <Wrap4>
                                <Leftsect4></Leftsect4>
                                <Rightsect4>
                                        <H11>SALE</H11>
                                        <H12>FASHION TRENDS</H12>
                                        <H13>S P E C I A L   O F F E R</H13>
                                </Rightsect4>
                        </Wrap4>
                </Section4>

                <Section5>
                        <Wrap5>
                                <Top5>
                                        <Header1>
                                                UNDER $20 | FREE DELIVERY
                                                <CgCode style={{width: 25, height: 25}}/>
                                        </Header1>
                                        <Header2>
                                                RECOMMENDATIONS FOR YOU
                                               <Products>
                                                        <NPs>New Products</NPs>
                                                       <FPs> Featured Products</FPs>
                                                </Products> 
                                        </Header2>
                                </Top5>
                                <Bottom5>
                                        <Left5></Left5>
                                        <Right5>
                                               <img src="/offer-banner.jpg" />
                                        </Right5>
                                </Bottom5>
                        </Wrap5>
                </Section5>

                <Section6>
                        <Wrap6>
                                <Top6>
                                        <TfiTruck  style={{width: 100,  height:35}}/>
                                        <H4>FREE SHIPPPING</H4>
                                        <H5>Free Shipping World Wide</H5>
                                </Top6>
                                <Mid6>
                                        <IoIosTimer style={{width: 100,  height:35}}/>
                                        <H4>24 X 7 SERVICE</H4>
                                        <H5>Online Service for 24 x 7</H5>
                                </Mid6>
                                <Bottom6>
                                        <BsMegaphone style={{width: 100,  height:35}} />
                                        <H4>FESTIVAL OFFER</H4>
                                        <H5>New Online Special Festival</H5>
                                </Bottom6>                              
                        </Wrap6>
                        <H16># INSTAGRAM</H16>
                </Section6>

        </Container>
  )
};

export default Home;


const Container = styled.div`
width: 100%;
height: auto;
background-color: transparent;
`;
const Section1 = styled.div`
width: 100%;
height: 35vh;
/* background-color: gainsboro; */
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`;
const Wrap = styled.div`
width: 100%;
height: 30vh;
margin: 10px;
background-color: transparent;
display: flex;
justify-content:space-between;
align-items: center;
`;
const Div1= styled.div`
width: 320px;
height: 180px;
background-image: url(./5.jpg);
background-position: center;
background-size: cover;
display: flex;
`;
const Div2= styled.div`
width: 320px;
height: 180px;
background-image: url(./10.jpg);
background-position: center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`;
const Div3= styled.div`
width: 320px;
height: 180px;
background-image: url(./88.jpg);
background-position: center;
background-size: cover;
display: flex;
`;
const Div4= styled.div`
width: 320px;
height: 180px;
background-image: url(./9.jpg);
background-position: center;
background-size: cover;
display: flex;
`;
const Left = styled.div`
width: 50%;
height: 100%;
/* background-color: green; */
`;
const Right = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: yellowgreen; */
`;
const P = styled.div`
color: grey;
font-size: 18px;
`;
const B = styled.div`
font-size: 25px;
font-weight: bold;
`;


const Section2= styled.div`
width: 100%;
height: 30vh;
font-family: sans-serif;
/* background-color: gainsboro; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const H1 = styled.div`
color: black;
font-size: 35px;
font-weight: bold;
margin-top: 10px;
`;
const H3 = styled.div`
color: darkslategray;
font-size: 18px;
`;
const Text = styled.div`
color: darkslategray;
font-size: 15px;
margin-top: 30px;
text-align: center;
`;
const U = styled.div`
width: 60px;
border: 3px solid #3e5067;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
`;


const Section3 = styled.div`
width: 100%;
height: 60vh;
/* background-color: gainsboro; */
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`;
const Wrap3 = styled.div`
width: 85%;
height: 60vh;
display: flex;
justify-content: center;
align-items: center;
`;
const Card= styled.div`
width: 300px;
height: 100%;
background-color: white;
margin: 10px;
`;
const Top= styled.div`
width: 100%;
height: 70%;
background-color: gainsboro;
`;
const Bottom = styled.div`
width: 100%;
height: 25%;
/* background-color: peru; */
`;
const P1= styled.div`
width: 30%;
height: 12px;
background-color: gainsboro;
margin-top: 15px;
`;
const P2= styled.div`
width: 70%;
height: 12px;
background-color: gainsboro;
margin-top: 10px;
`;
const P3= styled.div`
width: 50%;
height: 12px;
background-color: gainsboro;
margin-top: 10px;
`;


const Section4 = styled.div`
width: 100%;
height: 70vh;
background-color: aliceblue;
background-image: url(./28.jpg);
background-position: center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
position: static;
`;
const Wrap4 = styled.div`
width: 100%;
height: 70vh;
display: flex;
justify-content: center;
align-items: center;
`;
const Leftsect4 = styled.div`
width: 50%;
`;
const Rightsect4= styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: scroll;
`;
const H11 = styled.div`
color: #3e5067;
font-size: 75px;
font-weight: bold;
`;
const H12 = styled.div`
color: black;
font-size: 50px;
font-weight: bold;
margin-top: 15px;
`;
const H13 = styled.div`
color: grey;
font-size: 20px;
margin-top: 15px;
`;


const Section5 = styled.div`
width: 100%;
height: 50vh;
/* background-color: teal; */
display: flex;
justify-content: center;
align-items: center;
`;
const Wrap5 = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Top5 = styled.div`
width: 100%;
height: 30%;
/* background-color: khaki; */
display: flex;
color: white;
justify-content: space-between;
align-items: center;

`;
const Header1= styled.div`
width: 30%;
height: 35px;
background-color: #3e5067;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 5px;
padding: 5px;
`;
const Header2= styled.div`
width: 65%;
height: 35px;
background-color: #3e5067;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 5px;
padding: 5px;
`;
const Products= styled.div`
width: 33%;
height: 40px;
/* background-color: plum; */
display: flex;
justify-content: space-between;
align-items: center;
`;
const NPs= styled.div``;
const FPs= styled.div``;
const Bottom5= styled.div`
width: 100%;
height: 60%;
/* background-color: peru; */
margin-top: 20px;
margin-bottom: 30px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Left5= styled.div`
width: 30%;
height: 100%;
/* background-color: khaki; */
`;
const Right5= styled.div`
width: 66%;
height: 100%;
/* background-color: peru; */

img{
        width: 100%;
        height: 100%;
}
`;


const Section6 = styled.div`
width: 100%;
height: 45vh;
/* background-color: aquamarine; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Wrap6 = styled.div`
width: 90%;
height: 100%;
display: flex;
margin-top: 30px;
border-top: 1px solid gainsboro;
border-bottom: 1px solid gainsboro;
`;
const Top6 = styled.div`
width: 33%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: teal; */
`;
const Mid6 = styled.div`
width: 33%;
height: 50%;
border-left: 1px solid gainsboro;
border-right: 1px solid gainsboro;
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Bottom6 = styled.div`
width: 33%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const H4 = styled.div`
font-size: 20px;
`;
const H5 = styled.div`
color: gray;
font-size: 15px;
`;
const H16= styled.div`
font-size: 30px;
font-weight: bold;
margin-top: 40px;
`;
